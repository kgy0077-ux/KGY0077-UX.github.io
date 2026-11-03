/* ============================================================
   행정사사무소 위민 — main.js + CMS 통합
   ============================================================ */

/* ── 사이트 공통 기능 ── */

window.addEventListener('scroll', () => {
    const h = document.getElementById('header');
    if (h) h.style.boxShadow = scrollY > 50 ? '0 4px 20px rgba(0,0,0,.35)' : '0 2px 12px rgba(0,0,0,.25)';
});

function toggleMenu() {
    const m = document.getElementById('mobileMenu');
    if (m) m.classList.toggle('open');
}

function submitForm() {
    const nameEl    = document.querySelector('.form-input[placeholder="성함"]');
    const phoneEl   = document.querySelector('.form-input[placeholder="연락처 (010-0000-0000)"]');
    const serviceEl = document.querySelector('select.form-input');
    const msgEl     = document.querySelector('.form-textarea');

    const inputs = [nameEl, phoneEl, serviceEl, msgEl].filter(Boolean);
    if (inputs.some(i => !i.value.trim())) { alert('모든 항목을 입력해 주세요.'); return; }

    const name      = nameEl?.value.trim()    || '';
    const userPhone = phoneEl?.value.trim()   || '';
    const service   = serviceEl?.value.trim() || '';
    const msg       = msgEl?.value.trim()     || '';

    const toPhone = (typeof WeiminCMS !== 'undefined' && WeiminCMS.get('office.phone')) || '000-0000-0000';
    const toEmail = (typeof WeiminCMS !== 'undefined' && WeiminCMS.get('office.email')) || 'kgy0077@naver.com';

    const msgText = `[위민 상담신청]\n성함: ${name}\n연락처: ${userPhone}\n분야: ${service}\n문의: ${msg}`;

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        /* 모바일: 문자 앱 열기 → 사업주 번호로 내용 자동 입력 */
        window.location.href = `sms:${toPhone}?body=${encodeURIComponent(msgText)}`;
    } else {
        /* PC: 이메일 클라이언트 열기 → 사업주 메일로 내용 자동 입력 */
        const subject = encodeURIComponent(`[위민 상담신청] ${service} — ${name}`);
        window.location.href = `mailto:${toEmail}?subject=${subject}&body=${encodeURIComponent(msgText)}`;
    }

    inputs.forEach(i => { i.value = ''; });
}

const _obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.12 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card, .step, .partner-card, .content-block').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        _obs.observe(el);
    });
});


/* ============================================================
   WeiminCMS — 콘텐츠 관리 시스템
   ============================================================ */
