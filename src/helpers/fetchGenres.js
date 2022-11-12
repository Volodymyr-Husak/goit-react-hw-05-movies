import { saveInLS } from './storage';

const API_KEY = '301d018a3b09052968e9ce18b1793bab';
const BASE_URL =
  'https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=';
export default function fetchGenres() {
  try {
    fetch(`${BASE_URL}${API_KEY}&page=${1}`)
      .then(res => res.json())
      .then(obj => {
        // console.log(obj.genres);
        saveInLS('Genres', obj.genres);
      });

    // .then(obj => {
    //   console.log(obj);
    //   saveInLS('PopularMovie', obj.results);
    //   setPopularMovies(obj.results);
    // });
  } catch (error) {
    console.log(error);
  }
}
