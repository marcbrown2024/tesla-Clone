import React from "react";
import Fade from 'react-reveal/Fade';
import styled from "styled-components";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      <ButtonGroup>
        <Fade bottom>
          <Buttons>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && (
              <RightButton>{props.rightBtnText}</RightButton>
            )}
          </Buttons>
        </Fade>
        <DownArrow src="images/down-arrow.svg" alt="down arrow" />
      </ButtonGroup>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  height: 40px;
  width: 256px;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: rgba(23, 26, 32, 1); 
    opacity: 1; 
  }
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    opacity: 1; 
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
