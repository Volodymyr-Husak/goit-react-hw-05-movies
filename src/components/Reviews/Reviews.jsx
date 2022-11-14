import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../helpers/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    api.fetchReviews(movieId).then(resp => setReviews(resp.results));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don`t have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(({ author, id, url, content }) => (
        <li key={id}>
          <p>
            <strong>{author}</strong>
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
