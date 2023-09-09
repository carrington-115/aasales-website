import React from "react";
import styled from "styled-components";

const PopularItem = ({ title, context }) => {
  return (
    <PopularContainer>
      <div className="title-separator">
        <h1>{title}</h1>
      </div>
      <div className="content">
        {context.map(({ imageLocation, title, serviceContent }) => (
          <div className="item">
            <img src={imageLocation} alt="" />
            <h2>{title}</h2>
            <p>{serviceContent}</p>
            <button>Learn more</button>
          </div>
        ))}
      </div>
    </PopularContainer>
  );
};

export default PopularItem;

const PopularContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1cm 0;
  .title-separator {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    margin-bottom: 20px;
    h1 {
      color: #000;
      font-family: Roboto;
      font-size: 64px;
      font-style: normal;
      font-weight: bold;
      text-align: center;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 30px;
        margin-top: 0.5cm;
      }
    }
  }
  .content {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 21px;
    justify-content: center;
    align-items: start;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 80vw;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    .item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      font-family: Roboto;
      gap: 15px;
      padding: 20px;
      border-radius: 20px;
      @media (min-width: 320px) and (max-width: 599px) {
        padding: 10px 5px;
        border-radius: 5px;
        gap: 5px;
      }
      cursor: pointer;
      &:hover {
        background-color: white;
        box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
      }
      img {
        width: 220px;
        height: auto;
        border-radius: 20px;
        @media (min-width: 320px) and (max-width: 599px) {
          width: 100%;
        }
      }
      h2 {
        color: #000;
        font-family: Roboto;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 17px;
        }
      }
      p {
        color: #000;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 11px;
          line-height: 15px;
        }
      }
      button {
        display: flex;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: white;
        background-color: #18004a;
        border: 1px solid transparent;
        border-radius: 0;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 11px;
        }
        &:hover {
          border-color: #18004a;
          color: #18004a;
          background-color: transparent;
        }
      }
    }
  }
`;
