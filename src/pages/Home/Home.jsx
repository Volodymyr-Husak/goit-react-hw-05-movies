// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
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
          {popularMovies.map(({ id }) => {
              return <div key={id}>{ id }</div>
          })}
          
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
