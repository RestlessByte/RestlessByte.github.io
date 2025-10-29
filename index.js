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

const sharedInfoBlocks = [
  {
    title: { en: '👻 Work conditions', ru: '👻 Условия работы' },
    items: [
      { en: 'I work politely, clearly and safely.', ru: 'Работаю вежливо, чётко и безопасно.' },
      { en: 'Online: SSH / GitHub / AnyDesk.', ru: 'Онлайн: SSH / GitHub / AnyDesk.' },
      { en: 'Offline: at your place or you can deliver the device to me.', ru: 'Офлайн: у вас дома или с доставкой устройства ко мне.' },
      { en: 'Call-out without providing a service — 1,000 ₽.', ru: 'Вызов без оказания услуги — 1.000 ₽.' }
    ]
  },
  {
    title: { en: '💳 Payment options', ru: '💳 Оплата' },
    items: [
      { en: '💵 Cash', ru: '💵 Наличные' },
      { en: '💳 Bank transfer', ru: '💳 Перевод на карту' },
      { en: '₿ Crypto (USDT)', ru: '₿ Крипта (USDT)' },
      { en: '⚖️ For companies — full paperwork available.', ru: '⚖️ Для компаний — юридическая оплата с документами.' }
    ]
  },
  {
    title: { en: '🔮 Why hire me', ru: '🔮 Почему именно я' },
    items: [
      {
        en: 'I am a programmer and developer, not just a “Windows reinstaller”.',
        ru: 'Я — программист и разработчик, а не просто «переустановщик винды».'
      },
      { en: 'I always explain what was done and how to use it further.', ru: 'Всегда объясняю, что сделал и как пользоваться дальше.' },
      { en: 'Portfolio is open and transparent.', ru: 'Портфолио открыто.' }
    ]
  }
];

const contactsBlock = {
  title: { en: 'Employer contacts', ru: 'Контакты работодателя' },
  note: {
    en: 'Please message the Telegram bot first — I have many channels and it helps to keep requests organised.',
    ru: 'Пожалуйста, сначала пишите в чат-бот — каналов много, так проще не потерять заявку.'
  },
  items: [
    {
      label: { en: 'Telegram bot', ru: 'Telegram чат-бот' },
      display: 'https://t.me/reportRestlessByte_bot',
      url: 'https://t.me/reportRestlessByte_bot'
    },
    {
      label: { en: 'Telegram account', ru: 'Telegram аккаунт' },
      display: 'https://t.me/RestlessByte',
      url: 'https://t.me/RestlessByte'
    }
  ]
};

