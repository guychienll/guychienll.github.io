import React from "react";
import styled from "styled-components";
import selfie from "../images/selfie.jpg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  img,
  h1,
  p {
    margin-top: 25px;
  }
  img {
    max-width: 280px;
    transition: all ease 0.5s;
  }
  h1 {
    font-size: 3rem;
    font-family: "Amatic SC", cursive;
  }
  p {
    transition: all ease 0.5s;
    font-family: "Amatic SC", cursive;
    max-width: 280px;
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    img {
      max-width: 450px;
    }
    p {
      max-width: 350px;
    }
  }
`;

const About: React.FC = () => {
  return (
    <Wrapper>
      <img src={selfie} alt="selfie.png" />
      <h1>About me</h1>
      <p>
        I'm guy .I am a person who is curious about everything and likes magic
        and programming. I graduated from Fu Jen Catholic University Information
        Management, and I worked as a software engineer at titansoft. Here you
        can see my portfolio. If you have any feedback, please feel welcome Tell
        me, this allows me to make more progress and improve.
      </p>
    </Wrapper>
  );
};
export default About;
