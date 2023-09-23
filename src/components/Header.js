import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {selectCars} from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);
  const cars = useSelector(selectCars);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Define the scroll threshold (the point where you want the background to change)
      const scrollThreshold = 400; // Adjust this value as needed

      // Check if the user has scrolled past the threshold
      window.scrollY > scrollThreshold
        ? setChangeBackground(true)
        : setChangeBackground(false);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container changeBackground={changeBackground}>
      <a href="#">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href="#">{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerMenuStatus(true)}></CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerMenuStatus}>
        <CloseWrapper>
          <CustomCloseBtn onClick={() => setBurgerMenuStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
            <li key={index} ><a href="#">{car}</a></li>
          ))}
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Used Inventory</a></li>
          <li><a href="">Trade-In</a></li>
          <li><a href="">Cybertruck</a></li>
          <li><a href="">Roadaster</a></li>
          <li><a href="">Semi</a></li>
          <li> <a href="">Charging</a></li>
          <li><a href="">Powerwall</a></li>
          <li><a href="">Commercial Energy</a></li>
          <li><a href="">Utilities</a></li>
          <li><a href="">Test Drive</a></li>
      </BurgerNav>
      <Overlay show={burgerMenuStatus} onClick={() => setBurgerMenuStatus(false)} />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${(props) =>
    props.changeBackground ? "rgba(255, 255, 255, 0.65)" : "transparent"};
  transition: background-color 0.3s ease-in-out;
  img {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px), (max-width: 968px), (max-width: 568px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.6s ease-in-out;
  li {
    width: 100%;
    padding: 12px 0;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CustomCloseBtn = styled(CloseIcon)`
  cursor: pointer;
  position: relative;
  left: 230px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99; 
  display: ${(props) => (props.show ? "block" : "none")};
`;

