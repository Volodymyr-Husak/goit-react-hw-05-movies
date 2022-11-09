import { useParams } from 'react-router-dom';
// import { loadWithLS } from '../../helpers/storage';
import { getMovieById } from '../../helpers/getMovieById';
import { getGenres } from 'helpers/getGenres';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  //   const movies = loadWithLS('PopularMovie');
  //   console.log(movies);
  //   const { id } = useParams();
  const { movieId } = useParams();
  console.log(movieId);
  const { poster_path, original_title, overview, genre_ids } = getMovieById(
    Number(movieId)
  );
  const genres = getGenres(genre_ids);
  console.log(genre_ids);
  console.log('GET', getMovieById(Number(movieId)));
  //   const product = getProductById(id);
  return (
    <div className={css.movieDetails}>
      <button className="movieDetails__btn">go back</button>
      <div className={css.movieDetails__container}>
        <div>
          <img
            className="{css.movieDetails__img}"
            // width="600"
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt=""
          />
        </div>
        <div>
          <h2>{original_title}</h2>
          <p></p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>
    </div>
  );
};
