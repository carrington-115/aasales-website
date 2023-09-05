import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineTranslate } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner-header">
        <Link className="logo" to="/">
          <img src="/images/utilities/logos/logo.svg" alt="" />
        </Link>
        <nav className="desktop-navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link className="contact" to="/contact">
            Contact
          </Link>
          <button className="translate-btn">
            <HiOutlineTranslate style={{ width: "30px", height: "30px" }} />
            <RiArrowDropDownLine style={{ width: "30px", height: "30px" }} />
          </button>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  .inner-header {
    width: 80%;
    display: flex;
    align-items: center;
    gap: 100px;
    margin: 65px 0px;
    border: 1px solid white;
    .desktop-navigation {
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
        background: #fff;
        color: #18004a;
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
        }
      }
    }
  }
`;

const Link = styled(NavLink)`
  color: #fff;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 26.998px;
  text-decoration: none;
  &:hover {
    color: #14dc78;
  }
`;
