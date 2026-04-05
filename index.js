import { arraySkills, arrayProjects } from './arraySkills.js';
import { renderOfflineServices } from './views/offlineServicesView.js';
import { offlineServiceContent } from './data/offlineServices.js';
import { getLocalizedText } from './utils/localization.js';

const STORAGE_LANG_KEY = 'rb-preferred-language';
const VIEW_QUERY_PARAM = 'view';
const GEO_LANG_MAP = {
  RU: 'ru',
  US: 'en',
  CN: 'zh',
  HK: 'zh',
  MO: 'zh',
  KZ: 'kk'
};

const LANGUAGE_FLAGS = {
  en: '🇺🇸',
  ru: '🇷🇺',
  kk: '🇰🇿',
  zh: '🇨🇳',
  ar: '🇸🇦'
};

const translations = {
  en: {
    greeting: '👋 Daniil [RestlessByte]',
    role: '🎨 UI/UX crafter | 👨🏽‍💻 FullStack Developer | 🤖 Bot Builder | 🧠 AI Engineer',
    location: '📍 <b>Bashkortostan, Russia | Remote</b>',
    paymentLabel: '💸 Crypto Wallets:',
    copy: 'Copy',
    copied: 'Copied!',
    payMetamask: 'Pay with MetaMask',
    skillsTitle: 'MY SKILLS',
    projectsTitle: '🎯 Projects',
    connectTitle: "🔗 Let's Connect!",
    seoTitle: '🚀 Portfolio & SEO',
    seoText:
      'Daniil (RestlessByte) builds bold multilingual web, bot and AI experiences with strong visual identity, automation and secure delivery. Explore projects crafted to look sharp and work fast.',
    footer: 'Built with ❤️ and code.',
    githubView: 'VIEW MY GITHUB TO EXPLORE MORE PROJECTS, BOTS AND EXPERIMENTS',
    enter: 'Enter',
    languageButton: 'Change language',
    profileChip: 'FullStack Developer • AI Builder • Digital Architect',
    profilePill: 'Pink • Purple • Cyber vibes',
    contactsTitle: 'Contacts',
    contactNote: 'Fastest reply: Telegram bot or Telegram main account. All links use HTTPS.',
    walletTitle: 'Wallet',
    projectsSubheading: 'Projects',
    quotesSubheading: 'Quotes',
    quote1: '“Strive for the impossible.”',
    quote2: '“We know — that we know nothing. (Socrates)”',
    projectAiHub:
      '<strong>RestlessByte Bot Suite</strong> — Telegram and VK bots for communication, automation, AI workflows and fast support.',
    projectGitZipQR:
      '<strong>Farmilochka Game Chat</strong> — Cross-platform game community bot in Telegram and VK with interactive chat mechanics.',
    navResume: 'My resume',
    navOffline: '🛠️ Offline services'
  },
  ar: {
    greeting: '👋 دانييل [RestlessByte]',
    role: '🎨 صانع واجهات نيون | 👨🏽‍💻 مطوّر FullStack | 🤖 منشئ بوتات | 🧠 مهندس AI',
    location: '📍 <b>باشكورتوستان، روسيا | عن بُعد</b>',
    paymentLabel: '💸 محافظ العملات المشفرة:',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    payMetamask: 'الدفع عبر MetaMask',
    skillsTitle: 'مهاراتي',
    projectsTitle: '🎯 المشاريع',
    connectTitle: '🔗 لنتواصل!',
    seoTitle: '🚀 السيرة والأرشفة',
    seoText:
      'دانييل (RestlessByte) يبني تجارب ويب وبوتات وذكاء اصطناعي متعددة اللغات بهوية بصرية جريئة وأتمتة سريعة وتسليم آمن.',
    footer: 'بُنيت بحب ❤️ وكود.',
    githubView: 'استعرض GitHub لرؤية المزيد من المشاريع والبوتات والتجارب',
    enter: 'دخول',
    languageButton: 'تغيير اللغة',
    profileChip: 'مطوّر FullStack • صانع حلول AI • مهندس تجارب رقمية',
    profilePill: 'وردي • بنفسجي • طاقة سيبرانية',
    contactsTitle: 'وسائل التواصل',
    contactNote: 'أسرع رد يكون عبر بوت تيليجرام أو الحساب الرئيسي في تيليجرام. كل الروابط تعمل عبر HTTPS.',
    walletTitle: 'المحفظة',
    projectsSubheading: 'المشاريع',
    quotesSubheading: 'اقتباسات',
    quote1: '«اسعَ إلى المستحيل.»',
    quote2: '«نحن نعلم أننا لا نعلم شيئاً. (سقراط)»',
    projectAiHub:
      '<strong>منظومة RestlessByte للبوتات</strong> — بوتات Telegram وVK للتواصل، الأتمتة، وتدفّقات الذكاء الاصطناعي والدعم السريع.',
    projectGitZipQR:
      '<strong>Farmilochka Game Chat</strong> — بوت مجتمع ألعاب يعمل على Telegram وVK مع آليات تفاعل حيّة.',
    navResume: 'سيرتي الذاتية',
    navOffline: '🛠️ خدمات أوفلاين'
  },
  ru: {
    greeting: '👋 Даниил [RestlessByte]',
    role: '🎨 UI/UX создатель | 👨🏽‍💻 FullStack-разработчик | 🤖 Bot Builder | 🧠 AI-инженер',
    location: '📍 <b>Башкортостан, Россия | Удалённо</b>',
    paymentLabel: '💸 Крипто-кошельки:',
    copy: 'Скопировать',
    copied: 'Скопировано!',
    payMetamask: 'Оплатить через MetaMask',
    skillsTitle: 'МОИ НАВЫКИ',
    projectsTitle: '🎯 Проекты',
    connectTitle: '🔗 Свяжемся!',
    seoTitle: '🚀 Портфолио и SEO',
    seoText:
      'Даниил (RestlessByte) делает яркие мультиязычные web-, bot- и AI-продукты с сильной визуальной подачей, автоматизацией и аккуратной реализацией.',
    footer: 'Создано с ❤️ и кодом.',
    githubView: 'СМОТРИ МОЙ GITHUB: ТАМ ЕЩЁ БОЛЬШЕ ПРОЕКТОВ, БОТОВ И ЭКСПЕРИМЕНТОВ',
    enter: 'Перейти',
    languageButton: 'Сменить язык',
    profileChip: 'FullStack-разработчик • AI-билдер • Архитектор цифрового опыта',
    profilePill: 'Розовый • Фиолетовый • Кибер вайб',
    contactsTitle: 'Контакты',
    contactNote: 'Быстрее всего отвечаю в Telegram-боте или в основном Telegram. Все ссылки работают через HTTPS.',
    walletTitle: 'Кошелёк',
    projectsSubheading: 'Проекты',
    quotesSubheading: 'Цитаты',
    quote1: '«Стремись к невозможному.»',
    quote2: '«Мы знаем, что ничего не знаем. (Сократ)»',
    projectAiHub:
      '<strong>RestlessByte Bot Suite</strong> — Telegram- и VK-боты для общения, автоматизации, AI-сценариев и быстрого саппорта.',
    projectGitZipQR:
      '<strong>Farmilochka Game Chat</strong> — Кроссплатформенный игровой бот для Telegram и VK с интерактивным общением.',
    navResume: 'Моё резюме',
    navOffline: '🛠️ Оффлайн услуги'
  },
  kk: {
    greeting: '👋 Даниил [RestlessByte]',
    role: '🎨 UI/UX жасаушы | 👨🏽‍💻 FullStack әзірлеуші | 🤖 Bot Builder | 🧠 AI инженері',
    location: '📍 <b>Башқұртстан, Ресей | Қашықтан</b>',
    paymentLabel: '💸 Крипто әмияндар:',
    copy: 'Көшіру',
    copied: 'Көшірілді!',
    payMetamask: 'MetaMask арқылы төлеу',
    skillsTitle: 'МЕНІҢ ҚҰЗЫРЕТТЕРІМ',
    projectsTitle: '🎯 Жобалар',
    connectTitle: '🔗 Байланысайық!',
    seoTitle: '🚀 Портфолио және SEO',
    seoText:
      'Даниил (RestlessByte) айқын визуал, автоматтандыру және сенімді жеткізумен көптілді web, bot және AI тәжірибелерін жасайды.',
    footer: '❤️ және кодпен жасалды.',
    githubView: 'GITHUB-ПЕН ТАНЫСЫҢЫЗ: ОНДА КӨБІРЕК ЖОБА, БОТ ЖӘНЕ ЭКСПЕРИМЕНТ БАР',
    enter: 'Кіру',
    languageButton: 'Тілді өзгерту',
    profileChip: 'FullStack әзірлеуші • AI жасаушы • Цифрлық тәжірибе архитекторі',
    profilePill: 'Қызғылт • Күлгін • Кибер атмосфера',
    contactsTitle: 'Байланыс',
    contactNote: 'Ең жылдам жауап Telegram ботта немесе негізгі Telegram аккаунтта. Барлық сілтемелер HTTPS арқылы жұмыс істейді.',
    walletTitle: 'Әмиян',
    projectsSubheading: 'Жобалар',
    quotesSubheading: 'Дәйексөздер',
    quote1: '«Мүмкін емеске ұмтыл.»',
    quote2: '«Біз ештеңе білмейміз — соны ғана білеміз. (Сократ)»',
    projectAiHub:
      '<strong>RestlessByte Bot Suite</strong> — Байланыс, автоматтандыру, AI ағындары және жедел қолдау үшін Telegram және VK боттары.',
    projectGitZipQR:
      '<strong>Farmilochka Game Chat</strong> — Telegram және VK үшін интерактивті қауымдастық мүмкіндіктері бар ойын боты.',
    navResume: 'Менің резюмем',
    navOffline: '🛠️ Оффлайн қызметтер'
  },
  zh: {
    greeting: '👋 Daniil [RestlessByte]',
    role: '🎨 UI/UX 設計師 | 👨🏽‍💻 全栈开发者 | 🤖 Bot Builder | 🧠 AI 工程师',
    location: '📍 <b>巴什科尔托斯坦，俄罗斯 | 远程</b>',
    paymentLabel: '💸 加密钱包：',
    copy: '复制',
    copied: '已复制！',
    payMetamask: '使用 MetaMask 支付',
    skillsTitle: '我的技能',
    projectsTitle: '🎯 项目',
    connectTitle: '🔗 联系我！',
    seoTitle: '🚀 作品集与 SEO',
    seoText:
      'Daniil（RestlessByte）打造具有鲜明视觉风格的多语言 Web、机器人与 AI 体验，兼顾自动化、安全与速度。',
    footer: '用 ❤️ 和代码构建。',
    githubView: '前往我的 GitHub 查看更多项目、机器人与实验',
    enter: '进入',
    languageButton: '切换语言',
    profileChip: '全栈开发者 • AI 构建者 • 数字体验架构师',
    profilePill: '粉色 • 紫色 • 赛博氛围',
    contactsTitle: '联系方式',
    contactNote: '最快回复渠道是 Telegram 机器人或主 Telegram 账号。所有链接均使用 HTTPS。',
    walletTitle: '钱包',
    projectsSubheading: '项目',
    quotesSubheading: '引言',
    quote1: '“追逐不可能。”',
    quote2: '“我们所知——只是我们一无所知。（苏格拉底）”',
    projectAiHub:
      '<strong>RestlessByte Bot Suite</strong> — 面向沟通、自动化、AI 工作流与快速支持的 Telegram 与 VK 机器人组合。',
    projectGitZipQR:
      '<strong>Farmilochka Game Chat</strong> — 同时运行在 Telegram 和 VK 的互动游戏社区机器人。',
    navResume: '我的简历',
    navOffline: '🛠️ 线下服务'
  }
};

