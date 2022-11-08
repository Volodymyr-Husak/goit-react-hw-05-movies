import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';

// import { useState, useEffect } from 'react';

export const App = () => {
  // const [popularMovies, setPopularMovies] = useState([]);

  // const API_KEY = '301d018a3b09052968e9ce18b1793bab';
  // const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';

  // const fetchPopularMovies = () => {
  //   try {
  //     fetch(`${BASE_URL}${API_KEY}&page=${1}`)
  //       .then(res => res.json())
  //       .then(obj => {
  //         console.log(obj);
  //         setPopularMovies(obj.results);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPopularMovies();
  // }, []);
  return (
    <div
      style={{
        //   height: '100vh',
        //   // display: 'flex',
        //   // justifyContent: 'center',
        //   // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        {/* <SharedLayout/> */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
      {/* <Home></Home> */}

      {/* '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
      '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим
      словом. 
      '/movies/:movieId' – компонент MovieDetails, сторінка з детальною
      інформацією про кінофільм. 
      /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
      /movies/:movieId/reviews – компонент Reviews, інформація про огляди.
      Рендериться на сторінці MovieDetails. */}

      {/*<nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
};