const WeiminCMS = (function () {

    const PFX = 'wcms_';

    /* ── 기본값 (HTML 페이지의 실제 텍스트와 일치해야 합니다) ── */
    const D = {
        /* 연락처 */
        'office.mobile'  : '010-4607-6764',
        'office.phone'   : '042-477-6764',
        'office.email'   : 'kgy0077@naver.com',
        'office.address' : '대전광역시 서구 둔산대로117번길 66, 2층 208호 (만년동, 골든타워)',
        'office.hours'   : '평일 09:00 - 18:00',

        /* 메인 히어로 */
        'hero.badge'    : '공인 행정사 전문 사무소',
        'hero.tagline'  : '복잡한 행정 절차, 저희가 대신합니다',

        /* 소개 */
        'about.desc1'   : '위민(爲民)은 \'국민을 위한다\'는 뜻으로, 복잡한 행정 절차로 어려움을 겪는 모든 분들의 권익을 보호하기 위해 설립되었습니다.',
        'about.desc2'   : '풍부한 경험과 전문 지식을 바탕으로, 개인과 기업의 다양한 행정 수요에 신속하고 정확하게 대응합니다.',

        /* 통계 */
        'stats.cases'        : '500+',
        'stats.satisfaction' : '98%',
        'stats.years'        : '10+',

        /* 상담 */
        'contact.intro' : '친절하게 안내해 드리겠습니다',

        /* 서비스 히어로 설명 */
        'svc.인허가.hero'   : '각종 사업 인허가 신청·갱신 및 행정 절차 대리 전문',
        'svc.인증.hero'     : 'ISO·벤처·이노비즈 등 각종 인증 취득·갱신·유지 행정 대행 전문',
        'svc.출입국.hero'   : '비자 신청·연장·변경, 외국인 체류허가, 귀화 신청 전문',
        'svc.조달.hero'     : '정부 조달 입찰 지원, 나라장터 등록, 계약 체결 행정 대행',
        'svc.행정심판.hero' : '행정처분 불복 심판 청구 및 대행 — 부당한 처분으로부터 권익을 보호합니다',
        'svc.사실조사.hero' : '행정 관련 현지 사실 확인·조사 및 공적 확인 서류 작성 전문',

        /* 서비스 필요 서류 / 안내 목록 (줄바꿈으로 항목 구분) */
        'svc.인허가.docs'   : '신청인 신분증 (사본)\n사업자등록증 (법인의 경우 법인등기부등본)\n사업장 임대차계약서 또는 건물 소유 서류\n건축물 대장 (용도 확인용)\n허가 업종별 자격증 또는 면허증\n시설 평면도 및 현황 사진\n위생교육 수료증 (해당 업종)\n소방시설 완공 검사 필증 (해당 시설)',
        'svc.인증.docs'     : '사업자등록증\n법인등기부등본 (법인의 경우)\n회사 소개서 및 주요 사업 현황\n재무제표 (최근 2개년)\n품질·기술 관련 자체 규정 또는 매뉴얼\n연구개발 실적 및 기술 인력 현황 (해당 인증)\n특허·인증·수상 실적 (보유 시)\n벤처확인서 또는 기업부설연구소 인정서 (해당 시)',
        'svc.출입국.docs'   : '여권 (유효기간 6개월 이상)\n외국인 등록증 (기 등록자)\n표준규격사진 (3.5cm × 4.5cm) 2매\n체류 자격별 입증 서류 (재직증명서, 가족관계증명서 등)\n수수료 납부 영수증\n임대차계약서 또는 주거 확인 서류\n건강보험 가입 확인서 (해당 자격)\n범죄경력증명서 (귀화, 영주권 신청 시)',
        'svc.조달.docs'     : '사업자등록증\n법인등기부등본 (법인의 경우)\n공사·용역·물품 실적 증명서\n재무제표 (최근 2개년)\n건강보험료 납부 확인서\n국세·지방세 완납 증명서\n업종별 면허·등록·신고 확인서\n중소기업 확인서 (해당 시)',
        'svc.행정심판.docs' : '처분이 있음을 안 날부터 90일 이내 청구 (행정심판법 제27조)\n처분이 있은 날부터 180일 이내 청구 (정당한 사유 없이 초과 불가)\n집행정지는 본안 심판 청구와 함께 또는 별도 신청 가능\n처분서 수령 즉시 상담 권장 — 기간 도과 시 청구 불가',
        'svc.사실조사.docs' : '소송·행정심판 증거 자료가 필요한 경우\n인허가 신청 시 현황 확인 서류가 필요한 경우\n부동산 거래 또는 상속·증여 시 현황 파악이 필요한 경우\n보험·손해배상 청구를 위한 현장 증빙이 필요한 경우\n해외 거주자의 국내 재산·거주 실태 확인이 필요한 경우\n공공기관 제출용 사실확인서가 필요한 경우\n건물·토지의 무단점유·불법사용 확인이 필요한 경우',
    };

    /* ── 스토리지 ── */
    const get     = k => { const v = localStorage.getItem(PFX + k); return v !== null ? v : (D[k] !== undefined ? D[k] : ''); };
    const set     = (k, v) => localStorage.setItem(PFX + k, v);
    const getAll  = () => Object.fromEntries(Object.keys(D).map(k => [k, get(k)]));
    const setAll  = obj => Object.entries(obj).forEach(([k, v]) => set(k, v));
    const resetAll = () => Object.keys(D).forEach(k => localStorage.removeItem(PFX + k));

    /* ── 인증 ── */
    const isAdmin  = () => sessionStorage.getItem(PFX + 'auth') === '1';
    /* 비밀번호는 평문이 아닌 SHA-256 해시로만 보관·비교 */
    const sha256 = str => {
        const K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
        const b=Array.from(new TextEncoder().encode(str)); const l=b.length*8; b.push(0x80);
        while(b.length%64!==56) b.push(0);
        for(let i=7;i>=0;i--) b.push(i>=4?0:(l>>>(i*8))&255);
        let H=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
        const r=(x,n)=>(x>>>n)|(x<<(32-n));
        for(let o=0;o<b.length;o+=64){const w=new Array(64);
            for(let i=0;i<16;i++) w[i]=(b[o+i*4]<<24)|(b[o+i*4+1]<<16)|(b[o+i*4+2]<<8)|b[o+i*4+3];
            for(let i=16;i<64;i++){const s0=r(w[i-15],7)^r(w[i-15],18)^(w[i-15]>>>3),s1=r(w[i-2],17)^r(w[i-2],19)^(w[i-2]>>>10);w[i]=(w[i-16]+s0+w[i-7]+s1)|0;}
            let [a,bb,c,d,e,f,g,h]=H;
            for(let i=0;i<64;i++){const t1=(h+(r(e,6)^r(e,11)^r(e,25))+((e&f)^(~e&g))+K[i]+w[i])|0,t2=((r(a,2)^r(a,13)^r(a,22))+((a&bb)^(a&c)^(bb&c)))|0;h=g;g=f;f=e;e=(d+t1)|0;d=c;c=bb;bb=a;a=(t1+t2)|0;}
            H=H.map((v,i)=>(v+[a,bb,c,d,e,f,g,h][i])|0);}
        return H.map(v=>(v>>>0).toString(16).padStart(8,'0')).join('');
    };
    const DEFAULT_PW_HASH = 'f7f435a798797e659485337e2b1f5302fbce8bccbff276a22a3b76b743f74219';
    const storedPwHash = () => { const v = localStorage.getItem(PFX + 'pw'); if (!v) return DEFAULT_PW_HASH; return /^[0-9a-f]{64}$/.test(v) ? v : sha256(v); };
    const login    = pw => { const ok = sha256(pw) === storedPwHash(); if (ok) sessionStorage.setItem(PFX + 'auth', '1'); return ok; };
    const logout   = () => { sessionStorage.removeItem(PFX + 'auth'); };
    const changePw = np => localStorage.setItem(PFX + 'pw', sha256(np));

    /* ── 현재 서비스 페이지 감지 ── */
    const SVCS = ['인허가', '인증', '출입국', '조달', '행정심판', '사실조사'];
    const currentService = () => {
        const p = decodeURIComponent(location.pathname);
        return SVCS.find(s => p.includes('/' + s + '/')) || null;
    };

    /* ── 텍스트 교체 (DOM 텍스트 노드 순회) ── */
    function replaceText(search, replace) {
        if (!search || search === replace) return;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const nodes = [];
        let n;
        while ((n = walker.nextNode())) {
            if (n.textContent.includes(search)) nodes.push(n);
        }
        nodes.forEach(n => { n.textContent = n.textContent.split(search).join(replace); });
    }

    /* ── tel: 링크 업데이트 ── */
    function updateTelLinks(phone) {
        document.querySelectorAll('a[href^="tel:"]').forEach(a => {
            a.href = 'tel:' + phone.replace(/[^0-9]/g, '');
        });
    }

    /* ── HTML 이스케이프 ── */
    function escHtml(s) {
        return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }

    /* ── 필요 서류 목록 재구성 ── */
    function buildDocList(key) {
        const val = get(key);
        const list = document.querySelector('.doc-list');
        if (!list || !val) return;
        list.innerHTML = val.split('\n').filter(s => s.trim()).map(s => `<li>${escHtml(s.trim())}</li>`).join('');
    }

    /* ── 페이지에 콘텐츠 적용 ── */
    function apply() {
        /* 전체 공통 */
        replaceText(D['office.mobile'],  get('office.mobile'));
        replaceText(D['office.phone'],   get('office.phone'));
        replaceText(D['office.email'],   get('office.email'));
        replaceText(D['office.address'], get('office.address'));
        replaceText(D['office.hours'],   get('office.hours'));
        updateTelLinks(get('office.phone'));

        const svc = currentService();

        if (!svc) {
            /* 메인 홈페이지 전용 */
            replaceText(D['hero.badge'],         get('hero.badge'));
            replaceText(D['hero.tagline'],        get('hero.tagline'));
            replaceText(D['about.desc1'],         get('about.desc1'));
            replaceText(D['about.desc2'],         get('about.desc2'));
            replaceText(D['stats.cases'],         get('stats.cases'));
            replaceText(D['stats.satisfaction'],  get('stats.satisfaction'));
            replaceText(D['stats.years'],         get('stats.years'));
            replaceText(D['contact.intro'],       get('contact.intro'));
        } else {
            /* 서비스 페이지 전용 */
            const heroKey = 'svc.' + svc + '.hero';
            replaceText(D[heroKey], get(heroKey));
            buildDocList('svc.' + svc + '.docs');
        }
    }

    /* ── 관리자 경로 계산 ── */
    function adminBasePath() {
        const p = decodeURIComponent(location.pathname);
        return (p.includes('/pages/') || p.includes('/data/')) ? '../../admin/' : 'admin/';
    }

    /* ── CSS 주입 ── */
    function injectStyles() {
        if (document.getElementById('wcms-style')) return;
        const s = document.createElement('style');
        s.id = 'wcms-style';
        s.textContent = `
            /* 관리자 툴바 */
            .wcms-toolbar {
                position: fixed; top: 0; left: 0; right: 0; z-index: 99999;
                background: #070f1a; height: 46px;
                display: flex; align-items: center; gap: 12px; padding: 0 20px;
                box-shadow: 0 2px 10px rgba(0,0,0,.5); font-family: 'Malgun Gothic',sans-serif;
            }
            .wcms-tb-brand {
                color: #FFD54F; font-weight: 800; font-size: 14px;
                margin-right: auto; letter-spacing: 1px;
            }
            .wcms-tb-btn {
                background: rgba(255,255,255,.1); color: #dde; padding: 6px 16px;
                border-radius: 6px; font-size: 13px; font-weight: 600;
                text-decoration: none; transition: background .2s; white-space: nowrap;
            }
            .wcms-tb-btn:hover { background: rgba(255,255,255,.2); color: #fff; }
            .wcms-tb-logout { background: rgba(200,50,50,.25) !important; color: #f99 !important; }
            .wcms-tb-logout:hover { background: rgba(200,50,50,.45) !important; }
        `;
        document.head.appendChild(s);
    }

    /* ── 관리자 UI 주입 ── */
    function injectUI() {
        // admin 폴더 내 페이지에서는 주입하지 않음
        if (decodeURIComponent(location.pathname).includes('/admin/')) return;

        // 비로그인 방문자에게는 관리자 진입 버튼을 노출하지 않음
        // (관리자는 admin/index.html을 직접 북마크하여 접속)
        if (!isAdmin()) return;

        const base = adminBasePath();
        const bar = document.createElement('div');
        bar.className = 'wcms-toolbar';
        bar.innerHTML = `
            <span class="wcms-tb-brand">🔧 위민 관리자 모드</span>
            <a href="${base}panel.html" class="wcms-tb-btn">⚙ 관리 패널</a>
            <a href="${base}index.html?from=logout" onclick="WeiminCMS.logout()" class="wcms-tb-btn wcms-tb-logout">로그아웃</a>
        `;
        document.body.insertBefore(bar, document.body.firstChild);
        document.body.style.paddingTop = '46px';
    }

    /* ── 초기화 ── */
    function init() {
        /* 구버전 기본값 마이그레이션 — 잘못 저장된 전화번호·이메일 제거 */
        (function() {
            /* 전화번호: 하이픈 없는 값 또는 잘못된 번호 → 삭제하여 올바른 기본값 사용 */
            var _badPhones = ['000-0000-0000', '0424776764', '042-4777-6764', '04247776764', ''];
            var _sp = localStorage.getItem(PFX + 'office.phone');
            if (_sp !== null && (_badPhones.indexOf(_sp) !== -1 || _sp.indexOf('-') === -1)) {
                localStorage.removeItem(PFX + 'office.phone');
            }
            /* 휴대전화: 하이픈 없는 값 제거 */
            var _sm = localStorage.getItem(PFX + 'office.mobile');
            if (_sm !== null && (_sm === '' || _sm.indexOf('-') === -1)) {
                localStorage.removeItem(PFX + 'office.mobile');
            }
            /* 이메일: 이전 기본값 제거 */
            var _badEmails = ['weimin@admin.kr', ''];
            var _se = localStorage.getItem(PFX + 'office.email');
            if (_se !== null && _badEmails.indexOf(_se) !== -1) {
                localStorage.removeItem(PFX + 'office.email');
            }
            /* 주소: 이전 플레이스홀더 제거 */
            if (localStorage.getItem(PFX + 'office.address') === '주소를 입력해주세요') {
                localStorage.removeItem(PFX + 'office.address');
            }
        })();

        const run = () => { injectStyles(); apply(); injectUI(); };
        document.readyState === 'loading'
            ? document.addEventListener('DOMContentLoaded', run)
            : run();
    }

    return { get, set, getAll, setAll, resetAll, isAdmin, login, logout, changePw, init, DEFAULTS: D, currentService };
})();