let currentLang = 'en';
let currentView = 'resume';

const getStoredLanguage = () => {
  const stored = localStorage.getItem(STORAGE_LANG_KEY);
  if (stored && translations[stored]) {
    return stored;
  }
  return null;
};

const detectLanguageByGeo = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) return null;
    const data = await response.json();
    const code = data?.country_code?.toUpperCase();
    if (code && GEO_LANG_MAP[code]) {
      return GEO_LANG_MAP[code];
    }
  } catch (err) {
    console.warn('Geo detection failed', err);
  }
  return null;
};

const resolveInitialLanguage = async () => {
  const stored = getStoredLanguage();
  if (stored) return stored;

  const geoLang = await detectLanguageByGeo();
  if (geoLang && translations[geoLang]) {
    return geoLang;
  }

  return 'en';
};

const showWithDelay = elements => {
  elements.forEach((el, idx) => {
    setTimeout(() => el.classList.add('show'), idx * 100);
  });
};

const renderSkills = () => {
  const skillsContainer = document.getElementById('skillsContainer');
  if (!skillsContainer) return;
  skillsContainer.innerHTML = '';
  arraySkills.forEach(skillCategory => {
    const skillCard = document.createElement('div');
    skillCard.className = 'tech-stack-card';

    const titleElement = document.createElement('span');
    titleElement.className = 'tech-stack-cardTitle';
    titleElement.textContent = getLocalizedText(skillCategory.label, currentLang);
    skillCard.appendChild(titleElement);

    if (skillCategory.description) {
      const description = document.createElement('p');
      description.className = 'tech-stack-cardDescription';
      description.textContent = getLocalizedText(skillCategory.description, currentLang);
      skillCard.appendChild(description);
    }

    skillCategory.items.forEach(item => {
      const skillElement = document.createElement('div');
      skillElement.className = 'tech-stack-card-stack';

      const detailWrapper = document.createElement('div');
      detailWrapper.className = 'skill-details';

      const iconWrapper = document.createElement('span');
      iconWrapper.className = 'skill-icon';
      iconWrapper.innerHTML = item.image;

      const skillName = document.createElement('span');
      skillName.className = 'skillTechnologySkillName';
      skillName.textContent = getLocalizedText(item.title, currentLang);

      detailWrapper.appendChild(iconWrapper);
      detailWrapper.appendChild(skillName);
      skillElement.appendChild(detailWrapper);

      if (item.tag) {
        const tagEl = document.createElement('span');
        tagEl.className = 'skill-badge';
        tagEl.textContent = getLocalizedText(item.tag, currentLang);
        skillElement.appendChild(tagEl);
      }

      skillCard.appendChild(skillElement);
    });

    skillsContainer.appendChild(skillCard);
  });
};

