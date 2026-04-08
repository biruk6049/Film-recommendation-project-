const recommendationContainer = document.getElementById("recommendation-container");

function showRecommendations(movies) {
  recommendationContainer.innerHTML = "";
  if (!movies || movies.length === 0) {
    recommendationContainer.innerHTML = '<div class="empty-state">No recommendations.</div>';
    return;
  }

  movies.slice(0,5).forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `
      <div class="poster" style="background-image: url('${movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : 'https://via.placeholder.com/180x270?text=No+Image'}')"></div>
      <div class="card-body">
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-meta">⭐ ${movie.vote_average} · ${movie.release_date?.split("-")[0] || 'N/A'}</p>
      </div>
    `;
    recommendationContainer.appendChild(div);
  });
}

async function loadRecommendations() {
  const popularMovies = await getPopularMovies();
  showRecommendations(popularMovies);
}

loadRecommendations();