const API_KEY = "36d80384d01c7be07634d95b544dbda3";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Gettig popular movie
export async function getPopularMovies() {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();

    return data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path
        ? IMAGE_BASE_URL + movie.poster_path
        : "",
      rating: movie.vote_average,
      releaseDate: movie.release_date
    }));
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
}

// Search for movies
export async function searchMovies(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();

    return data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path
        ? IMAGE_BASE_URL + movie.poster_path
        : "",
      rating: movie.vote_average,
      releaseDate: movie.release_date
    }));
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
}

// For getting  movie dtails
export async function getMovieDetails(id) {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const movie = await response.json();

    return {
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path
        ? IMAGE_BASE_URL + movie.poster_path
        : "",
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      overview: movie.overview,
      genres: movie.genres.map(g => g.name),
      runtime: movie.runtime,
      language: movie.original_language
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}
