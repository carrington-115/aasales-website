import React from "react";
import styled from "styled-components";
import { MdOutlineCall } from "react-icons/md";

const ServiceComponent = ({
  imageLink,
  textTitle,
  textParagraph,
  imagePosition,
}) => {
  return (
    <Container position={imagePosition}>
      <section className="image">
        <img src={imageLink} alt="" />
      </section>
      <section className="text">
        <h1>{textTitle}</h1>
        <p>{textParagraph}</p>{" "}
        <section className="btns">
          <button>
            <MdOutlineCall /> Contact us
          </button>
          <button className="learn-more-btn">Learn more</button>
        </section>
      </section>
    </Container>
  );
};

export default ServiceComponent;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  @media (min-width: 320px) and (max-width: 599px) {
    flex-direction: column;
  }

  .image {
    width: 40%;
    order: ${(props) => (props.position ? "1" : "2")};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (min-width: 320px) and (max-width: 599px) {
      width: 80%;
      order: 2;
      align-self: ${(props) => (props.position ? "flex-end" : "flex-start")};
      margin-top: 0.5cm;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    width: 45%;
    order: ${(props) => (props.position ? "0" : "2")};
    margin: ${(props) =>
      props.position ? "0px 0px 0px 50px" : "0px 50px 0px 0px"};
    @media (min-width: 320px) and (max-width: 599px) {
      width: 90%;
      align-items: center;
      order: 1;
      margin: 0;
      padding: 0px 15px;
    }

    h1 {
      color: #18004a;
      font-family: Roboto;
      font-size: 36px;
      font-style: normal;
      font-weight: bold;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 24px;
      }
    }
    p {
      overflow: hidden;
      color: #000;
      text-overflow: ellipsis;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 14px;
      }
    }
    .btns {
      display: flex;
      width: 80%;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5cm;
      @media (min-width: 320px) and (max-width: 599px) {
        margin: 0;
        width: 100%;
      }
      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 35px;
        gap: 17px;
        color: white;
        font-family: Roboto Serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        border-radius: 100px;
        background-color: #18004a;
        border: 2px solid transparent;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 16px;
          padding: 7px 20px;
        }

        svg {
          width: 36px;
          height: 36px;
          @media (min-width: 320px) and (max-width: 599px) {
            width: 26px;
            height: 26px;
          }
        }
        &:hover {
          box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
        }
      }
      .learn-more-btn {
        border-color: #18004a;
        background-color: transparent;
        color: #18004a;
        &:hover {
          box-shadow: none;
          color: white;
          background-color: #18004a;
        }
      }
    }
  }
`;
