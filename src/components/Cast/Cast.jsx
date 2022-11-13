import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../../helpers/api';
// import fetchCast from 'helpers/fetchCast';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  // const API_KEY = '301d018a3b09052968e9ce18b1793bab';

  // const fetchCast = id => {
  //   try {
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  //     )
  //       .then(res => res.json())
  //       .then(obj => {
  //         // console.log(obj);
  //         setCast(obj.cast);
  //         return obj.cast;
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    api.fetchCast(movieId).then(resp => {
      // console.log(obj);
      setCast(resp.cast);
      return resp.cast;
    });
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ character, original_name, profile_path, cast_id }) => (
        <li key={cast_id}>
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
