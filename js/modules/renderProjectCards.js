export function renderProjectCards(projects, target) {
  const frag = document.createDocumentFragment();

  projects.forEach(project => {
    const card = document.createElement("li");
    card.className = `project-card${project.isWip ? " project-card--wip" : ""}`;
    const categories = Array.isArray(project.categories) ? project.categories : [];
    const categoryTags = categories
      .map(
        category =>
          `<span class="project-card__category btn-badge btn-badge--outline">${category}</span>`,
      )
      .join("");
    const categoryList = categoryTags
      ? `<div class="project-card__categories project-card__links" aria-label="Project categories">${categoryTags}</div>`
      : "";

    card.innerHTML = `
      <div class="project-card__header">
        <span class="project-card__icon-badge" aria-hidden="true">&lt;/&gt;</span>
      </div>

      <div class="project-card__thumbnail">
        <img src="${project.image}" alt="${project.alt}" />
      </div>

      <div class="project-card__body">
        ${categoryList}
        <h2 class="project-card__title">${project.title}</h2>
        <p class="project-card__desc">${project.desc}</p>
      </div>

      <div class="project-card__footer">
        <div class="project-card__links">
          <a href="${project.relativeUrl}" class="btn-badge btn-badge--outline ${project.isWip ? "btn-badge--disabled" : ""}">
            <span class="material-icons">folder_open</span>Relative
          </a>
          <a href="${project.liveUrl}" class="btn-badge btn-badge--default ${project.isWip ? "btn-badge--disabled" : ""}" target="_blank" rel="noopener">
            <span class="material-icons">open_in_new</span>Live
          </a>
          <a href="${project.githubUrl}" class="btn-badge btn-badge--default ${project.isWip ? "btn-badge--disabled" : ""}" target="_blank" rel="noopener">
            Github
          </a>
        </div>
      </div>
    `;

    frag.append(card);
  });

  target.append(frag);
}
