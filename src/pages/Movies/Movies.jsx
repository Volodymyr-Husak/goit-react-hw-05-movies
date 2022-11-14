import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import css from './Movies.module.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultImg from '../../img/defaultCharacter.png';

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
      if (resp.results.length === 0)
        return toast.warn('За вашим запитом фільмів не знайдено');
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

    if (query.trim() === '') return toast.warn('Введіть назву фільму');

    api.fetchMoviesSearch(query).then(resp => setMovies(resp.results));

    setSearchParams({ query: query });
  };

  const imgCharacter = path => {
    if (path === null) {
      return `${defaultImg}`;
    }
    return `https://image.tmdb.org/t/p/w300${path}`;
  };

  return (
    <Section>
      <form className={css.movies__form} onSubmit={handleSubmit}>
        <button className={css.movies__form_btn} type="submit">
          Search
        </button>

        <input
          className={css.movies__form_input}
          onChange={handleMovieNameChange}
          name="searchMovie"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
        />
      </form>
      <ul className={css.movies__list}>
        {movies.map(({ id, original_title, poster_path }) => {
          return (
            <li key={id} className={css.movies__item}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location.pathname + location.search }}
              >
                <img src={imgCharacter(poster_path)} alt="" />
                <p className={css.trending__text}>{original_title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <ToastContainer position="bottom-center" autoClose={2000} theme="dark" />
    </Section>
  );
};

export default Movies;
