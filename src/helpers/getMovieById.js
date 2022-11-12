import { loadWithLS } from './storage';

export const getMovieById = movieId => {
  const movies = loadWithLS('Movie');
  return movies.find(movie => movie.id === movieId);
};
