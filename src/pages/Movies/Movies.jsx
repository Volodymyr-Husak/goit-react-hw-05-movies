import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchGenres from '../../helpers/fetchGenres';
import { saveInLS } from '../../helpers/storage';
export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('query');

  const location = useLocation();
  //   console.log(location);

  const API_KEY = '301d018a3b09052968e9ce18b1793bab';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';

  const fetchMovies = movieName => {
    try {
      fetch(
        `${BASE_URL}${API_KEY}&query=${movieName}&language=en-US&page=1&include_adult=false`
      )
        .then(res => res.json())
        .then(obj => {
          saveInLS('Movie', obj.results);
          setMovies(obj.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (nameMovie === '' || nameMovie === null) return;
    // console.log('nameMovie', nameMovie);
    fetchMovies(nameMovie);
  }, [nameMovie]);

  const handleMovieNameChange = e => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setQuery('');
    fetchMovies(query);
    fetchGenres();
    setSearchParams({ query: query });
  };
  return (
    <>
      <form className="{css.searchForm}" onSubmit={handleSubmit}>
        <button className="{css.searchForm_button}" type="submit">
          <span className="{css.searchForm_button_label}">Search</span>
        </button>

        <input
          //   className="{css.searchForm_input}"
          onChange={handleMovieNameChange}
          name="searchMovie"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
        />
      </form>
      <ul>
        {movies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location.pathname + location.search }}
              >
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