WeiminCMS.init();

/* ============================================================
   서비스 상세 모달 — SPA
   ============================================================ */
const SVC_DATA = {
    '인허가': {
        icon:'📋', gradient:'linear-gradient(135deg,#0D47A1,#1565C0,#1E88E5)',
        desc:'각종 사업 인허가 신청·갱신 및 행정 절차 대리 전문',
        items:[
            {icon:'🏪',title:'영업허가·신고',desc:'식품영업, 공중위생업 등 각종 영업허가 및 신고'},
            {icon:'🏗️',title:'건축허가·신고',desc:'건축물 신축·증축·용도변경 허가 및 신고'},
            {icon:'🏥',title:'의료·약업 개설허가',desc:'의원, 약국, 한의원 등 의료기관 개설 허가'},
            {icon:'🚚',title:'운수·물류 면허',desc:'화물운송, 택배, 화물자동차 운송사업 면허'},
            {icon:'🔧',title:'건설업 등록',desc:'종합건설업·전문건설업 등록 및 갱신'},
            {icon:'🌿',title:'환경·개발허가',desc:'개발행위허가, 농지전용허가, 산지전용허가'},
            {icon:'🎤',title:'유흥·오락 영업허가',desc:'단란주점, 유흥주점, 노래연습장 영업허가'},
            {icon:'♻️',title:'폐기물처리업 허가',desc:'폐기물 수집·운반·처리업 허가 및 갱신'},
        ],
        docs:['신청인 신분증 (사본)','사업자등록증 (법인의 경우 법인등기부등본)','사업장 임대차계약서 또는 건물 소유 서류','건축물 대장 (용도 확인용)','허가 업종별 자격증 또는 면허증','시설 평면도 및 현황 사진','위생교육 수료증 (해당 업종)','소방시설 완공 검사 필증 (해당 시설)'],
        steps:[
            {title:'상담 및 검토',desc:'업종·사업장 위치·요건 검토, 허가 가능 여부 사전 확인'},
            {title:'서류 준비',desc:'필요 서류 목록 안내 및 서류 작성 지원'},
            {title:'신청서 접수',desc:'관할 관청(시·군·구청, 도청 등)에 신청서 제출'},
            {title:'현장 조사 대응',desc:'관청의 현장 조사 일정 조율 및 동행 지원'},
            {title:'허가증 수령',desc:'허가증 수령 후 의뢰인에게 전달 및 사후 관리 안내'},
        ],
    },
    '인증': {
        icon:'🏆', gradient:'linear-gradient(135deg,#E65100,#F57F17,#FFA000)',
        desc:'ISO·벤처·이노비즈 등 각종 인증 취득·갱신·유지 행정 대행 전문',
        items:[
            {icon:'🌐',title:'ISO 국제 인증',desc:'ISO 9001(품질), ISO 14001(환경), ISO 45001(안전) 인증 취득'},
            {icon:'🚀',title:'벤처기업 확인',desc:'기술보증·연구개발·혁신성장 유형별 벤처기업 확인 신청'},
            {icon:'💡',title:'이노비즈 인증',desc:'기술혁신형 중소기업(이노비즈) 인증 신청 및 갱신'},
            {icon:'📈',title:'메인비즈 인증',desc:'경영혁신형 중소기업(메인비즈) 인증 취득 및 갱신'},
            {icon:'🔬',title:'기업부설연구소 인정',desc:'기업부설연구소·연구개발전담부서 인정 신청'},
            {icon:'🌱',title:'녹색인증',desc:'녹색기술·녹색사업 인증 신청 및 관련 행정 처리'},
            {icon:'🏅',title:'여성기업·사회적기업',desc:'여성기업 확인, 사회적기업 인증 신청 및 갱신'},
            {icon:'🛡️',title:'정보보안 인증(ISMS)',desc:'정보보호관리체계(ISMS) 인증 신청 행정 절차'},
        ],
        docs:['사업자등록증','법인등기부등본 (법인의 경우)','회사 소개서 및 주요 사업 현황','재무제표 (최근 2개년)','품질·기술 관련 자체 규정 또는 매뉴얼','연구개발 실적 및 기술 인력 현황','특허·인증·수상 실적 (보유 시)','벤처확인서 또는 기업부설연구소 인정서 (해당 시)'],
        steps:[
            {title:'상담 및 인증 유형 결정',desc:'기업 현황 분석, 목적에 맞는 인증 종류 선택'},
            {title:'서류 준비 및 진단',desc:'필요 서류 점검, 미비 사항 보완 지원'},
            {title:'신청서 작성 및 접수',desc:'인증기관(중기부, 한국인터넷진흥원 등)에 신청서 제출'},
            {title:'심사 대응',desc:'서면·현장 심사 일정 조율 및 보완 요청 대응'},
            {title:'인증서 수령 및 사후 관리',desc:'인증서 수령 후 갱신 일정 및 유지 요건 안내'},
        ],
    },
    '출입국': {
        icon:'✈️', gradient:'linear-gradient(135deg,#1B5E20,#2E7D32,#43A047)',
        desc:'비자 신청·연장·변경, 외국인 체류허가, 귀화 신청 전문',
        items:[
            {icon:'📄',title:'비자 신청·연장·변경',desc:'각종 체류자격 신청, 연장 및 자격 변경 대행'},
            {icon:'🪪',title:'외국인 등록',desc:'외국인 등록증 신규 발급 및 재발급'},
            {icon:'🔄',title:'체류자격 변경',desc:'취업·유학·결혼·투자 등 체류자격 변경'},
            {icon:'🌏',title:'귀화 신청',desc:'일반귀화, 간이귀화, 특별귀화 신청 대행'},
            {icon:'🏠',title:'영주권 취득',desc:'영주자격(F-5) 신청 및 유지 관리'},
            {icon:'✈️',title:'재입국허가',desc:'장기 출국 시 재입국허가 및 다중 재입국'},
            {icon:'💼',title:'취업허가·고용허가',desc:'외국인 취업허가 및 사업주 고용허가 신청'},
            {icon:'👨‍👩‍👧',title:'가족 초청·결합',desc:'가족 초청 비자 및 결혼이민 체류자격 대행'},
        ],
        docs:['여권 (유효기간 6개월 이상)','외국인 등록증 (기 등록자)','표준규격사진 (3.5cm × 4.5cm) 2매','체류 자격별 입증 서류 (재직증명서, 가족관계증명서 등)','수수료 납부 영수증','임대차계약서 또는 주거 확인 서류','건강보험 가입 확인서 (해당 자격)','범죄경력증명서 (귀화, 영주권 신청 시)'],
        steps:[
            {title:'체류 현황 확인',desc:'현재 체류자격 및 기간 확인, 목적에 맞는 절차 안내'},
            {title:'서류 준비',desc:'체류자격별 필요 서류 목록 안내 및 수집 지원'},
            {title:'신청서 접수',desc:'출입국·외국인청 방문 또는 온라인 신청 대행'},
            {title:'심사 대응',desc:'보완 서류 요청 시 신속 대응'},
            {title:'결과 통보',desc:'허가증 수령 및 등록증 발급 후 안내'},
        ],
    },
    '조달': {
        icon:'🏛️', gradient:'linear-gradient(135deg,#BF360C,#E65100,#FB8C00)',
        desc:'정부 조달 입찰 지원, 나라장터 등록, 계약 체결 행정 대행',
        items:[
            {icon:'🖥️',title:'나라장터 등록',desc:'조달청 나라장터 공급자 등록 신청 및 갱신'},
            {icon:'📊',title:'입찰 지원',desc:'적격심사, 협상에 의한 계약 등 입찰 서류 작성'},
            {icon:'📜',title:'실적 증명서 발급',desc:'공사·용역·물품 공급 실적 증명서 발급 대행'},
            {icon:'🏷️',title:'MAS 계약 등록',desc:'다수공급자계약(MAS) 등록 및 단가 계약 지원'},
            {icon:'🔍',title:'적격심사 대비',desc:'재무·기술·인력 등 적격심사 요건 점검 및 보완'},
            {icon:'📋',title:'계약 체결 대행',desc:'낙찰 후 계약서 작성 및 계약 체결 절차 대행'},
            {icon:'🏢',title:'중소기업 확인',desc:'중소기업·소기업·소상공인 확인서 발급 지원'},
            {icon:'✅',title:'입찰보증보험',desc:'입찰보증·계약보증·하자보수보증 처리 지원'},
        ],
        docs:['사업자등록증','법인등기부등본 (법인의 경우)','공사·용역·물품 실적 증명서','재무제표 (최근 2개년)','건강보험료 납부 확인서','국세·지방세 완납 증명서','업종별 면허·등록·신고 확인서','중소기업 확인서 (해당 시)'],
        steps:[
            {title:'사업자 현황 분석',desc:'사업자 등록 상태, 실적, 면허 등 요건 검토'},
            {title:'나라장터 등록',desc:'조달청 공급자 등록 신청 및 등록 완료'},
            {title:'입찰 서류 작성',desc:'공고문 분석, 입찰 참가 자격 확인 및 서류 작성'},
            {title:'입찰 참가',desc:'나라장터를 통한 전자입찰 참가 지원'},
            {title:'계약 체결',desc:'낙찰 후 계약서 작성 및 이행 관리 안내'},
        ],
    },
    '행정심판': {
        icon:'⚖️', gradient:'linear-gradient(135deg,#4A0072,#880E4F,#D81B60)',
        desc:'행정처분 불복 심판 청구 및 대행 — 부당한 처분으로부터 권익을 보호합니다',
        items:[
            {icon:'🚫',title:'영업정지 처분 불복',desc:'영업정지·영업취소 처분에 대한 심판 청구'},
            {icon:'📝',title:'허가취소 취소 청구',desc:'각종 허가·인가 취소 처분에 대한 불복 심판'},
            {icon:'💰',title:'과태료 처분 불복',desc:'부당한 과태료·과징금 처분 취소 청구'},
            {icon:'🏗️',title:'시정명령 불복',desc:'건축·환경·위생 관련 시정명령에 대한 심판'},
            {icon:'⏸️',title:'집행정지 신청',desc:'처분의 효력을 잠정 중단하는 집행정지 신청'},
            {icon:'✅',title:'의무이행심판',desc:'행정청의 부작위에 대한 의무이행 심판 청구'},
            {icon:'🔍',title:'거부처분 취소',desc:'신청에 대한 부당한 거부 처분 취소 심판'},
            {icon:'📅',title:'기간 내 긴급 대응',desc:'처분일로부터 90일/180일 기간 엄수 긴급 처리'},
        ],
        docs:['처분서 또는 처분 통지서 (사본)','처분에 이의를 제기하는 이유서','관련 증거 자료 및 서류 일체','처분이 있음을 안 날부터 90일 이내 청구 필요','처분이 있은 날부터 180일 이내 청구 필요','집행정지는 별도 신청 가능 (본안과 동시 또는 별도)','처분서 수령 즉시 상담 권장 (기간 도과 시 청구 불가)'],
        steps:[
            {title:'처분 내용 즉시 분석',desc:'처분서 수령 즉시 연락 — 청구 기간 확인'},
            {title:'심판 청구서 작성',desc:'처분의 위법·부당 사유 정리 및 청구서 작성'},
            {title:'중앙행정심판위원회 제출',desc:'청구서 및 증거 서류 제출'},
            {title:'심리 대응',desc:'서면심리·구술심리 대응 및 보충 서류 제출'},
            {title:'재결 수령',desc:'인용·기각 재결 수령 후 후속 대책 안내'},
        ],
    },
    '사실조사': {
        icon:'🔍', gradient:'linear-gradient(135deg,#1A0072,#4A148C,#7B1FA2)',
        desc:'행정 관련 현지 사실 확인·조사 및 공적 확인 서류 작성 전문',
        items:[
            {icon:'⚖️',title:'소송·심판 증거 수집',desc:'행정심판·소송에 필요한 현장 증거 자료 조사'},
            {icon:'🏢',title:'인허가 현황 확인',desc:'인허가 신청 시 시설·현장 현황 사실 확인'},
            {icon:'🏠',title:'부동산 현황 조사',desc:'거래·상속·증여를 위한 현황 파악 및 확인서 작성'},
            {icon:'🛡️',title:'보험·손해배상 증빙',desc:'보험금 청구 또는 손해배상을 위한 현장 조사'},
            {icon:'🌍',title:'해외거주자 국내 실태',desc:'해외 거주 의뢰인의 국내 재산·거주 실태 확인'},
            {icon:'🏛️',title:'공공기관 제출용 확인서',desc:'관공서 제출을 위한 사실확인서 작성 및 공증'},
            {icon:'🚧',title:'무단점유·불법사용 확인',desc:'건물·토지의 무단점유 및 불법사용 사실 조사'},
            {icon:'📸',title:'현황 조사 보고서',desc:'현장 실사 결과 보고서 작성 및 공적 확인'},
        ],
        docs:['조사 목적 및 배경 설명서','조사 대상 부동산 또는 시설 주소','의뢰인 신분증 (사본)','관련 계약서 또는 권리 서류 (보유 시)','소송·심판 사건번호 (해당 시)','이전 조사 결과 자료 (보유 시)','공공기관 제출용 서식 (해당 시)'],
        steps:[
            {title:'조사 목적·범위 협의',desc:'의뢰인과 조사 목적, 대상, 방법 등 사전 협의'},
            {title:'현장 방문 조사',desc:'행정사가 직접 현장 방문 및 사실 확인'},
            {title:'관련 자료 수집',desc:'등기부등본, 건축물 대장 등 공부 자료 수집'},
            {title:'사실확인서 작성',desc:'조사 결과를 바탕으로 공적 사실확인서 작성'},
            {title:'서류 제출 지원',desc:'관계 기관·법원·보험사 등 제출 지원'},
        ],
    },
};

