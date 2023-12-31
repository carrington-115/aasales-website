import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineTranslate } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [scrollState, setScrollState] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [shadowState, setShadowState] = useState(false);

  function scrollCheck() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 200) {
      setScrollState(true);
      setShadowState(false);
    } else {
      setScrollState(false);
    }
  }
  window.addEventListener("scroll", scrollCheck);

  function handleMenuClicked() {
    setMenuState(!menuState);
  }

  const handleOnSwitchPage = () => {
    setMenuState(false);
    setShadowState(false);
    setScrollState(false);
  };

  useEffect(() => {
    if (scrollState === true) {
      setScrollState(true);
      setShadowState(true);
    } else {
      setScrollState(false);
      setShadowState(false);
    }
    if (menuState === true && scrollState === false) {
      setScrollState(true);
      setShadowState(false);
    }
    if (menuState === true) {
      setShadowState(false);
    }
  }, [scrollState, menuState, shadowState]);

  return (
    <HeaderContainer
      shadow={shadowState}
      show={scrollState}
      showMenu={menuState}
    >
      <div className="inner-header" show={scrollState}>
        <Link onClick={handleOnSwitchPage} className="logo" to="/">
          {scrollState ? (
            <img src="/images/utilities/logos/logo.svg" alt="" />
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
          {/* <button className="translate-btn">
            <HiOutlineTranslate
              color={scrollState ? "#18004a" : "#18004a"}
              style={{ width: "30px", height: "30px" }}
            />
            <RiArrowDropDownLine
              color={scrollState ? "#18004a" : "#18004a"}
              style={{ width: "30px", height: "30px" }}
            />
          </button> */}
        </nav>
        <div className="mobile-menu">
          {/* <div className="translate-icon">
            <HiOutlineTranslate
              color={scrollState ? "#18004a" : "#18004a"}
              style={{ width: "30px", height: "30px" }}
            />
            <RiArrowDropDownLine
              color={scrollState ? "#18004a" : "#18004a"}
              style={{ width: "30px", height: "30px" }}
            />
          </div> */}
          <div className="ham-menu-icon" onClick={handleMenuClicked}>
            {menuState ? (
              <AiOutlineClose color={scrollState ? "white" : "white"} />
            ) : (
              <AiOutlineMenu color={scrollState ? "white" : "white"} />
            )}
          </div>
        </div>
      </div>
      <div showMenu={menuState} className="mobile-hamburger">
        <Link onClick={handleOnSwitchPage} to="/">
          Home
        </Link>
        <Link onClick={handleOnSwitchPage} to="/about">
          About
        </Link>
        <Link onClick={handleOnSwitchPage} to="/services">
          Services
        </Link>
        <Link onClick={handleOnSwitchPage} to="/products">
          Products
        </Link>
        <Link onClick={handleOnSwitchPage} to="/contact">
          Contact
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  overflow-x: hidden;
  position: fixed;
  z-index: 20;
  top: 0;
  display: flex;
  width: 100vw;
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
    margin: ${(props) => (props.show ? "20px 0px" : "30px 0px")};
    background-color: ${(props) => (props.show ? "#18004a" : "none")};
    padding: ${(props) => (props.show ? "10px 50px" : "0")};
    border-radius: ${(props) => (props.show ? "50px" : "0")};
    box-shadow: ${(props) =>
      props.show ? "0px -4px 4px 0px rgba(0, 0, 0, 0.25)" : "none"};
    box-shadow: ${(props) =>
      props.shadow ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" : "none"};
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
        background-color: ${(props) => (props.show ? "white" : "white")};
        color: ${(props) => (props.show ? "#18004a" : "#18004a")};
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
      overflow-x: hidden;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      width: 80%;

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
          background-color: ${(props) => (props.show ? "white" : "white")};
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
          @media (min-width: 320px) and (max-width: 599px) {
            width: 36px;
            height: 36px;
            svg {
              width: 100%;
              height: 100%;
            }
          }

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
        @media (min-width: 320px) and (max-width: 599px) {
          width: 80px;
          height: 35px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .mobile-hamburger {
      position: fixed;
      overflow-x: hidden;
      top: 55px;
      width: 89vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #18004a;
      padding-top: 1.35cm;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      height: 50vh;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      gap: 30px;
      transform: ${(props) => (props.showMenu ? "scaleY(100%)" : "scaleY(0%)")};
      transition: all 0.1s 250ms cubic-bezier(1, 0.3, 0.96, 0.7);
      a {
        color: ${(props) => (props.show ? "white" : "white")};
        font-family: Roboto;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: 26.998px;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 24px;
          line-height: auto;
        }
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
  color: white;
  &:hover {
    color: #14dc78;
  }
`;
