import { Link } from 'react-router-dom';
import css from './Trending.module.css';
import { Section } from '../Section/Section';

export const Trending = ({ popularMovies }) => {
  return (
    <Section>
      <h2>Trending today</h2>
      <ul>
        {popularMovies?.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: '/' }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
