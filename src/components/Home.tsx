import React from "react";
import styled from "styled-components";
import todolistImg from "../images/todolist.jpg";
import sixtySecondGaming from "../images/sixty-second-gaming.jpg";
import aqiIndexService from "../images/aqi-index-service.jpg";
import tictactoe from "../images/tictactoe.jpg";
import muses from "../images/muses.jpg";
import canvas from "../images/canvas.jpg";
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
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
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
    transition: all 0.5s ease;
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
    box-shadow: 0 0 10px 2px #bbb;
  }
`;

const works = [
  {
    link: "https://guychienll.github.io/sixty-seconds-gaming/",
    imgSrc: sixtySecondGaming,
    name: "sixtySecondGaming.jpg",
    orderId: 3,
  },
  {
    link: "https://muses-6c8bb.web.app/menu",
    imgSrc: muses,
    name: "muses.jpg",
    orderId: 2,
  },
  {
    link: "https://guychienll.github.io/canvas",
    imgSrc: canvas,
    name: "canvas.jpg",
    orderId: 1,
  },
];
const works2 = [
  {
    link: "https://guychienll.github.io/tictactoe/",
    imgSrc: tictactoe,
    name: "tictactoe.jpg",
    orderId: 1,
  },
  {
    link: "https://guychienll.github.io/aqi-index-service/",
    imgSrc: aqiIndexService,
    name: "aqiIndexService.jpg",
    orderId: 3,
  },
  {
    link: "https://guychienll.github.io/todolist",
    imgSrc: todolistImg,
    name: "todolist.jpg",
    orderId: 2,
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
