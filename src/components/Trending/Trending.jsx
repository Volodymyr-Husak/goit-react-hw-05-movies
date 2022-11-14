import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
// import css from './Trending.module.css';
import { Section } from '../Section/Section';
// import defaultImg from '../../img/defaultCharacter.png';
import defaultImg from '../../img/defaultCharacter.png';
import css from './Trending.module.css';

export const Trending = ({ popularMovies }) => {
  const imgCharacter = path => {
    if (path === null) {
      return `${defaultImg}`;
    }
    return `https://image.tmdb.org/t/p/w300${path}`;
  };

  return (
    <Section>
      <h2>Trending today</h2>
      <ul className={css.trending__list}>
        {popularMovies?.map(({ id, original_title, poster_path }) => {
          return (
            <li key={id} className={css.trending__item}>
              <Link
                to={`/movies/${id}`}
                state={{ from: '/' }}
                className={css.trending__link}
              >
                <img src={imgCharacter(poster_path)} alt="" />
                <p className={css.trending__text}>{original_title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

Trending.propTypes = {
  popularMovies: propTypes.array.isRequired,
};
