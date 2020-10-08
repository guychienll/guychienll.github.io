import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import styled from "styled-components";
import { CornerButton } from "./SharedStyledComponents";
import { Links } from "./Links";

const NavgationArea = styled.nav`
  width: 100%;
  height: 120px;
  background: #fff;
  z-index: 100;
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
  max-width: 960px;
  min-height: calc(100vh - 120px);
  padding-top: 120px;
  display: flex;
  justify-content: center;
  margin: 0 auto 0 auto;
`;

const App: React.FC = () => {
  const [isHambergurOn, setIsHambergurOn] = useState(false);
  const isHambergurOnHandler = (state = !isHambergurOn) => {
    setIsHambergurOn(state);
  };
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
