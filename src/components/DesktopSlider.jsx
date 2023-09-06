import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 500,
  autoplay: true,
  arrows: true,
  fade: true,
};

function DesktopSlider() {
  return (
    <CarouselContainer>
      <CarouselSlider {...settings}>
        <div className="slide">
          <img src="/images/utilities/slider/slide1.png" alt="" />
          <div className="backdrop" />
          <div className="slider-text">
            <h2>Welcome to</h2>
            <h1>AA SALES</h1>
            <p>Imports and Exports</p>
            <div className="btns">
              <button>Contact us</button>
              <button className="outlined">Learn more</button>
            </div>
          </div>
        </div>
        <div className="slide">
          <img src="/images/utilities/slider/slide2.png" alt="" />
          <div className="backdrop" />
          <div className="slider-text">
            <p>We Offer</p>
            <h2>
              Best
              <br />
              SHIPMENTS
              <br />
              Services
            </h2>
          </div>
        </div>
        <div className="slide">
          <img src="/images/utilities/slider/slide3.png" alt="" />
          <div className="backdrop" />
          <div className="slider-text">
            <p>We Offer</p>
            <h2>
              Best
              <br />
              Warehousing
              <br />
              Services
            </h2>
          </div>
        </div>
        <div className="slide">
          <img src="/images/utilities/slider/slide4.png" alt="" />
          <div className="backdrop" />
          <div className="slider-text">
            <p>We Do</p>
            <h2>
              Imports and
              <br />
              Exports
            </h2>
            <div className="btns">
              <button>Contact us</button>
            </div>
          </div>
        </div>
      </CarouselSlider>
    </CarouselContainer>
  );
}

export default DesktopSlider;

const CarouselContainer = styled.section``;

const CarouselSlider = styled(Slider)`
  width: 100vw;
  height: 100vh;
  .slick-dots li button:before {
    display: none;
  }
  .slick-prev,
  .slick-next {
    display: none;
  }
  .backdrop {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 3;
    background: linear-gradient(
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
      );
  }
  .slide {
    width: 100vw;
    height: 100vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .slider-text {
      position: absolute;
      z-index: 5;
      display: flex;
      bottom: 50px;
      left: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      @media (min-width: 320px) and (max-width: 599px) {
        left: 30px;
        bottom: 50px;
        gap: 10px;
      }
      h1,
      h2 {
        color: #fff;
        font-family: Roboto Serif;
        font-size: 90px;
        font-style: normal;
        font-weight: 700;
        line-height: 2cm;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 60px;
          line-height: 1.5cm;
        }
      }
      h1 {
        padding: 10px 20px;
        background-color: white;
        color: #18004a;
        margin-top: 10px;
        border-radius: 10px;
      }
      p {
        color: #14dc78;
        font-family: Qwigley;
        font-size: 80px;
        font-style: normal;
        line-height: auto;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 60px;
          line-height: 1.5cm;
        }
      }
      .btns {
        display: flex;
        width: 100%;
        justify-content: space-between;
        button {
          color: #18004a;
          font-family: Roboto Serif;
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          padding: 10px 25px;
          border: 2px solid transparent;
          background-color: white;
          transition: all 0.01s 250ms cubic-bezier(0.93, 0.21, 0.82, 0.62);
          &:hover {
            background-color: transparent;
            border-color: white;
            color: white;
          }
          &:focus {
            outline: none;
          }
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 20px;
            gap: 10px;
          }
        }
        .outlined {
          color: white;
          border-color: white;
          background-color: transparent;
          font-family: Roboto Serif;
          &:hover {
            background-color: white;
            color: #18004a;
          }
        }
      }
    }
  }
`;
