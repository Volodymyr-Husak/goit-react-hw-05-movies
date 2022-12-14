import { useState, useEffect } from 'react';
import * as api from '../../helpers/api';
import { Trending } from '../../components/Trending/Trending';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    api.fetchPopularMovies().then(resp => {
      console.log(resp.results);
      setPopularMovies(resp.results);
    });
  }, []);

  return (
    <>
      <Trending popularMovies={popularMovies} />
    </>
  );
};
