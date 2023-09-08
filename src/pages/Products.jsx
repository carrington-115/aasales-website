import React from "react";
import styled from "styled-components";

function Products() {
  return (
    <Container>
      <PageHeader></PageHeader>
    </Container>
  );
}

const PageHeader = () => {
  return (
    <HeaderContainer>
      <img src="/images/pages/products/header.png" alt="" />
      <div className="text">
        <h3>Check out our</h3>
        <h1>Incredible</h1>
        <h2>Products</h2>
      </div>
    </HeaderContainer>
  );
};

export default Products;

const Container = styled.div``;

const HeaderContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(
    --gradient-1,
    linear-gradient(
      0deg,
      #18004a 8.81%,
      #21055d 37.72%,
      #350b8e 69.07%,
      #5414dc 100%
    )
  );
  img {
    position: absolute;
    width: 40%;
    z-index: 2;
    right: 0;
    bottom: 0;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 70%;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 3;
    bottom: 100px;
    left: 150px;
    line-height: 100px;
    align-items: flex-start;
    @media (min-width: 320px) and (max-width: 599px) {
      bottom: 30%;
      left: 10%;
      line-height: 60px;
    }
    h3 {
      color: #14dc78;
      font-family: Qwigley;
      font-size: 80px;
      font-style: normal;
      font-weight: 400;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 50px;
      }
    }
    h1 {
      color: #18004a;
      font-family: Roboto;
      font-size: 90px;
      font-style: normal;
      font-weight: 500;
      padding: 10px 20px;
      background-color: white;
      border-radius: 10px;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 60px;
      }
    }
    h2 {
      color: #fff;
      font-family: Roboto;
      font-size: 100px;
      font-style: normal;
      font-weight: 500;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 70px;
      }
    }
  }
`;