function openSvc(name) {
    const d = SVC_DATA[name];
    if (!d) return;
    const phone = (typeof WeiminCMS !== 'undefined' ? WeiminCMS.get('office.phone') : '') || '000-0000-0000';

    const itemsHtml = d.items.map(i => `
        <div class="svc-item">
            <div class="svc-item-icon">${i.icon}</div>
            <div><h4>${i.title}</h4><p>${i.desc}</p></div>
        </div>`).join('');

    const docsHtml = d.docs.map(doc => `<li>${doc}</li>`).join('');

    const stepsHtml = d.steps.map(s => `
        <li><div><h5>${s.title}</h5><p>${s.desc}</p></div></li>`).join('');

    document.getElementById('svcContent').innerHTML = `
        <div class="svc-hero-panel" style="background:${d.gradient}">
            <div class="svc-hero-icon">${d.icon}</div>
            <h2>${name}</h2>
            <p>${d.desc}</p>
        </div>
        <div class="svc-body">
            <div class="svc-section-title">주요 업무</div>
            <div class="svc-items">${itemsHtml}</div>
            <div class="svc-section-title">주요 필요 서류</div>
            <ul class="svc-docs">${docsHtml}</ul>
            <div class="svc-section-title">처리 절차</div>
            <ol class="svc-steps">${stepsHtml}</ol>
            <div class="svc-cta">
                <a href="tel:${phone.replace(/[^0-9]/g,'')}" class="btn-primary">📞 ${phone} 전화 상담</a>
                <a href="#contact" onclick="closeSvc();setTimeout(()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'}),100);return false;" class="btn-secondary">✉️ 상담 신청하기</a>
            </div>
        </div>`;

    document.getElementById('svcOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('svcOverlay').scrollTop = 0;
}

function closeSvc() {
    document.getElementById('svcOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

/* ESC 키로 모달 닫기 */
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSvc(); });
