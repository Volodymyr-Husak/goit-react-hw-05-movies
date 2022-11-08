// const axios = require('axios').default;

const API_KEY = '301d018a3b09052968e9ce18b1793bab';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';

export default function fetchPopularMovies() {
  try {
    fetch(`${BASE_URL}${API_KEY}&page=${1}`).then(res => {
      return res.json();
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
