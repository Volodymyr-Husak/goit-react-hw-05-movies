import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

import { getMovieById } from '../../helpers/getMovieById';
import { getGenres } from 'helpers/getGenres';
import css from './MovieDetails.module.css';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const MovieDetails = () => {
  const [isShowCast, setShowCast] = useState(false);
  const [isShowReviews, setShowReviews] = useState(false);

  const { movieId } = useParams();
  // console.log(movieId);
  const {
    id,
    poster_path,
    original_title,
    overview,
    genre_ids,
    release_date,
    vote_average,
  } = getMovieById(Number(movieId));
  // console.log('GET', getMovieById(Number(movieId)));

  const genres = getGenres(genre_ids);
  // console.log(genre_ids);

  const year = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  // console.log(vote_average * 10);
  // Math.round(1.2);

  const onClickLink = e => {
    const nameLink = e.currentTarget.text;
    switch (nameLink) {
      case 'Cast':
        setShowReviews(false);
        setShowCast(prevCast => !prevCast);
        break;
      case 'Reviews':
        setShowCast(false);
        setShowReviews(prevRev => !prevRev);
        break;
      default:
        console.log('Sorry, we are out of ' + nameLink + '.');
    }
  };

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
      <p>Additional information</p>
      <ul>
        <li>
          <Link
            to={`/movies/${id}/cast`}
            className={css.movieDetails__link}
            onClick={onClickLink}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${id}/reviews`}
            className={css.movieDetails__link}
            onClick={onClickLink}
          >
            Reviews
          </Link>
        </li>
      </ul>
      {isShowCast && <Cast />}
      {isShowReviews && <Reviews />}
    </div>
  );
};
