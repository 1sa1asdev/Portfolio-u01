export async function remotefetchData() {
  const projContainer = document.querySelector('.projcontainer');
  try {
    const response = await fetch('https://api.github.com/users/1sa1asdev/repos?sort=created&direction=desc&per_page=6');
    const repos = await response.json();

    repos.forEach((repo, i) => {
      const card = document.createElement('div');
      card.className = 'projcards';

      card.innerHTML = `
        <img class="projimg" src="/pics/Projects/rect1.png" alt="Screenshot of ${repo.name}">
        <h3>${repo.name}</h3>
        <p class="generalp">
          ${repo.description || 'No description provided.'}
        </p>
        <p class="purple-p">Tech stack: ${repo.language || 'N/A'}</p>
        <div class="projcardline">
          <div class="projcardline-item">
            <img src="/pics/Projects/chain.svg" alt="Link icon">
            <a href="#" tabindex="-1" aria-disabled="true">Live Preview</a>
          </div>
          <div class="projcardline-item">
            <img src="/pics/Projects/github.svg" alt="GitHub icon">
            <a href="${repo.html_url}" target="_blank">View code</a>
          </div>
        </div>
      `;

      projContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading projects:', error);
    projContainer.innerHTML = '<p>Could not load projects.</p>';
  }
}