const renderProjects = () => {
  const projectsContainer = document.getElementById('projectsContainer');
  if (!projectsContainer) return;
  projectsContainer.innerHTML = '';
  arrayProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => window.open(project.link, '_blank'));

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = getLocalizedText(project.title, currentLang);
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'project-card-descripton';
    desc.textContent = getLocalizedText(project.description, currentLang);
    card.appendChild(desc);

    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'project-card-button';
    buttonDiv.innerHTML = `${project.icon}<a class="project-link" href="${project.link}" target="_blank">${translations[currentLang].enter}</a>`;
    card.appendChild(buttonDiv);

    projectsContainer.appendChild(card);
  });
};

const applyTranslations = () => {
  const t = translations[currentLang];
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const setHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  const languageBtn = document.getElementById('language-btn');
  if (languageBtn) {
    languageBtn.textContent = LANGUAGE_FLAGS[currentLang] ?? '🌐';
    languageBtn.setAttribute('aria-label', t.languageButton);
  }
  setText('profile-chip', t.profileChip);
  setText('greeting', t.greeting);
  setHTML('role', t.role);
  setHTML('location', t.location);
  setText('profile-pill', t.profilePill);
  setText('contacts', t.contactsTitle);
  setText('contact-note', t.contactNote);
  setText('wallet', t.walletTitle);
  setText('payment-label', t.paymentLabel);

  const copyBtns = document.querySelectorAll('.copy-wallet-btn');
  copyBtns.forEach(btn => {
    btn.textContent = t.copy;
  });
  setText('metamask-btn', t.payMetamask);

  setText('skills-title', t.skillsTitle);
  setText('projects-title', t.projectsTitle);
  setText('projects-subheading', t.projectsSubheading);
  setText('quotes-subheading', t.quotesSubheading);
  setText('quote1', t.quote1);
  setText('quote2', t.quote2);
  setHTML('project-ai-hub', t.projectAiHub);
  setHTML('project-gitzipqr', t.projectGitZipQR);
  setText('github-view', t.githubView);
  setText('connect-title', t.connectTitle);
  setText('seo-title', t.seoTitle);
  setText('seo-text', t.seoText);

  const footer = document.querySelector('.footer');
  if (footer) {
    footer.innerHTML = `&copy; <span id="year"></span> Daniil [RestlessByte]. <span id="footer-text">${t.footer}</span>`;
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  const projectLinks = document.querySelectorAll('.project-link');
  projectLinks.forEach(link => {
    link.textContent = t.enter;
  });

  const resumeNav = document.getElementById('nav-resume');
  if (resumeNav) resumeNav.textContent = t.navResume;

  const offlineNav = document.getElementById('nav-offline');
  if (offlineNav) offlineNav.textContent = t.navOffline;
};

const updateNavState = () => {
  const resumeNav = document.getElementById('nav-resume');
  const offlineNav = document.getElementById('nav-offline');

  if (resumeNav) {
    resumeNav.classList.toggle('active', currentView === 'resume');
    if (currentView === 'resume') {
      resumeNav.setAttribute('aria-current', 'page');
      resumeNav.setAttribute('disabled', 'true');
    } else {
      resumeNav.removeAttribute('aria-current');
      resumeNav.removeAttribute('disabled');
    }
  }

  if (offlineNav) {
    offlineNav.classList.toggle('active', currentView === 'offline');
    if (currentView === 'offline') {
      offlineNav.setAttribute('aria-current', 'page');
      offlineNav.setAttribute('disabled', 'true');
    } else {
      offlineNav.removeAttribute('aria-current');
      offlineNav.removeAttribute('disabled');
    }
  }
};

const updateDocumentTitle = () => {
  const viewTitle = currentView === 'offline'
    ? getLocalizedText(offlineServiceContent.title, currentLang)
    : translations[currentLang].navResume;
  document.title = `${viewTitle} • RestlessByte`;
};

const updateHistory = (view, pushState) => {
  const url = new URL(window.location.href);
  if (view === 'offline') {
    url.searchParams.set(VIEW_QUERY_PARAM, 'offline');
  } else {
    url.searchParams.delete(VIEW_QUERY_PARAM);
  }

  const state = { view };
  if (pushState) {
    history.pushState(state, '', url);
  } else {
    history.replaceState(state, '', url);
  }
};

const setView = (view, { pushState = true } = {}) => {
  const normalizedView = view === 'offline' ? 'offline' : 'resume';
  if (currentView === normalizedView && pushState) {
    return;
  }

  currentView = normalizedView;

  const resumeSection = document.getElementById('view-resume');
  const offlineSection = document.getElementById('view-offline');

  if (resumeSection) {
    resumeSection.classList.toggle('hidden', currentView !== 'resume');
  }
  if (offlineSection) {
    offlineSection.classList.toggle('hidden', currentView !== 'offline');
  }

  updateNavState();
  updateDocumentTitle();
  updateHistory(currentView, pushState);

  if (currentView === 'offline') {
    renderOfflineServices(currentLang);
    requestAnimationFrame(() => {
      showWithDelay(document.querySelectorAll('#offline-services-content .service-card'));
      showWithDelay(document.querySelectorAll('#offline-services-content .service-info-card'));
    });
  } else {
    requestAnimationFrame(() => {
      showWithDelay(document.querySelectorAll('.tech-stack-card'));
      showWithDelay(document.querySelectorAll('.project-card'));
    });
  }
};

const setLanguage = (lang, { persist = true } = {}) => {
  if (!translations[lang]) return;
  currentLang = lang;
  if (persist) {
    localStorage.setItem(STORAGE_LANG_KEY, currentLang);
  }
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  renderSkills();
  renderProjects();
  applyTranslations();
  updateDocumentTitle();

  if (currentView === 'offline') {
    renderOfflineServices(currentLang);
  }

  requestAnimationFrame(() => {
    showWithDelay(document.querySelectorAll('.tech-stack-card'));
    showWithDelay(document.querySelectorAll('.project-card'));
    if (currentView === 'offline') {
      showWithDelay(document.querySelectorAll('#offline-services-content .service-card'));
      showWithDelay(document.querySelectorAll('#offline-services-content .service-info-card'));
    }
  });
};

const initLanguageControls = () => {
  const languageBtn = document.getElementById('language-btn');
  const popup = document.getElementById('language-popup');
  if (languageBtn && popup) {
    languageBtn.addEventListener('click', () => {
      popup.classList.toggle('open');
    });
  }

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      if (popup) {
        popup.classList.remove('open');
      }
    });
  });
};

