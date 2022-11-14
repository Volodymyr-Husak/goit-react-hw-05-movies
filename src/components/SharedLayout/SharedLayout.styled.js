import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkEl = styled(NavLink)`
  padding: 8px 16px;
  border: rgb(101, 112, 161) solid 5px;
  border-radius: 10px;

  text-decoration: none;
  color: rgb(101, 112, 161);
  font-weight: 500;

  &.active {
    color: rgb(65, 91, 207);
    border: rgb(65, 91, 207) solid 5px;
    background-color: rgb(158, 173, 187);
  }
`;
