import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 320px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const Coulumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 0 10px;
  @media screen and (max-width: 768px) {
    min-width: 380px;
  }
`;

const Work = styled.a<{ href: string }>`
  position: relative;
  margin: 10px 0 10px 0;
  img {
    box-sizing: border-box;
    display: block;
    max-width: 280px;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Amatic SC", cursive;
    font-size: 2rem;
    color: #000;
  }
  :hover {
    .overlay {
      opacity: 0.7;
    }
  }
`;

const works = [
  {
    link: "",
    imgSrc: "https://c.tadst.com/gfx/600x337/full-moon.png?1",
    name: "moon.jpg",
    orderId: 2,
  },
  {
    link: "",
    imgSrc:
      "https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg",
    name: "moon.jpg",
    orderId: 1,
  },
  {
    link: "",
    imgSrc: "https://www.w3schools.com/css/paris.jpg",
    name: "moon.jpg",
    orderId: 3,
  },
];
const works2 = [
  {
    link: "",
    imgSrc: "https://c.tadst.com/gfx/600x337/full-moon.png?1",
    name: "moon.jpg",
    orderId: 1,
  },
  {
    link: "",
    imgSrc:
      "https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg",
    name: "moon.jpg",
    orderId: 2,
  },
  {
    link: "",
    imgSrc:
      "https://pyxis.nymag.com/v1/imgs/a18/a96/4cab53acf59286c159442a729cd05dd95c-7-pinkmoon.rsquare.w700.jpg",
    name: "moon.jpg",
    orderId: 3,
  },
];

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Coulumn>
        {works
          .sort((a, b) => {
            return a.orderId - b.orderId;
          })
          .map((work) => {
            return (
              <Work href={work.link}>
                <img src={work.imgSrc} alt={work.name} />
                <div className="overlay">Click Me</div>
              </Work>
            );
          })}
      </Coulumn>
      <Coulumn>
        {works2
          .sort((a, b) => {
            return a.orderId - b.orderId;
          })
          .map((work) => {
            return (
              <Work href={work.link}>
                <img src={work.imgSrc} alt={work.name} />
                <div className="overlay">Click Me</div>
              </Work>
            );
          })}
      </Coulumn>
    </Wrapper>
  );
};
export default Home;
