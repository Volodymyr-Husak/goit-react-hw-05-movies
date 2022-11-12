import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { saveInLS } from '../../helpers/storage';
import fetchGenres from '../../helpers/fetchGenres';
// import fetchPopularMovies from '../../helpers/fetchPopularMovies';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const API_KEY = '301d018a3b09052968e9ce18b1793bab';
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';

  const fetchPopularMovies = () => {
    try {
      fetch(`${BASE_URL}${API_KEY}&page=${1}`)
        .then(res => res.json())
        .then(obj => {
          // console.log(obj);
          saveInLS('Movie', obj.results);
          setPopularMovies(obj.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchGenres();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {popularMovies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: '/' }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
