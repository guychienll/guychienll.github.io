import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "./routes";
import { CornerButton } from "./SharedStyledComponents";

const StyledLinks = styled.ul<{ isHambergurOn: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  li {
    a {
      font-size: 1.5rem;
      padding: 10px;
      text-decoration: none;
      &:visited {
        color: black;
      }
    }
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    top: ${(props) => (props.isHambergurOn ? 0 : "-100%")};
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #eee;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      padding: 10px;
    }
    transition: top 0.7s;
  }
`;

interface IProps {
  isHambergurOn: boolean;
  toggleHambergur: (state?: boolean) => void;
}

export const Links: React.FC<IProps> = (props: IProps) => (
  <StyledLinks isHambergurOn={props.isHambergurOn}>
    <CornerButton
      onClick={() => {
        props.toggleHambergur();
      }}
    >
      X
    </CornerButton>
    {routes
      .sort((a, b) => {
        return a.orderId - b.orderId;
      })
      .map((route) => (
        <li key={route.key}>
          <Link
            onClick={() => {
              props.toggleHambergur(false);
            }}
            to={route.path}
          >
            {route.key}
          </Link>
        </li>
      ))}
  </StyledLinks>
);
