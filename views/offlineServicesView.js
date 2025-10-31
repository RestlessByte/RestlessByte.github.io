import { offlineServiceContent } from '../data/offlineServices.js';
import { getLocalizedText } from '../utils/localization.js';

export const renderOfflineServices = lang => {
  const titleEl = document.getElementById('offline-services-title');
  const container = document.getElementById('offline-services-content');
  if (!titleEl || !container) return;

  titleEl.textContent = getLocalizedText(offlineServiceContent.title, lang);
  container.innerHTML = '';

  offlineServiceContent.categories.forEach(category => {
    const section = document.createElement('section');
    section.className = 'service-category';

    const heading = document.createElement('h3');
    heading.className = 'service-category-title';
    heading.textContent = getLocalizedText(category.title, lang);
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
      nameEl.className = 'service-card-name';
      nameEl.textContent = getLocalizedText(item.name, lang);

      const priceEl = document.createElement('span');
      priceEl.className = 'service-card-price';
      priceEl.textContent = getLocalizedText(item.price, lang);

      textWrap.appendChild(nameEl);
      textWrap.appendChild(priceEl);
      header.appendChild(textWrap);
      card.appendChild(header);

      if (item.details) {
        const details = document.createElement('p');
        details.className = 'service-card-description';
        details.textContent = getLocalizedText(item.details, lang);
        card.appendChild(details);
      }

      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  const infoGrid = document.createElement('div');
  infoGrid.className = 'service-info-grid';

  offlineServiceContent.infoBlocks.forEach(block => {
    const infoCard = document.createElement('article');
    infoCard.className = 'service-info-card';

    const infoTitle = document.createElement('h3');
    infoTitle.className = 'service-info-title';
    infoTitle.textContent = getLocalizedText(block.title, lang);
    infoCard.appendChild(infoTitle);

    const list = document.createElement('ul');
    list.className = 'service-info-list';

    block.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = getLocalizedText(item, lang);
      list.appendChild(listItem);
    });

    infoCard.appendChild(list);
    infoGrid.appendChild(infoCard);
  });

  if (offlineServiceContent.contacts) {
    const contactCard = document.createElement('article');
    contactCard.className = 'service-info-card service-contact-card';

    const contactTitle = document.createElement('h3');
    contactTitle.className = 'service-info-title';
    contactTitle.textContent = getLocalizedText(offlineServiceContent.contacts.title, lang);
    contactCard.appendChild(contactTitle);

    if (offlineServiceContent.contacts.note) {
      const note = document.createElement('p');
      note.className = 'service-contact-note';
      note.textContent = getLocalizedText(offlineServiceContent.contacts.note, lang);
      contactCard.appendChild(note);
    }

    const contactList = document.createElement('ul');
    contactList.className = 'service-contact-list';

    offlineServiceContent.contacts.items.forEach(item => {
      const contactItem = document.createElement('li');

      const label = document.createElement('span');
      label.className = 'service-contact-label';
      label.textContent = getLocalizedText(item.label, lang);

      const link = document.createElement('a');
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = item.display;

      contactItem.appendChild(label);
      contactItem.appendChild(link);
      contactList.appendChild(contactItem);
    });

    contactCard.appendChild(contactList);
    infoGrid.appendChild(contactCard);
  }

  container.appendChild(infoGrid);
};
