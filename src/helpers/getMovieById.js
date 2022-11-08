import { loadWithLS } from './storage';

const movies = loadWithLS('PopularMovie');

export const getMovieById = movieId => {
  return movies.find(movie => movie.id === movieId);
};
