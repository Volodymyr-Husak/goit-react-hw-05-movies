const API_KEY = '301d018a3b09052968e9ce18b1793bab';

export default function fetchCast(movieId) {
  try {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(obj => {
        // console.log(obj.cast);
        return obj.cast;
      });
  } catch (error) {
    console.log(error);
  }
}
