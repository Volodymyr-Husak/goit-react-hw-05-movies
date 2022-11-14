import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { Section } from 'components/Section/Section';
import { LinkEl, Button } from './MovieDetails.styled';
// import { getMovieById } from '../../helpers/getMovieById';
// import { getGenres } from '../../helpers/getGenres';
import * as api from '../../helpers/api';
import css from './MovieDetails.module.css';
// import {Cast from} 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));
const MovieDetails = () => {
  const [isShowCast, setShowCast] = useState(false);
  const [isShowReviews, setShowReviews] = useState(false);
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    api.getMovieId(movieId).then(resp => {
      setMovie(resp);
    });
  }, [movieId]);

  // const {
  //   id,
  //   poster_path,
  //   original_title,
  //   overview,
  //   genre_ids,
  // release_date,
  // vote_average,
  // } = getMovieById(Number(movieId));

  // const genres = getGenres(genre_ids);
  const genres = arr => {
    if (arr === null) return;
    return arr?.map(genre => genre.name).join(', ');
  };

  // const year = release_date.slice(0, 4);
  const year = score => {
    return score?.slice(0, 4);
  };
  // const userScore = Math.round(vote_average * 10);
  const userScore = score => {
    return Math.round(score * 10);
  };

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

  const onClickGoBack = e => {
    e.preventDefault();
    const backLink = location.state?.from ?? '/';
    navigate(backLink);
  };

  return (
    <Section className={css.movieDetails}>
      {/* <Link to={location.state.from}>Go back</Link> */}
      <Button onClick={onClickGoBack} className="movieDetails__btn">
        Go back
      </Button>
      <div className={css.movieDetails__container}>
        <div className={css.movieDetails__imgContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div>
          <h2>
            {movie.original_title} ({year(movie.release_date)})
          </h2>
          <p>User score {userScore(movie.vote_average)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{genres(movie.genres)}</p>
        </div>
      </div>
      <p>Additional information</p>
      <ul className={css.movieDetails__listLink}>
        <li className={css.movieDetails__itemLink}>
          <LinkEl
            to={`/movies/${movie.id}/cast`}
            state={location.state}
            className={css.movieDetails__link}
            onClick={onClickLink}
          >
            Cast
          </LinkEl>
        </li>
        <li className={css.movieDetails__itemLink}>
          <LinkEl
            to={`/movies/${movie.id}/reviews`}
            state={location.state}
            className={css.movieDetails__link}
            onClick={onClickLink}
          >
            Reviews
          </LinkEl>
        </li>
      </ul>
      {isShowCast && <Cast />}
      {isShowReviews && <Reviews />}
    </Section>
  );
};

export default MovieDetails;