const initNavigation = () => {
  const resumeNav = document.getElementById('nav-resume');
  const offlineNav = document.getElementById('nav-offline');

  if (resumeNav) {
    resumeNav.addEventListener('click', () => setView('resume'));
  }
  if (offlineNav) {
    offlineNav.addEventListener('click', () => setView('offline'));
  }
};

const initCopyButtons = () => {
  const copyButtons = document.querySelectorAll('.copy-wallet-btn');
  const evmAddressEl = document.getElementById('evm-address');
  const metaBtn = document.getElementById('metamask-btn');

  copyButtons.forEach(copyBtn => {
    copyBtn.addEventListener('click', () => {
      const address = copyBtn.getAttribute('data-address');
      if (!address) return;
      navigator.clipboard.writeText(address);
      copyBtn.textContent = translations[currentLang].copied;
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = translations[currentLang].copy;
        copyBtn.classList.remove('copied');
      }, 2000);
    });
  });

  if (metaBtn && evmAddressEl) {
    metaBtn.addEventListener('click', async () => {
      if (!window.ethereum) {
        alert('MetaMask not detected');
        return;
      }
      try {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const amount = prompt('Amount of USDT to send:', '1');
        if (!amount) return;
        const value = BigInt(Math.round(parseFloat(amount) * 1e6)).toString(16).padStart(64, '0');
        const receiver = evmAddressEl.textContent.trim().slice(2).padStart(64, '0');
        const data = '0xa9059cbb' + receiver + value;
        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: account,
              to: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
              data
            }
          ]
        });
      } catch (err) {
        console.error(err);
      }
    });
  } else if (metaBtn) {
    metaBtn.style.display = 'none';
  }
};

