/* WeiminI18n — 한국어/영어/중국어 다국어 지원 */
(function(){
'use strict';

var T = {
ko:{
  /* ── 공통 ── */
  'logo.name':'행정사사무소 위민',
  'nav.about':'사무소 소개',
  'nav.services':'업무 분야',
  'nav.services.group':'업무 분야',
  'nav.process':'업무 절차',
  'nav.plans':'구독플랜',
  'nav.blog':'블로그',
  'nav.contact':'상담 문의',
  'nav.dd.permit':'📋 인허가',
  'nav.dd.cert':'🏆 인증',
  'nav.dd.immigration':'✈️ 출입국',
  'nav.dd.procurement':'🏛️ 조달',
  'nav.dd.appeal':'⚖️ 행정심판',
  'nav.dd.factcheck':'🔍 사실조사',
  'footer.tagline':'전문적인 행정서비스로 고객의 권익을 보호합니다',
  'footer.addr':'📍 대전광역시 서구 둔산대로 117번길 66, 208호',
  'footer.fax':'📠 팩스 0504-299-6764',
  'footer.kakao':'카카오톡 채널',
  'footer.copy':'© 2025 행정사사무소 위민. All rights reserved.',
  /* ── 홈 ── */
  'home.hero.title':'행정사사무소 <strong>위민</strong>',
  'home.cert':'법무부 출입국민원 대행기관',
  'home.svc.permit':'인허가','home.svc.cert':'인증','home.svc.immigration':'출입국',
  'home.svc.procurement':'조달','home.svc.appeal':'행정심판',
  'home.svc.factcheck':'사실조사','home.svc.plans':'구독플랜',
  /* ── 사무소 소개 ── */
  'about.banner.h1':'사무소 소개',
  'about.banner.p':'위민(爲民) — 국민을 위하는 전문 행정사사무소',
  'about.badge':'사무소 소개',
  'about.h2':'혼자 고민하지 마세요, 위민이 함께합니다',
  'about.p1':'위민(爲民)은 \'국민을 위한다\'는 뜻입니다. 저희는 단순히 서류를 대신 제출하는 곳이 아닙니다. 복잡한 행정 절차 앞에 서 계신 의뢰인과 함께 고민하고, 처음부터 끝까지 동행하는 파트너입니다.',
  'about.p2':'인허가·인증·출입국·조달·행정심판·사실조사 — 어떤 분야든 의뢰인의 권익이 지켜질 때까지 위민은 자리를 지킵니다.',
  'about.c1.title':'진정한 동반자','about.c1.desc':'일회성 대행이 아닙니다. 의뢰인의 상황을 깊이 이해하고 최선의 방향을 함께 찾아가는 파트너로서 임합니다.',
  'about.c2.title':'투명한 소통','about.c2.desc':'진행 단계마다 솔직하게 안내드립니다. 어렵고 복잡한 내용도 이해하기 쉽게 설명하는 것이 저희의 약속입니다.',
  'about.c3.title':'분야별 전문성','about.c3.desc':'각 업무 분야의 법령과 행정 실무에 정통한 행정사가 처음부터 끝까지 직접 처리합니다. 중간에 바뀌지 않습니다.',
  'about.c4.title':'권익 보호 최우선','about.c4.desc':'의뢰인의 권익이 부당하게 침해받지 않도록 적극적으로 대응합니다. 결과가 나올 때까지 함께합니다.',
  /* ── 업무 분야 ── */
  'svc.banner.h1':'업무 분야',
  'svc.banner.p':'인허가 · 인증 · 출입국 · 조달 · 행정심판 · 사실조사',
  'svc.badge':'업무 분야','svc.h2':'전문 행정서비스',
  'svc.sub':'위민 행정사사무소는 다양한 분야의 행정 업무를 전문적으로 처리합니다',
  'svc.c.permit.h':'인허가','svc.c.permit.p':'각종 사업 인허가 신청 및 갱신, 허가·등록·신고 대행',
  'svc.c.permit.t1':'영업허가','svc.c.permit.t2':'건축허가','svc.c.permit.t3':'개설허가',
  'svc.c.cert.h':'인증','svc.c.cert.p':'각종 인증 취득 및 갱신, ISO·벤처·이노비즈 등 인증 대행',
  'svc.c.cert.t1':'ISO 인증','svc.c.cert.t2':'벤처인증','svc.c.cert.t3':'이노비즈',
  'svc.c.imm.h':'출입국','svc.c.imm.p':'비자 신청·연장·변경, 외국인 체류허가, 귀화 신청',
  'svc.c.imm.t1':'비자 신청','svc.c.imm.t2':'체류허가','svc.c.imm.t3':'귀화신청',
  'svc.c.pro.h':'조달','svc.c.pro.p':'정부 조달 입찰 지원, 나라장터 등록, 계약 체결 대행',
  'svc.c.pro.t1':'조달 입찰','svc.c.pro.t2':'나라장터','svc.c.pro.t3':'계약 지원',
  'svc.c.app.h':'행정심판','svc.c.app.p':'행정처분 불복 심판 청구, 취소·의무이행·부작위 심판 대리',
  'svc.c.app.t1':'처분 취소','svc.c.app.t2':'의무이행','svc.c.app.t3':'부작위',
  'svc.c.fct.h':'사실조사','svc.c.fct.p':'현지 사실 확인 및 조사, 사실확인서 작성, 공적 증명 업무',
  'svc.c.fct.t1':'현지 조사','svc.c.fct.t2':'사실확인','svc.c.fct.t3':'현황 조사',
  'svc.more':'자세히 보기 →',
  /* ── 업무 절차 ── */
  'proc.banner.h1':'업무 절차','proc.banner.p':'간편하고 투명한 4단계 업무 처리 과정',
  'proc.badge':'업무 절차','proc.h2':'이렇게 진행됩니다',
  'proc.sub':'처음 상담부터 결과 통보까지, 위민이 함께합니다',
  'proc.s1.title':'초기 상담','proc.s1.desc':'전화 또는 방문 상담을 통해 업무 내용 파악 및 방향 설정',
  'proc.s2.title':'서류 준비','proc.s2.desc':'필요 서류 목록 안내 및 준비 지원, 미비 서류 보완',
  'proc.s3.title':'업무 처리','proc.s3.desc':'전문 행정사가 관할 기관에 신청·접수, 신속·정확하게 처리',
  'proc.s4.title':'결과 통보','proc.s4.desc':'처리 결과 즉시 안내 및 후속 조치·사후 관리 지원',
  'proc.faq.title':'자주 묻는 질문',
  'proc.faq1.q':'Q. 처음 상담은 어떻게 하나요?',
  'proc.faq1.a':'전화(042-477-6764) 또는 홈페이지 상담 신청을 통해 편하게 문의하실 수 있습니다. 방문 상담도 가능합니다.',
  'proc.faq2.q':'Q. 수수료는 어떻게 책정되나요?',
  'proc.faq2.a':'업무 종류와 난이도에 따라 상이합니다. 상담 후 투명하게 안내드리며, 추가 비용은 사전에 반드시 협의합니다.',
  'proc.faq3.q':'Q. 처리 기간은 얼마나 걸리나요?',
  'proc.faq3.a':'업무 종류와 관할 기관의 처리 일정에 따라 다릅니다. 상담 시 예상 기간을 안내드립니다.',
  /* ── 상담 문의 ── */
  'contact.banner.h1':'상담 문의','contact.banner.p':'친절하게 안내해 드리겠습니다',
  'contact.l.tel':'전화','contact.l.office':'사무실 전화','contact.l.fax':'팩스',
  'contact.l.kakao':'카카오톡 채널','contact.l.kakao.link':'채널 바로가기',
  'contact.l.email':'이메일','contact.l.hours':'운영 시간',
  'contact.v.hours':'평일 09:00 - 18:00','contact.l.location':'사무소 위치',
  'contact.v.location':'대전광역시 서구 둔산대로 117번길 66, 208호',
  'contact.form.title':'빠른 상담 신청',
  'contact.form.name':'성함','contact.form.phone':'연락처 (010-0000-0000)',
  'contact.form.select':'업무 분야 선택','contact.form.msg':'문의 내용을 간략히 적어주세요',
  'contact.form.submit':'상담 신청하기',
  'contact.opt.permit':'인허가','contact.opt.cert':'인증','contact.opt.imm':'출입국',
  'contact.opt.pro':'조달','contact.opt.app':'행정심판','contact.opt.fct':'사실조사',
  /* ── 구독플랜 ── */
  'plans.eyebrow':'행정사사무소 위민 · 기업 행정 구독',
  'plans.h2':'<span class="hl">7가지 플랜</span>으로<br>딱 맞게 시작하세요',
  'plans.sub':'사업 규모와 목적에 맞게 선택하세요',
  'plans.grp1':'기본 플랜','plans.grp2':'업종 · 목적별 패키지',
  'plans.cta':'우리 회사에 맞는 플랜 무료로 진단받기 →','plans.free':'첫 진단은 무료입니다 · ☎ 042-477-6764',
  'plans.custom':'맞춤 견적','plans.after':'상담 후 결정',
  'plans.incl.basic':'＋ 기본 행정 관리(베이직) 포함','plans.incl.fund':'＋ 정책자금 신청 컨설팅',
  'plans.basic.name':'베이직','plans.basic.tagline':'기본 행정 관리 — 행정담당 직원 대신 매달 챙겨 드립니다',
  'plans.basic.li1':'보유 인허가·인증·등록증 갱신 기한 관리 및 갱신 대행',
  'plans.basic.li2':'대표·주소·업종 등 각종 변경신고 처리',
  'plans.basic.li3':'행정기관 제출 서류 작성·신고 대행',
  'plans.basic.li4':'행정 문의 우선 상담 + 월간 행정 리포트',
  'plans.prem.name':'프리미엄','plans.prem.tagline':'종합 행정 파트너 — 신규 취득부터 분쟁 대응까지 한 번에',
  'plans.prem.li1.b':'자문행정사 협약(MOU) 체결','plans.prem.li1.s':'— 회사의 상시 자문 파트너로 지정',
  'plans.prem.li2':'베이직 전체 포함',
  'plans.prem.li3':'신규 인허가·인증 취득 대행 (연 일정 건수 포함)',
  'plans.prem.li4':'행정심판·이의신청 등 행정처분 대응 (우선 착수)',
  'plans.prem.li5':'사실조사·확인 서비스',
  'plans.prem.li6':'대표 직접 관리 + 전용 상담 핫라인',
  'plans.start.name':'창업 패키지','plans.start.tagline':'창업 행정 원스톱 — 사업 개시부터 첫 인허가·자금까지',
  'plans.start.li1':'사업 개시 인허가·신고 원스톱 처리',
  'plans.start.li2':'업종별 영업 인허가 취득 대행',
  'plans.start.li3':'초기 필수 등록·신고(관할 관청) 대행',
  'plans.start.li4':'초기 인증·정부지원사업 자격 점검',
  'plans.mfg.name':'제조업 패키지','plans.mfg.tagline':'공장 운영 행정 토탈케어 — 가동에 필요한 규제 대응을 한 곳에서',
  'plans.mfg.li1':'공장등록·변경, 사업장 인허가 통합 관리',
  'plans.mfg.li2':'환경(배출시설 등)·안전보건 인허가·신고 관리',
  'plans.mfg.li3':'KC 등 제품 인증 취득·유지 지원',
  'plans.mfg.li4':'정기 갱신 기한 관리 + 위반 시 행정처분 대응',
  'plans.const.name':'건설업 패키지','plans.const.tagline':'건설업 등록·유지 행정 토탈케어 — 등록부터 실적·갱신까지',
  'plans.const.li1':'건설업 등록(종합·전문) 신청·변경 (건설산업기본법)',
  'plans.const.li2':'자본금·기술자 등 등록기준 유지 관리',
  'plans.const.li3':'시공능력평가·실적신고 정기 처리',
  'plans.const.li4':'면허·등록 갱신 및 행정처분 대응',
  'plans.fore.name':'외국인고용 패키지','plans.fore.tagline':'외국인력 고용 행정 관리 — 채용부터 체류·신고까지 끊김 없이',
  'plans.fore.li1':'고용허가(E-9) 신청·재고용·사업장 변경 대행',
  'plans.fore.li2':'F-4 등 체류자격 변경·연장 신청 대행 (H-2→F-4 포함)',
  'plans.fore.li3':'외국인 고용 관련 의무 신고·서류 관리',
  'plans.fore.li4':'인력 도입 일정·기한 관리 및 점검 대응',
  'plans.proc.name':'조달집중 패키지','plans.proc.tagline':'공공조달 입찰 행정 집중 — 등록부터 입찰 자격 유지까지',
  'plans.proc.li1':'나라장터(국가종합전자조달) 등록·갱신 관리',
  'plans.proc.li2':'적격심사·PQ(사전심사) 서류 작성·관리',
  'plans.proc.li3':'입찰 참가자격(면허·실적·인증) 유지 관리',
  'plans.proc.li4':'다수공급자계약(MAS) 등록 지원 + 입찰 공고 모니터링',
  'plans.note1':'<b>플랜 선택이 어려우신가요?</b> 기본 유지관리만 필요하면 <b>베이직</b>, 취득·분쟁까지 폭넓게 맡기려면 <b>프리미엄</b>, 이제 막 시작하는 단계면 <b>창업</b>, 공장 규제가 핵심이면 <b>제조업</b>, 건설업 등록·실적 관리가 필요하면 <b>건설업</b>, 외국인 근로자 비중이 크면 <b>외국인고용</b>, 공공입찰 매출 중심이면 <b>조달집중</b>을 추천합니다.',
  'plans.note2':'· 업종·목적별 패키지는 사업장 규모·인원·업무 범위에 따라 <b>상담 후 맞춤 견적</b>으로 결정됩니다.',
  'plans.note3':'· 모든 업종·목적별 패키지에 <b>정책자금 신청 컨설팅</b>이 포함됩니다.',
  'plans.note4':'· 두 개 분야가 모두 중요한 기업은 <b>패키지 병행 시 할인</b>이 적용됩니다.',
  'bc.home':'홈','bc.plans':'구독플랜',
},

en:{
  'logo.name':'Wimin Administrative Attorney Office',
  'nav.about':'About Us','nav.services':'Services','nav.services.group':'Services',
  'nav.process':'Process','nav.plans':'Plans','nav.blog':'Blog','nav.contact':'Consultation',
  'nav.dd.permit':'📋 Permits','nav.dd.cert':'🏆 Certification','nav.dd.immigration':'✈️ Immigration',
  'nav.dd.procurement':'🏛️ Procurement','nav.dd.appeal':'⚖️ Admin. Appeal','nav.dd.factcheck':'🔍 Fact Survey',
  'footer.tagline':'Protecting client rights with professional administrative services',
  'footer.addr':'📍 208, 66 Dunsan-daero 117beon-gil, Seo-gu, Daejeon',
  'footer.fax':'📠 Fax 0504-299-6764','footer.kakao':'KakaoTalk Channel',
  'footer.copy':'© 2025 Wimin Administrative Attorney Office. All rights reserved.',
  'home.hero.title':'Wimin <strong>Administrative Attorney Office</strong>',
  'home.cert':'MOJ Authorized Immigration Agency',
  'home.svc.permit':'Permits','home.svc.cert':'Certification','home.svc.immigration':'Immigration',
  'home.svc.procurement':'Procurement','home.svc.appeal':'Admin. Appeal',
  'home.svc.factcheck':'Fact Survey','home.svc.plans':'Plans',
  'about.banner.h1':'About Us',
  'about.banner.p':'Wimin(爲民) — Administrative Attorney Office for the People',
  'about.badge':'About Us','about.h2':'Don\'t struggle alone — Wimin is by your side',
  'about.p1':'Wimin(爲民) means "for the people." We are not simply a service that submits paperwork on your behalf. We are partners who think through complex administrative procedures alongside our clients, accompanying them from start to finish.',
  'about.p2':'Permits · Certification · Immigration · Procurement · Admin. Appeal · Fact Survey — whatever the field, Wimin stays with you until your rights are protected.',
  'about.c1.title':'True Partnership','about.c1.desc':'We don\'t offer a one-time service. We act as true partners who deeply understand your situation and find the best path forward together.',
  'about.c2.title':'Transparent Communication','about.c2.desc':'We provide honest guidance at every stage. Explaining complex matters in a way that is easy to understand is our promise to you.',
  'about.c3.title':'Field Expertise','about.c3.desc':'Attorneys well-versed in the laws and administrative practices of each field handle your case from start to finish — no handoffs.',
  'about.c4.title':'Rights Protection First','about.c4.desc':'We actively respond to protect your rights from unjust infringement. We stay until results are achieved.',
  'svc.banner.h1':'Services',
  'svc.banner.p':'Permits · Certification · Immigration · Procurement · Admin. Appeal · Fact Survey',
  'svc.badge':'Services','svc.h2':'Professional Administrative Services',
  'svc.sub':'Wimin Administrative Attorney Office handles a wide range of administrative matters with expertise',
  'svc.c.permit.h':'Permits','svc.c.permit.p':'Business permit applications and renewals, license/registration/notification services',
  'svc.c.permit.t1':'Business License','svc.c.permit.t2':'Building Permit','svc.c.permit.t3':'Opening Permit',
  'svc.c.cert.h':'Certification','svc.c.cert.p':'Obtaining and renewing certifications — ISO, venture, Innobiz and more',
  'svc.c.cert.t1':'ISO Cert.','svc.c.cert.t2':'Venture','svc.c.cert.t3':'Innobiz',
  'svc.c.imm.h':'Immigration','svc.c.imm.p':'Visa application/extension/change, alien residence permits, naturalization',
  'svc.c.imm.t1':'Visa Application','svc.c.imm.t2':'Residence Permit','svc.c.imm.t3':'Naturalization',
  'svc.c.pro.h':'Procurement','svc.c.pro.p':'Government procurement bid support, KONEPS registration, contract management',
  'svc.c.pro.t1':'Gov. Bid','svc.c.pro.t2':'KONEPS','svc.c.pro.t3':'Contract Support',
  'svc.c.app.h':'Admin. Appeal','svc.c.app.p':'Administrative disposition appeals, revocation/obligation/omission representation',
  'svc.c.app.t1':'Revocation','svc.c.app.t2':'Obligation','svc.c.app.t3':'Omission',
  'svc.c.fct.h':'Fact Survey','svc.c.fct.p':'On-site fact verification, fact confirmation reports, official certification',
  'svc.c.fct.t1':'On-site Survey','svc.c.fct.t2':'Fact Confirm','svc.c.fct.t3':'Status Survey',
  'svc.more':'Learn more →',
  'proc.banner.h1':'Process','proc.banner.p':'Simple and transparent 4-step process',
  'proc.badge':'Process','proc.h2':'Here\'s how it works',
  'proc.sub':'From the initial consultation to the final result, Wimin is with you',
  'proc.s1.title':'Initial Consultation','proc.s1.desc':'We understand your needs and set the direction via phone or in-person consultation',
  'proc.s2.title':'Document Preparation','proc.s2.desc':'We provide a document checklist and support preparation, including supplementation of missing items',
  'proc.s3.title':'Processing','proc.s3.desc':'Our expert attorney files and processes your case with the relevant agency swiftly and accurately',
  'proc.s4.title':'Result Notification','proc.s4.desc':'We notify you immediately of results and provide follow-up support and after-care',
  'proc.faq.title':'Frequently Asked Questions',
  'proc.faq1.q':'Q. How do I get started?',
  'proc.faq1.a':'You can contact us easily by phone (042-477-6764) or through the website consultation form. In-person consultations are also available.',
  'proc.faq2.q':'Q. How are fees determined?',
  'proc.faq2.a':'Fees vary depending on the type and complexity of work. We provide transparent guidance after consultation, and any additional costs are always discussed in advance.',
  'proc.faq3.q':'Q. How long does processing take?',
  'proc.faq3.a':'Processing time varies by type of work and the agency\'s schedule. We provide an estimated timeline during consultation.',
  'contact.banner.h1':'Consultation','contact.banner.p':'We are happy to assist you',
  'contact.l.tel':'Phone','contact.l.office':'Office Phone','contact.l.fax':'Fax',
  'contact.l.kakao':'KakaoTalk Channel','contact.l.kakao.link':'Open Channel',
  'contact.l.email':'Email','contact.l.hours':'Business Hours',
  'contact.v.hours':'Weekdays 09:00 - 18:00','contact.l.location':'Location',
  'contact.v.location':'208, 66 Dunsan-daero 117beon-gil, Seo-gu, Daejeon',
  'contact.form.title':'Quick Consultation Request',
  'contact.form.name':'Full Name','contact.form.phone':'Phone (010-0000-0000)',
  'contact.form.select':'Select a Service','contact.form.msg':'Briefly describe your inquiry',
  'contact.form.submit':'Submit Request',
  'contact.opt.permit':'Permits','contact.opt.cert':'Certification','contact.opt.imm':'Immigration',
  'contact.opt.pro':'Procurement','contact.opt.app':'Admin. Appeal','contact.opt.fct':'Fact Survey',
  'plans.eyebrow':'Wimin Administrative Attorney Office · Corporate Subscription',
  'plans.h2':'Start with the <span class="hl">right plan</span><br>for your business',
  'plans.sub':'Choose the plan that fits your business size and purpose',
  'plans.grp1':'Standard Plans','plans.grp2':'Industry & Purpose Packages',
  'plans.cta':'Get a free plan diagnosis for your company →','plans.free':'First diagnosis is free · ☎ 042-477-6764',
  'plans.custom':'Custom Quote','plans.after':'Determined after consultation',
  'plans.incl.basic':'＋ Includes Basic Admin Management','plans.incl.fund':'＋ Policy Fund Application Consulting',
  'plans.basic.name':'Basic','plans.basic.tagline':'Basic Admin Management — We handle monthly admin tasks instead of your in-house staff',
  'plans.basic.li1':'Renewal deadline management and renewal agency for permits, certifications, and registrations',
  'plans.basic.li2':'Change notifications for representative, address, business type, etc.',
  'plans.basic.li3':'Preparation and filing of documents submitted to administrative agencies',
  'plans.basic.li4':'Priority consultation on admin inquiries + monthly admin report',
  'plans.prem.name':'Premium','plans.prem.tagline':'Comprehensive Admin Partner — from new acquisitions to dispute response, all in one',
  'plans.prem.li1.b':'MOU agreement as your advisory attorney','plans.prem.li1.s':'— designated as your company\'s standing advisory partner',
  'plans.prem.li2':'All Basic plan features included',
  'plans.prem.li3':'New permit/certification acquisition agency (set number per year included)',
  'plans.prem.li4':'Administrative disposition response including appeal and objection (priority handling)',
  'plans.prem.li5':'Fact investigation and verification services',
  'plans.prem.li6':'Direct principal management + dedicated consultation hotline',
  'plans.start.name':'Startup Package','plans.start.tagline':'One-stop startup admin — from business launch to first permit and funding',
  'plans.start.li1':'One-stop processing of business launch permits and notifications',
  'plans.start.li2':'Business-type-specific operating permit acquisition',
  'plans.start.li3':'Initial essential registration and notification (local authority) agency',
  'plans.start.li4':'Initial certification and government support program eligibility check',
  'plans.mfg.name':'Manufacturing Package','plans.mfg.tagline':'Total care for factory admin — regulatory compliance all in one place',
  'plans.mfg.li1':'Factory registration/change and business site permit integrated management',
  'plans.mfg.li2':'Environmental (discharge facilities, etc.) and safety/health permit and notification management',
  'plans.mfg.li3':'Product certification acquisition and maintenance support (KC, etc.)',
  'plans.mfg.li4':'Regular renewal deadline management + administrative disposition response for violations',
  'plans.const.name':'Construction Package','plans.const.tagline':'Total care for construction registration and maintenance — from registration to performance and renewal',
  'plans.const.li1':'Construction business registration (general/specialty) application and change (Basic Construction Industry Act)',
  'plans.const.li2':'Registration requirement maintenance for capital, engineers, etc.',
  'plans.const.li3':'Regular processing of construction capacity evaluation and performance reports',
  'plans.const.li4':'License/registration renewal and administrative disposition response',
  'plans.fore.name':'Foreign Employment Package','plans.fore.tagline':'Foreign workforce admin management — seamless from hiring to residence and notifications',
  'plans.fore.li1':'Employment permit (E-9) application, re-employment, and workplace change agency',
  'plans.fore.li2':'Residence status change/extension application agency for F-4, etc. (including H-2→F-4)',
  'plans.fore.li3':'Mandatory notification and document management related to foreign employee hiring',
  'plans.fore.li4':'Workforce introduction schedule and deadline management and inspection response',
  'plans.proc.name':'Procurement Focus Package','plans.proc.tagline':'Concentrated public procurement bid admin — from registration to bid qualification maintenance',
  'plans.proc.li1':'KONEPS (National e-Procurement System) registration and renewal management',
  'plans.proc.li2':'Eligibility review and PQ (pre-qualification) document preparation and management',
  'plans.proc.li3':'Bid participation qualification (license/performance/certification) maintenance',
  'plans.proc.li4':'Multiple supplier contract (MAS) registration support + bid notice monitoring',
  'plans.note1':'<b>Not sure which plan to choose?</b> Choose <b>Basic</b> for routine admin, <b>Premium</b> for full coverage including acquisitions and disputes, <b>Startup</b> for new businesses, <b>Manufacturing</b> for factory regulations, <b>Construction</b> for registration and performance management, <b>Foreign Employment</b> for foreign workforce, and <b>Procurement Focus</b> for public bid revenue.',
  'plans.note2':'· Industry/purpose packages are determined by <b>custom quote after consultation</b> based on business size, headcount, and scope.',
  'plans.note3':'· All industry/purpose packages include <b>policy fund application consulting</b>.',
  'plans.note4':'· Companies with two key areas receive a <b>discount when combining packages</b>.',
  'bc.home':'Home','bc.plans':'Plans',
},

zh:{
  'logo.name':'爲民行政士事务所',
  'nav.about':'事务所介绍','nav.services':'业务领域','nav.services.group':'业务领域',
  'nav.process':'业务流程','nav.plans':'订阅方案','nav.blog':'博客','nav.contact':'咨询',
  'nav.dd.permit':'📋 许可认可','nav.dd.cert':'🏆 认证','nav.dd.immigration':'✈️ 出入境',
  'nav.dd.procurement':'🏛️ 采购','nav.dd.appeal':'⚖️ 行政审判','nav.dd.factcheck':'🔍 事实调查',
  'footer.tagline':'以专业行政服务保护客户的权益',
  'footer.addr':'📍 大田广域市西区屯山大路117番街66号, 208室',
  'footer.fax':'📠 传真 0504-299-6764','footer.kakao':'KakaoTalk频道',
  'footer.copy':'© 2025 爲民行政士事务所. All rights reserved.',
  'home.hero.title':'行政士事务所 <strong>爲民</strong>',
  'home.cert':'法务部出入境民愿代理机构',
  'home.svc.permit':'许可认可','home.svc.cert':'认证','home.svc.immigration':'出入境',
  'home.svc.procurement':'采购','home.svc.appeal':'行政审判',
  'home.svc.factcheck':'事实调查','home.svc.plans':'订阅方案',
  'about.banner.h1':'事务所介绍',
  'about.banner.p':'爲民 — 为民而设的专业行政士事务所',
  'about.badge':'事务所介绍','about.h2':'不要独自烦恼，爲民与您同行',
  'about.p1':'爲民意为"为民服务"。我们不仅仅是代为提交文件的机构。我们是与委托人一同思考复杂行政手续、从始至终陪伴左右的合作伙伴。',
  'about.p2':'许可认可·认证·出入境·采购·行政审判·事实调查——无论哪个领域，爲民都将守护到委托人的权益得到保障为止。',
  'about.c1.title':'真正的合作伙伴','about.c1.desc':'我们不提供一次性代理服务。我们深入理解委托人的处境，以真正合作伙伴的姿态共同寻找最佳方向。',
  'about.c2.title':'透明沟通','about.c2.desc':'我们在每个进展阶段都如实告知。以通俗易懂的方式解释复杂内容是我们对您的承诺。',
  'about.c3.title':'专业领域能力','about.c3.desc':'精通各业务领域法规与行政实务的行政士从始至终亲自处理，中途不会更换负责人。',
  'about.c4.title':'权益保护优先','about.c4.desc':'我们积极应对，防止委托人权益受到不当侵害，陪伴至取得结果为止。',
  'svc.banner.h1':'业务领域',
  'svc.banner.p':'许可认可 · 认证 · 出入境 · 采购 · 行政审判 · 事实调查',
  'svc.badge':'业务领域','svc.h2':'专业行政服务',
  'svc.sub':'爲民行政士事务所专业处理各类行政业务',
  'svc.c.permit.h':'许可认可','svc.c.permit.p':'各类业务许可申请及续期，许可·登记·申报代理',
  'svc.c.permit.t1':'营业许可','svc.c.permit.t2':'建筑许可','svc.c.permit.t3':'开设许可',
  'svc.c.cert.h':'认证','svc.c.cert.p':'各类认证取得及续期，ISO·创业·创新型企业等认证代理',
  'svc.c.cert.t1':'ISO认证','svc.c.cert.t2':'创业认证','svc.c.cert.t3':'创新型企业',
  'svc.c.imm.h':'出入境','svc.c.imm.p':'签证申请·延期·变更，外国人居留许可，入籍申请',
  'svc.c.imm.t1':'签证申请','svc.c.imm.t2':'居留许可','svc.c.imm.t3':'入籍申请',
  'svc.c.pro.h':'采购','svc.c.pro.p':'政府采购投标支持，国家综合采购系统注册，合同签订代理',
  'svc.c.pro.t1':'政府投标','svc.c.pro.t2':'采购系统','svc.c.pro.t3':'合同支持',
  'svc.c.app.h':'行政审判','svc.c.app.p':'行政处分异议审判申请，撤销·履行义务·不作为审判代理',
  'svc.c.app.t1':'撤销处分','svc.c.app.t2':'履行义务','svc.c.app.t3':'不作为',
  'svc.c.fct.h':'事实调查','svc.c.fct.p':'现场事实确认及调查，事实确认书撰写，公证业务',
  'svc.c.fct.t1':'现场调查','svc.c.fct.t2':'事实确认','svc.c.fct.t3':'现状调查',
  'svc.more':'查看详情 →',
  'proc.banner.h1':'业务流程','proc.banner.p':'简便透明的四步业务处理流程',
  'proc.badge':'业务流程','proc.h2':'业务如何进行',
  'proc.sub':'从初次咨询到结果通知，爲民全程陪伴',
  'proc.s1.title':'初步咨询','proc.s1.desc':'通过电话或到访咨询，了解业务内容并确定方向',
  'proc.s2.title':'文件准备','proc.s2.desc':'告知所需文件清单并提供准备支持，补充不足材料',
  'proc.s3.title':'业务处理','proc.s3.desc':'专业行政士向主管机关申请受理，迅速准确地处理',
  'proc.s4.title':'结果通知','proc.s4.desc':'及时告知处理结果，提供后续措施及后期管理支持',
  'proc.faq.title':'常见问题',
  'proc.faq1.q':'Q. 如何进行初次咨询？',
  'proc.faq1.a':'您可以通过电话(042-477-6764)或网站咨询申请方便地进行咨询，也可以亲自到访。',
  'proc.faq2.q':'Q. 费用如何计算？',
  'proc.faq2.a':'根据业务种类和难度有所不同。咨询后我们会透明地告知，额外费用必须事先协商。',
  'proc.faq3.q':'Q. 处理需要多长时间？',
  'proc.faq3.a':'根据业务种类及主管机关的处理日程而有所不同，咨询时我们会告知预计时间。',
  'contact.banner.h1':'咨询','contact.banner.p':'我们将亲切为您解答',
  'contact.l.tel':'电话','contact.l.office':'办公室电话','contact.l.fax':'传真',
  'contact.l.kakao':'KakaoTalk频道','contact.l.kakao.link':'立即前往',
  'contact.l.email':'邮箱','contact.l.hours':'营业时间',
  'contact.v.hours':'工作日 09:00 - 18:00','contact.l.location':'事务所位置',
  'contact.v.location':'大田广域市西区屯山大路117番街66号, 208室',
  'contact.form.title':'快速咨询申请',
  'contact.form.name':'姓名','contact.form.phone':'联系方式 (010-0000-0000)',
  'contact.form.select':'选择业务领域','contact.form.msg':'请简要描述您的咨询内容',
  'contact.form.submit':'提交申请',
  'contact.opt.permit':'许可认可','contact.opt.cert':'认证','contact.opt.imm':'出入境',
  'contact.opt.pro':'采购','contact.opt.app':'行政审判','contact.opt.fct':'事实调查',
  'plans.eyebrow':'爲民行政士事务所 · 企业行政订阅',
  'plans.h2':'从 <span class="hl">7种方案</span> 中<br>选择最适合您的',
  'plans.sub':'根据企业规模和目的进行选择',
  'plans.grp1':'基础方案','plans.grp2':'行业 · 目的别套餐',
  'plans.cta':'免费诊断最适合贵公司的方案 →','plans.free':'首次诊断免费 · ☎ 042-477-6764',
  'plans.custom':'定制报价','plans.after':'咨询后确定',
  'plans.incl.basic':'＋ 含基础行政管理（基础版）','plans.incl.fund':'＋ 政策资金申请咨询',
  'plans.basic.name':'基础版','plans.basic.tagline':'基础行政管理 — 代替行政负责人每月为您处理',
  'plans.basic.li1':'保有许可·认证·登记证到期日管理及续期代理',
  'plans.basic.li2':'代表·地址·业种等各类变更申报处理',
  'plans.basic.li3':'向行政机关提交文件的撰写·申报代理',
  'plans.basic.li4':'行政咨询优先服务 + 月度行政报告',
  'plans.prem.name':'高级版','plans.prem.tagline':'综合行政合作伙伴 — 从新取证到纠纷应对，一站式搞定',
  'plans.prem.li1.b':'签署顾问行政士协议(MOU)','plans.prem.li1.s':'— 指定为公司常驻顾问合作伙伴',
  'plans.prem.li2':'含基础版全部内容',
  'plans.prem.li3':'新许可·认证取得代理（含年度一定件数）',
  'plans.prem.li4':'行政审判·异议申请等行政处分应对（优先办理）',
  'plans.prem.li5':'事实调查·确认服务',
  'plans.prem.li6':'代表直接管理 + 专属咨询热线',
  'plans.start.name':'创业套餐','plans.start.tagline':'创业行政一站式 — 从开业到首个许可·资金',
  'plans.start.li1':'开业许可·申报一站式处理',
  'plans.start.li2':'按业种取得营业许可代理',
  'plans.start.li3':'初期必要登记·申报（主管机关）代理',
  'plans.start.li4':'初期认证·政府支援事业资格检查',
  'plans.mfg.name':'制造业套餐','plans.mfg.tagline':'工厂运营行政全方位 — 运营所需监管合规统一处理',
  'plans.mfg.li1':'工厂登记·变更，营业场所许可综合管理',
  'plans.mfg.li2':'环境（排放设施等）·安全卫生许可·申报管理',
  'plans.mfg.li3':'KC等产品认证取得·维持支持',
  'plans.mfg.li4':'定期续期日期管理 + 违规时行政处分应对',
  'plans.const.name':'建设业套餐','plans.const.tagline':'建设业注册·维持行政全方位 — 从注册到业绩·续期',
  'plans.const.li1':'建设业注册（综合·专业）申请·变更（建设产业基本法）',
  'plans.const.li2':'注册资本·技术人员等注册标准维持管理',
  'plans.const.li3':'施工能力评价·业绩申报定期处理',
  'plans.const.li4':'执照·注册续期及行政处分应对',
  'plans.fore.name':'外籍雇佣套餐','plans.fore.tagline':'外籍劳动力雇佣行政管理 — 从招聘到居留·申报无缝衔接',
  'plans.fore.li1':'雇佣许可(E-9)申请·再雇佣·工作场所变更代理',
  'plans.fore.li2':'F-4等居留资格变更·延期申请代理（含H-2→F-4）',
  'plans.fore.li3':'外籍雇佣相关义务申报·文件管理',
  'plans.fore.li4':'劳动力引进日程·期限管理及检查应对',
  'plans.proc.name':'采购专注套餐','plans.proc.tagline':'公共采购投标行政专注 — 从注册到投标资格维持',
  'plans.proc.li1':'国家综合电子采购系统注册·续期管理',
  'plans.proc.li2':'适格审查·PQ（预审）文件撰写·管理',
  'plans.proc.li3':'投标参与资格（执照·业绩·认证）维持管理',
  'plans.proc.li4':'多供应商合同(MAS)注册支持 + 投标公告监控',
  'plans.note1':'<b>不知如何选择方案？</b> 只需基础维护管理选 <b>基础版</b>，需要全面委托（含取证·纠纷）选 <b>高级版</b>，刚刚起步选 <b>创业套餐</b>，工厂监管为核心选 <b>制造业套餐</b>，需要建设业注册·业绩管理选 <b>建设业套餐</b>，外籍员工比重大选 <b>外籍雇佣套餐</b>，以公共投标收入为主选 <b>采购专注套餐</b>。',
  'plans.note2':'· 行业·目的别套餐根据营业场所规模·人数·业务范围，<b>咨询后定制报价</b>确定。',
  'plans.note3':'· 所有行业·目的别套餐均包含<b>政策资金申请咨询</b>。',
  'plans.note4':'· 两个领域均重要的企业，<b>套餐并行时享有折扣</b>。',
  'bc.home':'首页','bc.plans':'订阅方案',
}
};

/* ── 현재 언어 ── */
function cur() {
  /* URL ?lang=xx 파라미터 우선 → localStorage 저장 후 반환 */
  try {
    var p = new URLSearchParams(location.search).get('lang');
    if (p && T[p]) {
      try { localStorage.setItem('wcms_lang', p); } catch(e) {}
      return p;
    }
  } catch(e) {}
  try { return localStorage.getItem('wcms_lang') || 'ko'; } catch(e) { return 'ko'; }
}

/* ── 내부 링크에 ?lang= 파라미터 부착 (페이지 이동시 언어 유지) ── */
function updateLinks(lang) {
  document.querySelectorAll('a[href]').forEach(function(a) {
    var href = a.getAttribute('href');
    if (!href || /^(https?:|tel:|mailto:|#)/.test(href)) return;
    try {
      var url = new URL(a.href, location.href);
      if (lang === 'ko') {
        url.searchParams.delete('lang');
      } else {
        url.searchParams.set('lang', lang);
      }
      a.href = url.href;
    } catch(e) {}
  });
}

/* ── 번역 적용 ── */
function apply(lang) {
  var d = T[lang] || T.ko;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var k = el.getAttribute('data-i18n');
    if (d[k] != null) el.textContent = d[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var k = el.getAttribute('data-i18n-html');
    if (d[k] != null) el.innerHTML = d[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    var k = el.getAttribute('data-i18n-ph');
    if (d[k] != null) el.placeholder = d[k];
  });
  document.documentElement.lang = lang === 'zh' ? 'zh' : lang === 'en' ? 'en' : 'ko';
  var ind = document.getElementById('wiLangInd');
  if (ind) ind.textContent = lang.toUpperCase();
  /* 언어 버튼 활성 표시 */
  document.querySelectorAll('.wi-lang-opt').forEach(function(b) {
    b.classList.toggle('wi-active', b.getAttribute('data-lang') === lang);
  });
  /* 내부 링크에 언어 파라미터 부착 */
  updateLinks(lang);
}

/* ── 언어 설정 ── */
function set(lang) {
  localStorage.setItem('wcms_lang', lang);
  apply(lang);
  closeDrop();
}

function closeDrop() {
  var dd = document.getElementById('wiLangDrop');
  if (dd) dd.style.display = 'none';
}

function toggleDrop() {
  var dd = document.getElementById('wiLangDrop');
  if (!dd) return;
  dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
}

/* ── 버튼 주입 ── */
function injectBtn() {
  var btn = document.querySelector('.btn-call');
  if (!btn) return;
  var lang = cur();
  var wrap = document.createElement('div');
  wrap.className = 'wi-lang-wrap';
  wrap.innerHTML =
    '<button class="wi-lang-btn" onclick="WI18n.toggle()" type="button" aria-label="언어 선택">' +
    '🌐 <span id="wiLangInd">' + lang.toUpperCase() + '</span> ▾</button>' +
    '<div class="wi-lang-drop" id="wiLangDrop" style="display:none;">' +
    '<button class="wi-lang-opt" data-lang="ko" onclick="WI18n.set(\'ko\')">🇰🇷 한국어</button>' +
    '<button class="wi-lang-opt" data-lang="en" onclick="WI18n.set(\'en\')">🇺🇸 English</button>' +
    '<button class="wi-lang-opt" data-lang="zh" onclick="WI18n.set(\'zh\')">🇨🇳 中文</button>' +
    '</div>';
  btn.parentNode.insertBefore(wrap, btn);
  document.addEventListener('click', function(e) {
    if (!wrap.contains(e.target)) closeDrop();
  }, true);
}

window.WI18n = { set: set, toggle: toggleDrop };

document.addEventListener('DOMContentLoaded', function() {
  injectBtn();
  apply(cur());
});
})();
