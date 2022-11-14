// import { Outlet } from "react-router-dom";
// import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { LinkEl } from './SharedLayout.styled';
import css from './SharedLayout.module.css';
export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.navigation__list}>
            <li className={css.navigation__item}>
              <LinkEl to="/">Home</LinkEl>
            </li>
            <li>
              <LinkEl to="/movies">Movies</LinkEl>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
