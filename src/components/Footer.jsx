import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <section className="inner-content">
        <section className="section-1">
          <div className="logo">
            <img src="/images/utilities/logos/footer-logo.svg" alt="" />
          </div>
          <p>
            "We aim to exceed customer expectations by delivering reliable and
            efficient logistics services while fostering sustainability and
            growth for our clients and partners worldwide."
          </p>
        </section>
        <section className="section-2">
          <h1>Useful Links</h1>
          <nav>
            <FooterLink to="/">
              Home <GoLinkExternal />
            </FooterLink>
            <FooterLink to="/">
              About us <GoLinkExternal />
            </FooterLink>
            <FooterLink to="/">
              Our Services <GoLinkExternal />
            </FooterLink>
            <FooterLink to="/">
              Our Products <GoLinkExternal />
            </FooterLink>
            <FooterLink to="/">
              Contact us <GoLinkExternal />
            </FooterLink>
          </nav>
        </section>
        <section className="section-3">
          <h1>Our Address</h1>
          <div className="address">
            <MdLocationPin />
            <p>
              173/35 SECOND FLOOR, <br /> NADWA BUILDING, <br /> B.N.VERMA ROAD,{" "}
              <br /> NEAR UNION BANK OF INDIA, <br /> AMINABAD, LUCKNOW- 226018{" "}
              <br /> UTTAR PRADESH, INDIA.
            </p>
          </div>
          <div className="contact">
            <MdCall />
            <p>+91 9415016897 / 8799593547</p>
          </div>
          <div className="email">
            <IoMdMail />
            <p>support@aasalesimpex.com</p>
          </div>
        </section>
      </section>
      <p>Copyrights&copy;AASALES-2023 All Rights Reserved</p>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  padding: 70px 0px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: white;
  }
  @media (min-width: 320px) and (max-width: 599px) {
    gap: 100px;
  }
  .inner-content {
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: flex-start;
    @media (min-width: 320px) and (max-width: 599px) {
      flex-direction: column;
      width: 80%;
      gap: 50px;
      align-items: center;
    }
  }
  .section-1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 35%;
    gap: px;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 100%;
    }
    .logo {
      width: 80%;

      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      color: #fff;
      font-family: Roboto;
      font-size: 25px;
      font-style: normal;
      font-weight: normal;
      line-height: 38px;
    }
  }
  .section-2 {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 20px;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 80%;
    }

    h1 {
      color: #fff;
      font-family: Roboto;
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      border-bottom: 2px solid white;
      padding: 5px 30px 5px 10px;
    }
    nav {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      gap: 10px;
    }
  }
  .section-3 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 100%;
    }

    h1 {
      color: #fff;
      font-family: Roboto;
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      border-bottom: 2px solid white;
      padding: 5px 30px 5px 10px;
    }
    .address,
    .contact,
    .email {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      svg {
        width: 36px;
        height: 36px;
        color: white;
      }
      p {
        color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        text-align: left;
        font-weight: 600;
        line-height: 8px;
        @media (min-width: 320px) and (max-width: 599px) {
          width: 80%;
        }
      }
    }
    .contact,
    .email {
      align-items: center;
    }
    .address {
      p {
        line-height: 30px;
      }
    }
  }
`;

const FooterLink = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;
