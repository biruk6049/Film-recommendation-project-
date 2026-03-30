<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Movie Discovery — Home</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#">MovieDiscovery</a>

      <nav class="main-nav" aria-label="Main navigation">
        <ul>
          <li><a href="#" class="nav-link active">Home</a></li>
          <li><a href="#" class="nav-link">Popular</a></li>
          <li><a href="#" class="nav-link">Top Rated</a></li>
          <li><a href="#" class="nav-link">Now Playing</a></li>
          <li><a href="#" class="nav-link">Watchlist</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="search-section" aria-labelledby="search-heading">
      <h1 id="search-heading" class="visually-hidden">Search Movies</h1>

      <form id="search-form" class="search-form" role="search" aria-label="Search movies">
        <label for="search-input" class="search-label">Search movies</label>
        <div class="search-controls">
          <input id="search-input" name="query" type="search" placeholder="Enter movie title..." autocomplete="off" />
          <button type="submit" class="btn primary">Search</button>
        </div>
        <p class="hint">Press Enter or click Search.</p>
      </form>
    </section>

    <section class="recommendation-section" aria-labelledby="recommendation-heading">
      <h2 id="recommendation-heading">Recommended for you</h2>
      <div class="recommendation-list" id="recommendation-list">
        <article class="movie-card placeholder">
          <div class="poster poster-placeholder" aria-hidden="true"></div>
          <div class="card-body">
            <h3 class="movie-title">Recommendation Title</h3>
            <p class="movie-meta">Genre · Year</p>
          </div>
        </article>

        <article class="movie-card placeholder">
          <div class="poster poster-placeholder" aria-hidden="true"></div>
          <div class="card-body">
            <h3 class="movie-title">Recommendation Title</h3>
            <p class="movie-meta">Genre · Year</p>
          </div>
        </article>
      </div>
    </section>

    <section class="results-section" aria-labelledby="results-heading">
      <h2 id="results-heading">Search results</h2>
      <div id="results-container" class="results-grid" aria-live="polite">
        <div class="empty-state">No results yet. Try searching for a movie above.</div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <small>&copy; <span id="year"></span> MovieDiscovery — Built for GDG Beginner Track</small>
    </div>
  </footer>

  <script src="script.js" defer></script>
</body>
</html>
