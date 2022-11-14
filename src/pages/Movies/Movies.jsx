import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
// import { toast } from 'react-toastify';

import * as api from '../../helpers/api';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    if (nameMovie === '' || nameMovie === null) return;
    // console.log('nameMovie', nameMovie);
    api.fetchMoviesSearch(nameMovie).then(resp => {
      setMovies(resp.results);
    });
    // fetchMovies(nameMovie);
  }, [nameMovie]);

  const handleMovieNameChange = e => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setQuery('');

    if (query.trim() === '') return alert('Введіть назву фільму');
    // if (query.trim() === '') return toast.warn('Введіть назву фільму');

    api.fetchMoviesSearch(query).then(resp => setMovies(resp.results));

    setSearchParams({ query: query });
  };
  return (
    <Section>
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
    </Section>
  );
};

export default Movies;
