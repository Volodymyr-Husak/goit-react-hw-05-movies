import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import fetchCast from 'helpers/fetchCast';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  //   console.log(movieId);
  //   const castWithFetch = fetchCast(Number(movieId)).then(arr => setCast(arr));
  //   console.log('cast', cast);
  //   fetchCast(Number(movieId)).then(arr => setCast(arr));
  const API_KEY = '301d018a3b09052968e9ce18b1793bab';

  const fetchCast = id => {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      )
        .then(res => res.json())
        .then(obj => {
          // console.log(obj);
          setCast(obj.cast);
          return obj.cast;
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCast(movieId);
  }, [movieId]);

  // console.log('cast', cast);

  //   let profilePath = '';

  //   cast.map(({ profile_path }) => {
  //     profilePath = profile_path
  //       ? `https://image.tmdb.org/t/p/w300${profile_path}`
  //       : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';
  //   });
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
