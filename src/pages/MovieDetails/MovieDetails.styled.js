import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkEl = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: blue;
  font-weight: 500;

  &.active {
    color: rgb(180, 72, 30);
    background-color: rgb(172, 142, 103);
  }
  &:hover {
    color: rgb(180, 72, 30);
    background-color: rgb(172, 142, 103);
  }
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  margin: 10px 0;
  border-radius: 4px;
  color: blue;
  font-size: 500;
  &:hover {
    color: rgb(180, 72, 30);
    background-color: rgb(172, 142, 103);
  }
`;
