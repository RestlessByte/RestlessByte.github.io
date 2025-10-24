import { arraySkills, arrayProjects } from './arraySkills.js';

const translations = {
  en: {
    greeting: '👋 Daniil [RestlessByte]',
    role: '🎓 Student | 👨🏽‍💻 Developer | 🔮 Tech Enthusiast | 🧠 AI-CODER',
    location: '📍 <b>Bashkortostan, Russia | Remote</b>',
    paymentLabel: '💸 USDT Payment Address:',
    copy: 'Copy',
    copied: 'Copied!',
    payMetamask: 'Pay with MetaMask',
    skillsTitle: 'MY SKILLS',
    projectsTitle: '🎯 Projects',
    connectTitle: "🔗 Let's Connect!",
    seoTitle: '🚀 Portfolio & SEO',
    seoText:
      'Daniil (RestlessByte) builds efficient web and AI solutions using JavaScript, TypeScript and Linux. Explore cutting-edge projects and open-source contributions crafted with attention to detail.',
    footer: 'Built with ❤️ and code.',
    githubView: 'VIEW ON MY GITHUB, TO SEE MY OTHER PROJECTS',
    enter: 'Enter',
    navProfile: 'About',
    navProjects: 'My Projects',
    languageButton: 'Change language',
    profileChip: 'FullStack Developer • AI Coder • Security Specialist',
    profilePill: 'I love sleeping',
    contactsTitle: 'Contacts',
    walletTitle: 'Wallet',
    projectsSubheading: 'Projects',
    quotesSubheading: 'Quotes',
    quote1: '“Strive for the impossible.”',
    quote2: '“We know — that we know nothing. (Socrates)”',
    projectAiHub:
      '<strong>AI Hub</strong> — Platform to create and manage neural Telegram bots: multi-model routing, secure tokens, role presets.',
    projectGitZipQR:
      '<strong>GitZipQR</strong> — Encrypted offline data transfer via QR-codes (AES-256-GCM, scrypt KDF, chunking, integrity checks).'
  },
  ru: {
    greeting: '👋 Даниил [RestlessByte]',
    role: '🎓 Студент | 👨🏽‍💻 Разработчик | 🔮 Тех энтузиаст | 🧠 AI-КОДЕР',
    location: '📍 <b>Башкортостан, Россия | Удалённо</b>',
    paymentLabel: '💸 Способ оплаты USDT:',
    copy: 'Скопировать',
    copied: 'Скопировано!',
    payMetamask: 'Оплатить через MetaMask',
    skillsTitle: 'МОИ НАВЫКИ',
    projectsTitle: '🎯 Проекты',
    connectTitle: '🔗 Свяжемся!',
    seoTitle: '🚀 Портфолио и SEO',
    seoText:
      'Даниил (RestlessByte) создаёт эффективные веб и AI-решения на JavaScript, TypeScript и Linux. Исследуйте инновационные проекты и вклад в open-source, созданные с вниманием к деталям.',
    footer: 'Создано с ❤️ и кодом.',
    githubView: 'СМОТРИТЕ НА МОЁМ GITHUB, ЧТОБЫ УВИДЕТЬ ДРУГИЕ ПРОЕКТЫ',
    enter: 'Перейти',
    navProfile: 'Обо мне',
    navProjects: 'Мои проекты',
    languageButton: 'Сменить язык',
    profileChip: 'FullStack-разработчик • AI-кодер • Специалист по безопасности',
    profilePill: 'Люблю спать',
    contactsTitle: 'Контакты',
    walletTitle: 'Кошелёк',
    projectsSubheading: 'Проекты',
    quotesSubheading: 'Цитаты',
    quote1: '«Стремись к невозможному.»',
    quote2: '«Мы знаем, что ничего не знаем. (Сократ)»',
    projectAiHub:
      '<strong>AI Hub</strong> — Платформа для создания и управления нейронными Telegram-ботами: маршрутизация моделей, безопасные токены, пресеты ролей.',
    projectGitZipQR:
      '<strong>GitZipQR</strong> — Оффлайн-передача данных через QR-коды (AES-256-GCM, scrypt, чанкирование, проверка целостности).'
  }
};

let currentLang = 'en';

const getLocalizedText = (value, lang) => {
  if (typeof value === 'string') return value;
  if (!value) return '';
  return value[lang] ?? value.en ?? value.ru ?? '';
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

const showWithDelay = elements => {
  elements.forEach((el, idx) => {
    setTimeout(() => el.classList.add('show'), idx * 100);
  });
};

const applyTranslations = lang => {
  const t = translations[lang];
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const setHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  setText('greeting', t.greeting);
  setHTML('role', t.role);
  setHTML('location', t.location);
  setText('language-btn', t.languageButton);
  setText('profile-chip', t.profileChip);
  setText('profile-pill', t.profilePill);
  setText('contacts', t.contactsTitle);
  setText('wallet', t.walletTitle);
  setText('payment-label', t.paymentLabel);
  const copyBtn = document.getElementById('copy-address');
  if (copyBtn) copyBtn.textContent = t.copy;
  setText('metamask-btn', t.payMetamask);
  setText('skills-title', t.skillsTitle);
  setText('projects-title', t.projectsTitle);
  document.querySelectorAll('.project-link').forEach(el => {
    el.textContent = t.enter;
  });
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
  setText('nav-profile', t.navProfile);
  setText('nav-projects', t.navProjects);
  const footer = document.querySelector('.footer');
  if (footer) {
    footer.innerHTML = `&copy; <span id="year"></span> Daniil [RestlessByte]. <span id="footer-text">${t.footer}</span>`;
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
};

const initPage = () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  renderSkills();
  renderProjects();
  applyTranslations(currentLang);

  document.getElementById('language-btn').addEventListener('click', () => {
    document.getElementById('language-popup').classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      renderSkills();
      renderProjects();
      applyTranslations(currentLang);
      showWithDelay(document.querySelectorAll('.tech-stack-card'));
      showWithDelay(document.querySelectorAll('.project-card'));
      document.getElementById('language-popup').classList.remove('open');
    });
  });

  const copyBtn = document.getElementById('copy-address');
  const addrEl = document.getElementById('usdt-address');
  const metaBtn = document.getElementById('metamask-btn');
  if (copyBtn && addrEl) {
    const address = addrEl.textContent.trim();
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(address);
      copyBtn.textContent = translations[currentLang].copied;
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = translations[currentLang].copy;
        copyBtn.classList.remove('copied');
      }, 2000);
    });
  }
  if (metaBtn && addrEl) {
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
        const receiver = addrEl.textContent.trim().slice(2).padStart(64, '0');
        const data = '0xa9059cbb' + receiver + value;
        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            from: account,
            to: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            data
          }]
        });
      } catch (err) {
        console.error(err);
      }
    });
  } else if (metaBtn) {
    metaBtn.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', initPage);

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
  showWithDelay(document.querySelectorAll('.tech-stack-card'));
  showWithDelay(document.querySelectorAll('.project-card'));
});

