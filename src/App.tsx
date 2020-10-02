import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import styled from "styled-components";

const NavgationArea = styled.nav`
  width: 100%;
  height: 120px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Amatic SC", cursive;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  height: calc(100vh - 120px);
  padding-top: 120px;
  display: flex;
  justify-content: center;
`;

const App: React.FC = () => {
  const [isHambergurOn, setIsHambergurOn] = useState(false);
  const isHambergurOnHandler = (state = !isHambergurOn) => {
    setIsHambergurOn(state);
  };
  return (
    <Router>
      <NavgationArea>
        <Title>Guy Chien</Title>
        {isHambergurOn ? null : (
          <CornerButton
            onClick={() => {
              isHambergurOnHandler();
            }}
          >
            ≡
          </CornerButton>
        )}
        <Links
          isHambergurOn={isHambergurOn}
          toggleHambergur={isHambergurOnHandler}
        />
      </NavgationArea>
      <Container>
        <Switch>
          {routes.map((route) => (
            <Route key={route.key} exact path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

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

const CornerButton = styled.button`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1rem;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
interface IProps {
  isHambergurOn: boolean;
  toggleHambergur: (state?: boolean) => void;
}

const Links: React.FC<IProps> = (props: IProps) => (
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
