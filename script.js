document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("results-container");
  const navLinks = document.querySelectorAll(".nav-link");
  const themeToggle = document.getElementById("theme-toggle");

  function displayMovies(movies, container) {
    container.innerHTML = "";
    if (!movies || movies.length === 0) {
      container.innerHTML = '<div class="empty-state">No movies found.</div>';
      return;
    }
    movies.forEach(movie => {
      const div = document.createElement("div");
      div.className = "movie-card";
      div.innerHTML = `
        <div class="poster" style="background-image: url('${movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : 'https://via.placeholder.com/180x270?text=No+Image'}')"></div>
        <div class="card-body">
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-meta">⭐ ${movie.vote_average} · ${movie.release_date?.split("-")[0] || 'N/A'}</p>
        </div>
      `;
      container.appendChild(div);
    });
  }

  searchForm.addEventListener("submit", async e => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) {
      resultsContainer.innerHTML = '<div class="empty-state">Enter a movie title.</div>';
      return;
    }
    const movies = await searchMovies(query);
    displayMovies(movies, resultsContainer);
  });

  navLinks.forEach(link => {
    link.addEventListener("click", async e => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      resultsContainer.innerHTML = '<div class="empty-state">Loading...</div>';
      let movies = [];
      switch(link.dataset.section) {
        case "popular":
          movies = await getPopularMovies();
          break;
        case "top-rated":
          movies = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`).then(r => r.json()).then(d => d.results);
          break;
        case "now-playing":
          movies = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(r => r.json()).then(d => d.results);
          break;
        default:
          movies = await getPopularMovies();
      }
      displayMovies(movies, resultsContainer);
    });
  });

  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");
  });
});