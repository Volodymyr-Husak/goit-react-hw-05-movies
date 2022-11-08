// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { saveInLS } from '../../helpers/storage';
// import fetchPopularMovies from '../../helpers/fetchPopularMovies';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const API_KEY = '301d018a3b09052968e9ce18b1793bab';
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';

  const fetchPopularMovies = () => {
    try {
      fetch(`${BASE_URL}${API_KEY}&page=${1}`)
        .then(res => res.json())
        .then(obj => {
          console.log(obj);
          saveInLS('PopularMovie', obj.results);
          setPopularMovies(obj.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    // <Link></Link>
    <>
      <h2>Trending today</h2>
      <ul>
        {popularMovies.map(({ id, original_title }) => {
          // return <div key={id}>{original_title}</div>;
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
      </ul>

      {/* <Link to={`${product.id}`}>
        <img src="https://via.placeholder.com/200x100" alt="" />
        <ProductName>{product.name}</ProductName>
      </Link> */}
      {/* <Link to="/movies/:movieId">Home</Link> */}
      {/* {this.props.arrImage.map(({ id, webformatURL, largeImageURL, tags}) => {
          return (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onClickImage={this.props.onClickImage}
            />
          );
        })} */}
    </>
  );
};
