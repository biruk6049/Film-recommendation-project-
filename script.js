document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results-container');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = (searchInput.value || '').trim();

    resultsContainer.innerHTML = '';

    if (!q) {
      const empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.textContent = 'Please enter a movie title to search.';
      resultsContainer.appendChild(empty);
      return;
    }

    const placeholder = document.createElement('div');
    placeholder.className = 'empty-state';
    placeholder.textContent = `Search received for "${q}". Integrate API to display results here.`;
    resultsContainer.appendChild(placeholder);
  });

});
