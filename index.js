import { arraySkills } from './arraySkills.js';

const renderSkills = () => {
  const skillsContainer = document.getElementById('skillsContainer');
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

const initPage = () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderSkills();
};

document.addEventListener('DOMContentLoaded', initPage);

