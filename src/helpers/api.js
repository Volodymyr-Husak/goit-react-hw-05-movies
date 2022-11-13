const API_KEY = '301d018a3b09052968e9ce18b1793bab';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export function fetchPopularMovies() {
  return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function getMovieId(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchCast(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function fetchReviews(movieId) {
  return fetchMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  );
}

export function fetchMoviesSearch(query) {
  return fetchMovies(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
}
