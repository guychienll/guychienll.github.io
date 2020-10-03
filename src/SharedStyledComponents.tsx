import styled from "styled-components";

export const CornerButton = styled.button`
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
