// import { Outlet } from "react-router-dom";
// import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import { Link, Outlet} from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
