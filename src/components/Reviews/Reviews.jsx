import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../helpers/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  // const API_KEY = '301d018a3b09052968e9ce18b1793bab';

  // const fetchReviews = id => {
  //   try {
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  //     )
  //       .then(res => res.json())
  //       .then(obj => {
  //         // console.log(obj.results);
  //         setReviews(obj.results);
  //         return obj.cast;
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
