/**
 * WeiminContracts — 수임계약 데이터 레이어
 * 저장: File System Access API (D드라이브) + localStorage 이중화
 */
const WeiminContracts = (() => {
  const LS_KEY      = 'wcms_contracts';
  const LS_ALERTS   = 'wcms_alerts_sent';
  const LS_SETTINGS = 'wcms_notify_settings';
  const FILE_NAME   = 'contracts.json';
  let _dir = null;

  /* ── IndexedDB: 폴더 핸들 영속 보관 ── */
  const idb = {
    _db: null,
    open() {
      return new Promise((res, rej) => {
        if (this._db) return res(this._db);
        const r = indexedDB.open('WeiminFS', 1);
        r.onupgradeneeded = e => e.target.result.createObjectStore('handles');
        r.onsuccess  = e => { this._db = e.target.result; res(this._db); };
        r.onerror    = e => rej(e.target.error);
      });
    },
    async put(key, val) {
      const db = await this.open();
      return new Promise((res, rej) => {
        const tx = db.transaction('handles', 'readwrite');
        tx.objectStore('handles').put(val, key);
        tx.oncomplete = res; tx.onerror = e => rej(e.target.error);
      });
    },
    async get(key) {
      const db = await this.open();
      return new Promise((res, rej) => {
        const tx = db.transaction('handles', 'readonly');
        const req = tx.objectStore('handles').get(key);
        req.onsuccess = e => res(e.target.result || null);
        req.onerror   = e => rej(e.target.error);
      });
    }
  };

  /* ── 파일 읽기/쓰기 ── */
  async function _readFile(dir) {
    try {
      const fh   = await dir.getFileHandle(FILE_NAME, { create: true });
      const text = await (await fh.getFile()).text();
      return text.trim() ? JSON.parse(text) : [];
    } catch { return null; }
  }

  async function _writeFile(dir, data) {
    const fh = await dir.getFileHandle(FILE_NAME, { create: true });
    const w  = await fh.createWritable();
    await w.write(JSON.stringify(data, null, 2));
    await w.close();
  }

  /* ── 폴더 연결 (사용자 제스처 필요) ── */
  async function connectFolder() {
    try {
      const handle = await window.showDirectoryPicker({ mode: 'readwrite' });
      _dir = handle;
      await idb.put('contractsDir', handle);
      await _writeFile(handle, getAll());
      return { ok: true };
    } catch (e) {
      if (e.name === 'AbortError') return { ok: false, cancelled: true };
      return { ok: false, error: e.message };
    }
  }

  /* ── 저장된 폴더 핸들 복원 (자동 — 페이지 로드 시) ── */
  async function tryRestoreDir() {
    try {
      const handle = await idb.get('contractsDir');
      if (!handle) return false;
      const perm = await handle.queryPermission({ mode: 'readwrite' });
      if (perm === 'granted') {
        _dir = handle;
        const data = await _readFile(handle);
        if (Array.isArray(data)) localStorage.setItem(LS_KEY, JSON.stringify(data));
        return true;
      }
    } catch {}
    return false;
  }

  /* ── 권한 요청 (사용자 제스처 필요) ── */
  async function requestDirPermission() {
    try {
      const handle = await idb.get('contractsDir');
      if (!handle) return false;
      const perm = await handle.requestPermission({ mode: 'readwrite' });
      if (perm === 'granted') {
        _dir = handle;
        const data = await _readFile(handle);
        if (Array.isArray(data)) localStorage.setItem(LS_KEY, JSON.stringify(data));
        return true;
      }
    } catch {}
    return false;
  }

  /* ── localStorage ── */
  function getAll() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch { return []; }
  }

  async function _sync(data) {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
    if (_dir) { try { await _writeFile(_dir, data); } catch {} }
  }

  /* ── CRUD ── */
  function _uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  async function add(c) {
    const all = getAll();
    c.id        = _uid();
    c.createdAt = new Date().toISOString();
    all.unshift(c);
    await _sync(all);
    return c;
  }

  async function update(id, updates) {
    const all = getAll();
    const i   = all.findIndex(c => c.id === id);
    if (i < 0) return null;
    all[i] = { ...all[i], ...updates, updatedAt: new Date().toISOString() };
    await _sync(all);
    return all[i];
  }

  async function remove(id) {
    await _sync(getAll().filter(c => c.id !== id));
  }

  function getById(id) { return getAll().find(c => c.id === id) || null; }

  /* ── 날짜 유틸 ── */
  function daysUntil(dateStr) {
    const d = new Date(dateStr); d.setHours(0, 0, 0, 0);
    const t = new Date();        t.setHours(0, 0, 0, 0);
    return Math.round((d - t) / 86400000);
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return `${y}년 ${+m}월 ${+d}일`;
  }

  /* ── 알림 설정 ── */
  function getSettings() {
    try { return JSON.parse(localStorage.getItem(LS_SETTINGS) || '{}'); } catch { return {}; }
  }
  function saveSettings(s) { localStorage.setItem(LS_SETTINGS, JSON.stringify(s)); }

  /* ── 알림 발송 추적 ── */
  function _wasSentToday(key) {
    try {
      const m = JSON.parse(localStorage.getItem(LS_ALERTS) || '{}');
      return m[key] === new Date().toISOString().slice(0, 10);
    } catch { return false; }
  }
  function markSent(key) {
    const m = JSON.parse(localStorage.getItem(LS_ALERTS) || '{}');
    m[key]  = new Date().toISOString().slice(0, 10);
    localStorage.setItem(LS_ALERTS, JSON.stringify(m));
  }

  /* ── 발송 대기 알림 목록 ── */
  function getPendingAlerts() {
    const THRESHOLDS = [14, 7, 3, 1, 0];
    const result = [];
    for (const c of getAll()) {
      if (c.status === '완료' || !c.expiryDate) continue;
      const days = daysUntil(c.expiryDate);
      for (const th of THRESHOLDS) {
        if (days === th) {
          const key = `${c.id}_d${th}`;
          if (!_wasSentToday(key)) result.push({ contract: c, days, key });
        }
      }
    }
    return result;
  }

  return {
    connectFolder, tryRestoreDir, requestDirPermission,
    isConnected: () => !!_dir,
    getAll, add, update, remove, getById,
    daysUntil, formatDate,
    getSettings, saveSettings,
    getPendingAlerts, markSent
  };
})();