const serviceContent = {
  online: {
    title: { en: '💻 Online Services', ru: '💻 Онлайн услуги' },
    categories: [
      {
        title: { en: 'Main services', ru: 'Основные услуги' },
        items: [
          {
            icon: '🪟',
            name: { en: 'Windows 10/11 installation support', ru: 'Установка Windows 10/11' },
            price: { en: '1,300 ₽', ru: '1.300 ₽' },
            details: {
              en: 'Remote session via AnyDesk: clean install, drivers and post-install tuning.',
              ru: 'Удалённая сессия через AnyDesk: чистая установка, драйверы и финальные настройки.'
            }
          },
          {
            icon: '💿',
            name: { en: 'Windows 7/8 installation support', ru: 'Установка Windows 7/8' },
            price: { en: 'from 3,500 ₽', ru: 'от 3.500 ₽' },
            details: {
              en: 'Legacy hardware care, manual driver hunt and activation guidance.',
              ru: 'Сложное устаревшее железо, ручной поиск драйверов и настройка активации.'
            }
          },
          {
            icon: '🧩',
            name: { en: 'Software installation & rollout', ru: 'Установка программ' },
            price: { en: 'from 500 ₽', ru: 'от 500 ₽' },
            details: {
              en: 'Remote package deployment. When the environment is ready — from 50 ₽ per app.',
              ru: 'Удалённое развертывание пакетов. Если окружение уже готово — от 50 ₽ за программу.'
            }
          },
          {
            icon: '📡',
            name: { en: 'Router & Wi-Fi hardening', ru: 'Настройка роутеров и Wi‑Fi' },
            price: { en: 'from 1,000 ₽', ru: 'от 1.000 ₽' },
            details: {
              en: 'Secure Wi-Fi, guest networks and firewall rules. Extended protection from 3,500 ₽.',
              ru: 'Безопасный Wi‑Fi, гостевые сети и правила firewall. Расширенная защита — от 3.500 ₽.'
            }
          },
          {
            icon: '🤖',
            name: { en: 'Chatbot development (Telegram/VK)', ru: 'Разработка чат-ботов (Telegram/VK)' },
            price: { en: 'from 3,000 ₽', ru: 'от 3.000 ₽' },
            details: {
              en: 'Scenario scripting, hosting, integrations and analytics dashboards.',
              ru: 'Сценарии, хостинг, интеграции и аналитика.'
            }
          },
          {
            icon: '🌐',
            name: { en: 'Website creation', ru: 'Создание сайтов' },
            price: { en: 'from 20,000 ₽', ru: 'от 20.000 ₽' },
            details: {
              en: 'Builder-based sites or custom NextJS + PostgreSQL solutions from 50,000 ₽.',
              ru: 'Конструкторы или самописные NextJS + PostgreSQL решения от 50.000 ₽.'
            }
          },
          {
            icon: '🗂️',
            name: { en: 'Data migration & sync', ru: 'Перенос и копирование данных' },
            price: { en: 'from 500 ₽ / 5 GB', ru: 'от 500 ₽ за 5 ГБ' },
            details: {
              en: 'Secure copy, checksum verification and structure preservation.',
              ru: 'Безопасное копирование, проверка контрольных сумм и сохранение структуры.'
            }
          },
          {
            icon: '🛡️',
            name: { en: 'Confidential backups', ru: 'Конфиденциальные бэкапы' },
            price: { en: '500 ₽ / GB', ru: '500 ₽/ГБ' },
            details: {
              en: 'Single drive? I build an encrypted archive for secure storage.',
              ru: 'Если диск один — собираю зашифрованный архив для безопасного хранения.'
            }
          },
          {
            icon: '📱',
            name: { en: 'Phone setup & onboarding', ru: 'Настройка телефонов' },
            price: { en: 'from 1,000 ₽', ru: 'от 1.000 ₽' },
            details: {
              en: 'Mail, messengers, sync and security policies ready to go.',
              ru: 'Почта, мессенджеры, синхронизация и политики безопасности.'
            }
          }
        ]
      },
      {
        title: { en: 'Additional services', ru: 'Дополнительные услуги' },
        items: [
          {
            icon: '📂',
            name: { en: 'Driver installation', ru: 'Установка драйверов' },
            price: { en: '50 ₽ / item', ru: '50 ₽/шт.' },
            details: {
              en: 'Remote detection, download mirrors and silent install.',
              ru: 'Удалённый подбор, скачивание и тихая установка.'
            }
          },
          {
            icon: '⚙️',
            name: { en: 'Windows optimisation', ru: 'Оптимизация Windows' },
            price: { en: 'from 100 ₽', ru: 'от 100 ₽' },
            details: {
              en: 'Services cleanup, privacy and performance tuning.',
              ru: 'Чистка служб, приватность и настройка производительности.'
            }
          },
          {
            icon: '🔒',
            name: { en: 'Antivirus & security setup', ru: 'Настройка антивируса и защиты' },
            price: { en: 'from 300 ₽', ru: 'от 300 ₽' },
            details: {
              en: 'Policies, scheduled scans and safe-browsing tweaks.',
              ru: 'Политики, расписание сканов и настройки безопасного веб-сёрфинга.'
            }
          },
          {
            icon: '📡',
            name: { en: 'Remote access configuration', ru: 'Настройка удалённого доступа' },
            price: { en: 'from 500 ₽', ru: 'от 500 ₽' },
            details: {
              en: 'VPN, RDP, SSH tunnels with hardened profiles.',
              ru: 'VPN, RDP, SSH-тоннели с усиленной защитой.'
            }
          },
          {
            icon: '🧹',
            name: { en: 'PC / laptop cleaning guidance', ru: 'Чистка ПК/ноутбука' },
            price: { en: 'from 700 ₽', ru: 'от 700 ₽' },
            details: {
              en: 'Step-by-step remote assistance for dust removal and thermal paste renewal.',
              ru: 'Пошаговая удалённая помощь по чистке и замене термопасты.'
            }
          },
          {
            icon: '📱',
            name: { en: 'Account recovery', ru: 'Восстановление аккаунтов' },
            price: { en: 'from 500 ₽', ru: 'от 500 ₽' },
            details: {
              en: 'Google, Apple ID, social media with security review.',
              ru: 'Google, Apple ID, социальные сети с проверкой безопасности.'
            }
          },
          {
            icon: '🛠️',
            name: { en: 'Custom requests', ru: 'Другие задачи' },
            price: { en: 'On request', ru: 'По запросу' },
            details: {
              en: 'Describe the task — I will propose a safe and efficient solution.',
              ru: 'Опишите задачу — предложу безопасное и эффективное решение.'
            }
          }
        ]
      }
    ],
    infoBlocks: sharedInfoBlocks,
    contacts: contactsBlock
  },
  offline: {
    title: { en: '🛠️ Offline Services', ru: '🛠️ Оффлайн услуги' },
    categories: [
      {
        title: { en: 'Main services', ru: 'Основные услуги' },
        items: [
          {
            icon: '🖥️',
            name: { en: 'Windows 10/11 installation', ru: 'Установка Windows 10/11' },
            price: { en: '1,300 ₽', ru: '1.300 ₽' },
            details: {
              en: 'On-site clean install, drivers, activation and basic software.',
              ru: 'Чистая установка на месте, драйверы, активация и базовый софт.'
            }
          },
          {
            icon: '💿',
            name: { en: 'Windows 7/8 installation', ru: 'Установка Windows 7/8' },
            price: { en: 'from 3,500 ₽', ru: 'от 3.500 ₽' },
            details: {
              en: 'Legacy hardware, rare drivers and fine-tuning included.',
              ru: 'Устаревшее железо, поиск редких драйверов и тонкая настройка.'
            }
          },
          {
            icon: '🧩',
            name: { en: 'Software installation', ru: 'Установка программ' },
            price: { en: 'from 500 ₽', ru: 'от 500 ₽' },
            details: {
              en: 'Full software pack on-site. If everything is prepped — from 50 ₽ per app.',
              ru: 'Полный пакет софта на месте. Если всё готово — от 50 ₽ за программу.'
            }
          },
          {
            icon: '📡',
            name: { en: 'Router & Wi-Fi setup', ru: 'Настройка роутеров и Wi‑Fi' },
            price: { en: 'from 1,000 ₽', ru: 'от 1.000 ₽' },
            details: {
              en: 'Tidy cabling, guest networks and extended protection from 3,500 ₽.',
              ru: 'Аккуратная разводка, гостевые сети и усиленная защита от 3.500 ₽.'
            }
          },
          {
            icon: '🤖',
            name: { en: 'Chatbot development (Telegram/VK)', ru: 'Разработка чат-ботов (Telegram/VK)' },
            price: { en: 'from 3,000 ₽', ru: 'от 3.000 ₽' },
            details: {
              en: 'Strategy session, deployment and handover in person.',
              ru: 'Очная стратегия, развёртывание и передача проекта.'
            }
          },
          {
            icon: '🌐',
            name: { en: 'Website creation', ru: 'Создание сайтов' },
            price: { en: 'from 20,000 ₽', ru: 'от 20.000 ₽' },
            details: {
              en: 'Builder-based launch or custom NextJS + PostgreSQL from 50,000 ₽.',
              ru: 'Запуск на конструкторе или самопис на NextJS + PostgreSQL от 50.000 ₽.'
            }
          },
          {
            icon: '🗂️',
            name: { en: 'Data transfer & cloning', ru: 'Перенос и копирование данных' },
            price: { en: 'from 500 ₽ / 5 GB', ru: 'от 500 ₽ за 5 ГБ' },
            details: {
              en: 'Careful copying with verification and safe storage.',
              ru: 'Аккуратное копирование с проверкой и безопасным хранением.'
            }
          },
          {
            icon: '🛡️',
            name: { en: 'Confidential backups', ru: 'Конфиденциальные бэкапы' },
            price: { en: '500 ₽ / GB', ru: '500 ₽/ГБ' },
            details: {
              en: 'If there is only one disk, I create a separate encrypted archive.',
              ru: 'Если диск один — делаю отдельный зашифрованный архив.'
            }
          },
          {
            icon: '📱',
            name: { en: 'Phone configuration', ru: 'Настройка телефонов' },
            price: { en: 'from 1,000 ₽', ru: 'от 1.000 ₽' },
            details: {
              en: 'Apps, mail, backups and user training.',
              ru: 'Приложения, почта, бэкапы и обучение.'
            }
          },
          {
            icon: '🔌',
            name: { en: 'RJ-45 twisted pair crimping', ru: 'Обжатие витой пары RJ-45' },
            price: { en: '1,900 ₽', ru: '1.900 ₽' },
            details: {
              en: 'Bring tools, crimp the cable, test with a tracer and tune the network.',
              ru: 'Привожу инструмент, обжимаю кабель, проверяю трассером и настраиваю сеть.'
            }
          }
        ]
      },
      {
        title: { en: 'Additional services', ru: 'Дополнительные услуги' },
        items: [
          {
            icon: '📂',
            name: { en: 'Driver installation', ru: 'Установка драйверов' },
            price: { en: '50 ₽ / item', ru: '50 ₽/шт.' },
            details: {
              en: 'Bring the full driver pack and install everything locally.',
              ru: 'Привожу полный комплект драйверов и устанавливаю их на месте.'
            }
          },
          {
            icon: '⚙️',
            name: { en: 'Windows optimisation', ru: 'Оптимизация Windows' },
            price: { en: 'from 100 ₽', ru: 'от 100 ₽' },
            details: {
              en: 'Cleaning dust, trimming autoload and setting up services.',
              ru: 'Чистка мусора, настройка автозапуска и служб.'
            }
          },
          {
            icon: '🔒',
            name: { en: 'Antivirus & security setup', ru: 'Настройка антивируса и защиты' },
            price: { en: 'from 300 ₽', ru: 'от 300 ₽' },
            details: {
              en: 'Install protection, configure policies and train the user.',
              ru: 'Ставлю защиту, настраиваю политики и обучаю пользователя.'
            }
          },
          {
            icon: '📡',
            name: { en: 'Remote access configuration', ru: 'Настройка удалённого доступа' },
            price: { en: 'from 500 ₽', ru: 'от 500 ₽' },
            details: {
              en: 'Set up VPN, RDP or SSH with strong encryption on your hardware.',
              ru: 'Настраиваю VPN, RDP или SSH с сильным шифрованием на вашем оборудовании.'
            }
          },
          {
            icon: '🧹',
            name: { en: 'PC / laptop cleaning', ru: 'Чистка ПК/ноутбука' },
            price: { en: 'from 700 ₽', ru: 'от 700 ₽' },
            details: {
              en: 'Disassemble, remove dust and refresh thermal paste.',
              ru: 'Разбираю, удаляю пыль и обновляю термопасту.'
            }
          },
          {
            icon: '📱',
            name: { en: 'Account recovery', ru: 'Восстановление аккаунтов' },
            price: { en: 'from 500 ₽', ru: 'от 500 ₽' },
            details: {
              en: 'Recover Google, Apple ID or social accounts with secure handover.',
              ru: 'Восстанавливаю Google, Apple ID или социальные аккаунты с безопасной передачей.'
            }
          },
          {
            icon: '🛠️',
            name: { en: 'Custom requests', ru: 'Другие задачи' },
            price: { en: 'On request', ru: 'По запросу' },
            details: {
              en: 'Bring any tech challenge — we will solve it together.',
              ru: 'Любые задачи по технике — решим вместе.'
            }
          }
        ]
      }
    ],
    infoBlocks: sharedInfoBlocks,
    contacts: contactsBlock
  }
};

