import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineTranslate } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [scrollState, setScrollState] = useState(false);
  const [menuState, setMenuState] = useState(false);

  function scrollCheck() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 200) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  }
  window.addEventListener("scroll", scrollCheck);

  function handleMenuClicked() {
    setMenuState(!menuState);
  }

  useEffect(() => {
    if (scrollState === true) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
    if (menuState === true && scrollState === false) {
      setScrollState(true);
    }
  }, [scrollState, menuState]);

  return (
    <HeaderContainer show={scrollState} showMenu={menuState}>
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
          <div className="ham-menu-icon" onClick={handleMenuClicked}>
            {menuState ? (
              <AiOutlineClose color={scrollState ? "#18004a" : "white"} />
            ) : (
              <AiOutlineMenu color={scrollState ? "#18004a" : "white"} />
            )}
          </div>
        </div>
      </div>
      <div showMenu={menuState} className="mobile-hamburger">
        <Link t="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 20;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .mobile-hamburger {
    @media (min-width: 600px) {
      display: none;
    }
  }
  .inner-header {
    width: 80%;
    display: flex;
    align-items: center;
    z-index: 10;
    gap: 100px;
    margin: ${(props) => (props.show ? "50px 0px" : "65px 0px")};
    background-color: ${(props) => (props.show ? "white" : "none")};
    padding: ${(props) => (props.show ? "10px 50px" : "0")};
    border-radius: ${(props) => (props.show ? "50px" : "0")};
    box-shadow: ${(props) =>
      props.show ? "0px -4px 4px 0px rgba(0, 0, 0, 0.25)" : "none"};
    .mobile-menu {
      @media (min-width: 600px) {
        display: none;
      }
    }
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
          position: relative;
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
    .mobile-hamburger {
      position: fixed;
      top: 90px;
      width: 88%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      padding-top: 1.35cm;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      height: 60vh;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      gap: 50px;
      transform: ${(props) => (props.showMenu ? "scaleY(100%)" : "scaleY(0%)")};
      transition: all 0.1s 250ms cubic-bezier(1, 0.3, 0.96, 0.7);
      a {
        color: #18004a;
        font-family: Roboto;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: 26.998px;
        &:hover {
          color: #14dc78;
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
