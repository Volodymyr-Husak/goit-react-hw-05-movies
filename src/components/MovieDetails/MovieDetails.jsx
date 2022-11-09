import { useParams } from 'react-router-dom';
import { getMovieById } from '../../helpers/getMovieById';
import { getGenres } from 'helpers/getGenres';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  // console.log(movieId);
  const {
    poster_path,
    original_title,
    overview,
    genre_ids,
    release_date,
    vote_average,
  } = getMovieById(Number(movieId));
  console.log('GET', getMovieById(Number(movieId)));

  const genres = getGenres(genre_ids);
  // console.log(genre_ids);

  const year = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  // console.log(vote_average * 10);
  // Math.round(1.2);

  return (
    <div className={css.movieDetails}>
      <button className="movieDetails__btn">go back</button>
      <div className={css.movieDetails__container}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
        </div>
        <div>
          <h2>
            {original_title} ({year})
          </h2>
          <p>User score {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>
    </div>
  );
};
