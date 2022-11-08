import { useParams } from 'react-router-dom';
// import { loadWithLS } from '../../helpers/storage';
import { getMovieById } from '../../helpers/getMovieById';

export const MovieDetails = () => {
  //   const movies = loadWithLS('PopularMovie');
  //   console.log(movies);
  //   const { id } = useParams();
  const { movieId } = useParams();
  console.log(movieId);
  const { id, poster_path } = getMovieById(Number(movieId));
  console.log('GET', getMovieById(Number(movieId)));
  //   const product = getProductById(id);
  return (
    <div>
      {id}
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
    </div>
  );
};