let currentLang = 'en';
const urlParams = new URLSearchParams(window.location.search);
let currentServiceMode = urlParams.get('service') === 'offline' ? 'offline' : 'online';

const updateServiceTabs = () => {
  const onlineTab = document.getElementById('services-tab-online');
  const offlineTab = document.getElementById('services-tab-offline');

  if (onlineTab) {
    onlineTab.textContent = getLocalizedText(serviceContent.online.title, currentLang);
    onlineTab.classList.toggle('active', currentServiceMode === 'online');
    if (currentServiceMode === 'online') {
      onlineTab.setAttribute('aria-current', 'page');
    } else {
      onlineTab.removeAttribute('aria-current');
    }
  }

  if (offlineTab) {
    offlineTab.textContent = getLocalizedText(serviceContent.offline.title, currentLang);
    offlineTab.classList.toggle('active', currentServiceMode === 'offline');
    if (currentServiceMode === 'offline') {
      offlineTab.setAttribute('aria-current', 'page');
    } else {
      offlineTab.removeAttribute('aria-current');
    }
  }
};

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

const renderServices = () => {
  const servicesContainer = document.getElementById('services-content');
  const servicesTitle = document.getElementById('services-title');
  if (!servicesContainer || !servicesTitle) return;

  const currentData = serviceContent[currentServiceMode];

  servicesTitle.textContent = getLocalizedText(currentData.title, currentLang);
  updateServiceTabs();

  servicesContainer.innerHTML = '';

  currentData.categories.forEach(category => {
    const section = document.createElement('section');
    section.className = 'service-category';

    const heading = document.createElement('h3');
    heading.className = 'service-category-title';
    heading.textContent = getLocalizedText(category.title, currentLang);
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'service-grid';

    category.items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'service-card';

      const header = document.createElement('div');
      header.className = 'service-card-header';

      if (item.icon) {
        const icon = document.createElement('span');
        icon.className = 'service-card-icon';
        icon.textContent = item.icon;
        header.appendChild(icon);
      }

      const textWrap = document.createElement('div');
      textWrap.className = 'service-card-text';

      const nameEl = document.createElement('h4');
      nameEl.className = 'service-card-title';
      nameEl.textContent = getLocalizedText(item.name, currentLang);
      textWrap.appendChild(nameEl);

      if (item.details) {
        const detailEl = document.createElement('p');
        detailEl.className = 'service-card-details';
        detailEl.textContent = getLocalizedText(item.details, currentLang);
        textWrap.appendChild(detailEl);
      }

      header.appendChild(textWrap);
      card.appendChild(header);

      if (item.price) {
        const priceEl = document.createElement('span');
        priceEl.className = 'service-card-price';
        priceEl.textContent = getLocalizedText(item.price, currentLang);
        card.appendChild(priceEl);
      }

      grid.appendChild(card);
    });

    section.appendChild(grid);
    servicesContainer.appendChild(section);
  });

  if ((currentData.infoBlocks && currentData.infoBlocks.length) || currentData.contacts) {
    const infoGrid = document.createElement('div');
    infoGrid.className = 'service-info-grid';

    currentData.infoBlocks?.forEach(block => {
      const infoCard = document.createElement('article');
      infoCard.className = 'service-info-card';

      const infoTitle = document.createElement('h3');
      infoTitle.className = 'service-info-title';
      infoTitle.textContent = getLocalizedText(block.title, currentLang);
      infoCard.appendChild(infoTitle);

      if (block.items && block.items.length) {
        const list = document.createElement('ul');
        list.className = 'service-info-list';
        block.items.forEach(item => {
          const listItem = document.createElement('li');
          listItem.innerHTML = getLocalizedText(item, currentLang);
          list.appendChild(listItem);
        });
        infoCard.appendChild(list);
      }

      infoGrid.appendChild(infoCard);
    });

    if (currentData.contacts) {
      const contactCard = document.createElement('article');
      contactCard.className = 'service-info-card service-contact-card';

      const contactTitle = document.createElement('h3');
      contactTitle.className = 'service-info-title';
      contactTitle.textContent = getLocalizedText(currentData.contacts.title, currentLang);
      contactCard.appendChild(contactTitle);

      if (currentData.contacts.note) {
        const note = document.createElement('p');
        note.className = 'service-contact-note';
        note.textContent = getLocalizedText(currentData.contacts.note, currentLang);
        contactCard.appendChild(note);
      }

      const contactList = document.createElement('ul');
      contactList.className = 'service-contact-list';

      currentData.contacts.items.forEach(item => {
        const contactItem = document.createElement('li');

        const label = document.createElement('span');
        label.className = 'service-contact-label';
        label.textContent = getLocalizedText(item.label, currentLang);
        contactItem.appendChild(label);

        const link = document.createElement('a');
        link.href = item.url;
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = item.display;
        contactItem.appendChild(link);

        contactList.appendChild(contactItem);
      });

      contactCard.appendChild(contactList);
      infoGrid.appendChild(contactCard);
    }

    servicesContainer.appendChild(infoGrid);
  }

  requestAnimationFrame(() => {
    showWithDelay(servicesContainer.querySelectorAll('.service-card'));
    showWithDelay(servicesContainer.querySelectorAll('.service-info-card'));
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
  renderServices();
  applyTranslations(currentLang);

  document.getElementById('language-btn').addEventListener('click', () => {
    document.getElementById('language-popup').classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      renderSkills();
      renderProjects();
      renderServices();
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

