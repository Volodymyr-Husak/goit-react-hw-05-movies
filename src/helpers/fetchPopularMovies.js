// const axios = require('axios').default;

const API_KEY = '301d018a3b09052968e9ce18b1793bab';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';

export default function fetchPopularMovies() {
  try {
    fetch(`${BASE_URL}${API_KEY}&page=${1}`).then(res => res.json());
    //   .then(obj => {
    //     localStorage.setItem(
    //       'currentPopularMovies',
    //       JSON.stringify(obj.results)
    //     );
    //   });
  } catch (error) {
    console.log(error);
  }
}
// fetchPopularMovies();

// let moviesDataForMarkupCreator;
// // let paginator;
// export async function fetchPopularMovies1() {
//   // console.log(pagePaginationNumber);
//   try {
//     // console.log(`${BASE_URL}${API_KEY}&page=${pagePaginationNumber}`);

//     const moviesDataArray = await axios.get(`${BASE_URL}${API_KEY}&page=${1}`);
//     if (moviesDataArray.status !== 200) {
//       return;
//     }

//     moviesDataForMarkupCreator = moviesDataArray.data.results;
//     // console.log(moviesDataforMarkupCreator)
//     let totalResults = moviesDataArray.data.total_results;

//     localStorage.setItem(
//       'currentPopularMovies',
//       JSON.stringify(moviesDataForMarkupCreator)
//     );
//     // clearGalleryMarkup();

//     // paginator = new FilmsPagination(null, totalResults);
//     // paginator.pagination.on('afterMove', paginatePage);

//     // renderMarkupMovieCard(moviesDataforMarkupCreator);
//     // findLi();
//     // return moviesDataforMarkupCreator;
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchPopularMovies1();
