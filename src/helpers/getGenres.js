import { loadWithLS } from './storage';

const genres = loadWithLS('Genres');

export const getGenres = genreId => {
  let arrGenre = [];
  genres.map(genre => {
    if (genreId.includes(genre.id)) {
      return arrGenre.push(genre.name);
    } else {
      return null;
    }
  });
  return arrGenre.join(', ');
};