const initPage = async () => {
  const params = new URLSearchParams(window.location.search);
  currentView = params.get(VIEW_QUERY_PARAM) === 'offline' ? 'offline' : 'resume';

  const detectedLang = await resolveInitialLanguage();
  setLanguage(detectedLang, { persist: false });

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  initLanguageControls();
  initNavigation();
  initCopyButtons();
  setView(currentView, { pushState: false });

  requestAnimationFrame(() => {
    showWithDelay(document.querySelectorAll('.tech-stack-card'));
    showWithDelay(document.querySelectorAll('.project-card'));
    if (currentView === 'offline') {
      showWithDelay(document.querySelectorAll('#offline-services-content .service-card'));
      showWithDelay(document.querySelectorAll('#offline-services-content .service-info-card'));
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initPage();
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const main = document.getElementById('main-content');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => (loader.style.display = 'none'), 500);
  }
  if (main) {
    main.classList.remove('hidden');
    main.classList.add('fade-in');
  }
});

window.addEventListener('popstate', event => {
  const viewFromState = event.state?.view;
  if (viewFromState) {
    setView(viewFromState, { pushState: false });
  } else {
    const params = new URLSearchParams(window.location.search);
    const view = params.get(VIEW_QUERY_PARAM) === 'offline' ? 'offline' : 'resume';
    setView(view, { pushState: false });
  }
});
