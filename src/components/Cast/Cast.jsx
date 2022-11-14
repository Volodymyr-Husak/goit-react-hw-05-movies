import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Cast.module.css';
import * as api from '../../helpers/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchCast(movieId).then(resp => {
      setCast(resp.cast);
      return resp.cast;
    });
  }, [movieId]);

  if (cast.length === 0) {
    return <p>We don`t have any cast for this movie</p>;
  }

  return (
    <ul className={css.cast__list}>
      {cast.map(({ character, original_name, profile_path, cast_id }) => (
        <li key={cast_id} className={css.cast__item}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={original_name}
            />
          </div>
          <p>
            <strong>{original_name}</strong>
          </p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
