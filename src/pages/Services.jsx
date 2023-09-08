import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import styled from "styled-components";

function Services() {
  return (
    <Container>
      <TopHeader />
    </Container>
  );
}

const TopHeader = () => {
  return (
    <HeaderContainer>
      <img src="/images/pages/products/header.png" alt="" />
      <div className="backdrop" />
      <div className="text-content">
        <h3>Check out our</h3>
        <h1>Incredible</h1>
        <h2>Services</h2>
      </div>
      <div className="icon">
        <MdOutlineArrowDropDown />
      </div>
    </HeaderContainer>
  );
};

export default Services;

const Container = styled.div``;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  img {
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .backdrop {
    position: absolute;
    z-index: 3;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(
      --Slider-front-color,
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.38) 23.43%,
        rgba(0, 0, 0, 0.2) 60.11%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        0deg,
        rgba(24, 0, 74, 0.3) 8.81%,
        rgba(33, 5, 93, 0.3) 37.72%,
        rgba(53, 11, 142, 0.3) 69.07%,
        rgba(84, 20, 220, 0.3) 100%
      )
    );
  }
  .text-content {
    position: absolute;
    bottom: 100px;
    left: 100px;
    z-index: 5;
    line-height: 90px;
    @media (min-width: 320px) and (max-width: 599px) {
      left: 10%;
      bottom: 20%;
      line-height: 50px;
    }
    h3 {
      color: #14dc78;
      font-family: Qwigley;
      font-size: 100px;
      font-style: normal;
      font-weight: 400;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 50px;
      }
    }
    h1 {
      color: #18004a;
      font-family: Roboto;
      font-size: 110px;
      font-style: normal;
      font-weight: 500;
      padding: 10px 20px;
      background-color: white;
      border-radius: 10px;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 50px;
      }
    }
    h2 {
      color: #fff;
      font-family: Roboto;
      font-size: 100px;
      font-style: normal;
      font-weight: 500;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 50px;
      }
    }
  }
  .icon {
    position: absolute;
    z-index: 5;
    background-color: white;
    bottom: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    cursor: pointer;
    svg {
      width: 48px;
      height: 48px;
      color: #18004a;
    }
    &:hover {
      background-color: #cdcdcd;
    }
  }
`;
