import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkEl = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
// const Wrapper = styled.розділ`
//   padding: 4em;
//   фон: papayawhip;
// `;
// export const Logo = styled.p`
//   font-weight: 700;
//   margin: 0;
// `;
