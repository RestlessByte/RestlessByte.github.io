import { arraySkills } from './arraySkills.js';

const translations = {
  en: {
    greeting: '👋 Daniil [RestlessByte]',
    role: '🎓 Student | 👨🏽‍💻 Developer | 🔮 Tech Enthusiast | 🧠 AI-CODER',
    location: '📍 <b>Bashkortostan, Russia | Remote</b>',
    aboutTitle: '💻 About Me',
    aboutText:
      '<code> Greetings to everyone on my this site. This site is created only for portfolio and not more. Here I write what stack I am using at the moment. About me I can say this: I like to code, help others in development, and analyze algorithms. And - yes, I use neural networks in my daily life</code>',
    skillsTitle: 'MY SKILLS',
    projectsTitle: '🎯 Projects',
    project1Title: '🤖 Telegram Game',
    project1Desc: 'Interactive game chat bot with real-time engagement features.',
    project2Title: '🤖 Telegram AI Hub',
    project2Desc:
      'Centralized hub for AI-powered tools and chatbots integration. Create your own chatbots and optimize your response time!',
    connectTitle: "🔗 Let's Connect!",
    seoTitle: '🚀 Portfolio & SEO',
    seoText:
      'Daniil (RestlessByte) builds efficient web and AI solutions using JavaScript, TypeScript and Linux. Explore cutting-edge projects and open-source contributions crafted with attention to detail.',
    footer: 'Built with ❤️ and code.',
    githubView: 'VIEW ON MY GITHUB, TO SEE MY OTHER PROJECTS',
    enter: 'Enter',
    navAbout: 'About',
    navProjects: 'My Projects'
  },
  ru: {
    greeting: '👋 Даниил [RestlessByte]',
    role: '🎓 Студент | 👨🏽‍💻 Разработчик | 🔮 Тех энтузиаст | 🧠 AI-КОДЕР',
    location: '📍 <b>Башкортостан, Россия | Удалённо</b>',
    aboutTitle: '💻 Обо мне',
    aboutText:
      '<code> Приветствую всех на моём сайте. Сайт создан как портфолио. Здесь я пишу, какой стек использую. Мне нравится кодить, помогать другим в разработке и анализировать алгоритмы. Да, я использую нейронные сети каждый день.</code>',
    skillsTitle: 'МОИ НАВЫКИ',
    projectsTitle: '🎯 Проекты',
    project1Title: '🤖 Игра Telegram',
    project1Desc: 'Интерактивный игровой чат-бот с функциями вовлечения в реальном времени.',
    project2Title: '🤖 Telegram AI Hub',
    project2Desc:
      'Централизованный центр для инструментов на основе ИИ и интеграции чат-ботов. Создайте собственных ботов и оптимизируйте время ответа!',
    connectTitle: '🔗 Свяжемся!',
    seoTitle: '🚀 Портфолио и SEO',
    seoText:
      'Даниил (RestlessByte) создаёт эффективные веб и AI-решения на JavaScript, TypeScript и Linux. Исследуйте инновационные проекты и вклад в open-source, созданные с вниманием к деталям.',
    footer: 'Создано с ❤️ и кодом.',
    githubView: 'СМОТРИТЕ НА МОЁМ GITHUB, ЧТОБЫ УВИДЕТЬ ДРУГИЕ ПРОЕКТЫ',
    enter: 'Перейти',
    navAbout: 'Обо мне',
    navProjects: 'Мои проекты'
  }
};

let currentLang = 'en';

const renderSkills = () => {
  const skillsContainer = document.getElementById('skillsContainer');
  if (!skillsContainer) return;
  arraySkills.forEach(skillCategory => {
    const skillCard = document.createElement('div');
    skillCard.className = 'tech-stack-card';

    const titleElement = document.createElement('span');
    titleElement.className = 'tech-stack-cardTitle';
    titleElement.style.display = 'flex';
    titleElement.style.justifyContent = 'center';
    titleElement.innerHTML = `<b>${skillCategory.label}</b>`;

    skillCard.appendChild(titleElement);

    skillCategory.items.forEach(item => {
      const skillElement = document.createElement('span');
      skillElement.className = 'tech-stack-card-stack';
      skillElement.innerHTML = `
            ${item.image}
            <span class="skillTechnologySkillName">${item.title}</span>
          `;

      skillCard.appendChild(skillElement);
    });

    skillsContainer.appendChild(skillCard);
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
  setText('about-title', t.aboutTitle);
  setHTML('about-text', t.aboutText);
  setText('skills-title', t.skillsTitle);
  setText('projects-title', t.projectsTitle);
  setText('project1-title', t.project1Title);
  setText('project1-desc', t.project1Desc);
  setText('project1-link', t.enter);
  setText('project2-title', t.project2Title);
  setText('project2-desc', t.project2Desc);
  setText('project2-link', t.enter);
  setText('github-view', t.githubView);
  setText('connect-title', t.connectTitle);
  setText('seo-title', t.seoTitle);
  setText('seo-text', t.seoText);
  setText('nav-about', t.navAbout);
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
  applyTranslations(currentLang);

  document.getElementById('language-btn').addEventListener('click', () => {
    document.getElementById('language-popup').classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      applyTranslations(currentLang);
      document.getElementById('language-popup').classList.remove('open');
    });
  });
};

document.addEventListener('DOMContentLoaded', initPage);

