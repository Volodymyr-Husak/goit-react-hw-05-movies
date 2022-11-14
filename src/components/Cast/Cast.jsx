import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Cast.module.css';
import * as api from '../../helpers/api';
import defaultImg from '../../img/defaultCharacter.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchCast(movieId).then(resp => {
      setCast(resp.cast);
      return resp.cast;
    });
  }, [movieId]);

  const imgCharacter = path => {
    if (path === null) {
      return `${defaultImg}`;
    }
    return `https://image.tmdb.org/t/p/w300${path}`;
  };

  if (cast.length === 0) {
    return <p>We don`t have any cast for this movie</p>;
  }

  return (
    <ul className={css.cast__list}>
      {cast.map(({ character, original_name, profile_path, cast_id }) => (
        <li key={cast_id} className={css.cast__item}>
          <div className={css.cast__img}>
            <img
              width="300"
              src={imgCharacter(profile_path)}
              alt={original_name}
            />
          </div>
          <div className={css.cast__item_info}>
            <p>
              <strong>{original_name}</strong>
            </p>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
