import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineTranslate } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [scrollState, setScrollState] = useState(true);
  function scrollCheck() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 200) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  }
  window.addEventListener("scroll", scrollCheck);

  useEffect(() => {});

  return (
    <HeaderContainer show={scrollState}>
      <div className="inner-header" show={scrollState}>
        <Link className="logo" to="/">
          {scrollState ? (
            <img src="/images/utilities/logos/tab-logo.svg" alt="" />
          ) : (
            <img src="/images/utilities/logos/logo.svg" alt="" />
          )}
        </Link>
        <nav className="desktop-navigation" show={scrollState}>
          <Link show={scrollState} to="/">
            Home
          </Link>
          <Link show={scrollState} to="/about">
            About
          </Link>
          <Link show={scrollState} to="/services">
            Services
          </Link>
          <Link show={scrollState} to="/products">
            Products
          </Link>
          <Link show={scrollState} className="contact" to="/contact">
            Contact
          </Link>
          <button className="translate-btn">
            <HiOutlineTranslate
              color={scrollState ? "white" : "#18004a"}
              style={{ width: "30px", height: "30px" }}
            />
            <RiArrowDropDownLine
              color={scrollState ? "white" : "#18004a"}
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </nav>
        <div className="mobile-menu">
          <div className="translate-icon">
            <HiOutlineTranslate
              color={scrollState ? "white" : "#18004a"}
              style={{ width: "30px", height: "30px" }}
            />
            <RiArrowDropDownLine
              color={scrollState ? "white" : "#18004a"}
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div className="ham-menu-icon">
            <AiOutlineMenu color={scrollState ? "#18004a" : "white"} />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: ${(props) => (props.show ? "fixed" : "relative")};
  top: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .inner-header {
    width: 80%;
    display: flex;
    align-items: center;
    gap: 100px;
    margin: ${(props) => (props.show ? "50px 0px" : "65px 0px")};
    background-color: ${(props) => (props.show ? "white" : "none")};
    padding: ${(props) => (props.show ? "10px 50px" : "0")};
    border-radius: ${(props) => (props.show ? "50px" : "0")};
    box-shadow: ${(props) =>
      props.show ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" : "none"};
    .desktop-navigation {
      @media (min-width: 320px) and (max-width: 599px) {
        display: none;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      gap: 36px;
      .contact,
      .translate-btn {
        display: flex;
        padding: 10px 30px;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 50px;
        background-color: ${(props) => (props.show ? "#18004a" : "white")};
        color: ${(props) => (props.show ? "white" : "#18004a")};
        &:hover {
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
      }
      .translate-btn {
        flex-direction: row;
        margin-left: 20px;
      }
      .mobile-menu {
        @media (min-width: 600px) {
          display: none;
        }
      }
      .logo {
        width: 120px;
        height: 70.766px;

        img {
          width: 100%;
          height: 100%;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 599px) {
    .inner-header {
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      .mobile-menu {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        .translate-icon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: ${(props) => (props.show ? "#18004a" : "white")};
          padding: 6px 12px;
          border-radius: 30px;
          &:hover {
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }
          svg {
            width: 16px;
            height: 16px;
          }
        }
        .ham-menu-icon {
          width: 48px;
          svg {
            width: 100%;
            height: 100%;
          }
        }
        .translate-icon,
        .ham-menu-icon {
          cursor: pointer;
        }
      }
      .logo {
        width: 75px;
        height: 44.229px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

const Link = styled(NavLink)`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 26.998px;
  text-decoration: none;
  color: ${(props) => (props.show ? "#18004a" : "white")};

  &:hover {
    color: #14dc78;
  }
`;
