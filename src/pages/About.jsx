import React from "react";
import styled from "styled-components";
import { MdOutlineCall } from "react-icons/md";
import PopularItem from "../components/PopularItem";
import NumberCounter from "number-counter";
import { useNavigate } from "react-router-dom";

const popularServices = [
  {
    imageLocation: "/images/pages/home/services/service1.png",
    title: "Product Shipments",
    serviceContent:
      "At AASALES we offer a comprehensive range of shipment services designed to meet your unique logisticsneeds.",
  },
  {
    imageLocation: "/images/pages/home/services/service2.png",
    title: "Imports and Exports",
    serviceContent:
      "We ensure the smooth flow of goods across borders, whether you're importing raw materials or exporting finished products. We handle all the intricacies of customs documentation, compliance, and shipping logistics, so you can focus on what you do best – growing your business.",
  },
  {
    imageLocation: "/images/pages/home/services/service3.png",
    title: "Warehousing Services",
    serviceContent:
      "We offer cutting-edge Product Warehousing solutions designed to streamline your storage and distribution needs. Our state-of-the-art warehouses are equipped to handle all your storage requirements,",
  },
  {
    imageLocation: "/images/pages/home/services/service4.png",
    title: "E-Commerce Fulfillment",
    serviceContent:
      "We are your partner for success in the dynamic world of online retail. Enhance your e-commerce operations and elevate customer satisfaction with our comprehensive logistics expertise..",
  },
];
const popularProducts = [
  {
    imageLocation: "/images/pages/home/products/product1.png",
    title: "Leather",
    serviceContent:
      "Our carefully sourced and expertly crafted leather products include exquisite pieces that cater to various industries and preferences. From fashion and accessories to upholstery and beyond, our leather products are synonymous with durability, style, and exceptional craftsmanship.",
  },
  {
    imageLocation: "/images/pages/home/products/product2.png",
    title: "Textiles",
    serviceContent:
      "Our extensive range of textiles encompasses an array of materials, patterns, and textures suitable for various applications. Whether you're in the fashion industry, interior design, or manufacturing, our textiles are crafted with precision and attention to detail, allowing you to bring your creative visions to life.",
  },
  {
    imageLocation: "/images/pages/home/products/product3.png",
    title: "Food Items",
    serviceContent:
      "we are passionate about sharing the rich tapestry of flavors from around the world. As a leading food distribution and exporting service, we specialize in the global sourcing, distribution, and export of premium food products, including grains, spices, and rice.",
  },
  {
    imageLocation: "/images/pages/home/products/product4.png",
    title: "Electronics",
    serviceContent:
      "Discover the limitless possibilities of the digital world with AA SALES. We're your trusted partner in sourcing and delivering high-quality electronics products that empower innovation and enhance connectivity.",
  },
];

function About() {
  const navigate = useNavigate();
  return (
    <Container>
      <section className="page-head">
        <img loading="lazy" src="/images/pages/about/head-image.png" alt="" />
        <div className="backdrop" />
        <div className="vector">
          <img src="/images/pages/about/header-vector.svg" alt="" />
        </div>
        <div className="head-person">
          <img src="/images/pages/about/pointing-image.png" alt="" />
        </div>
        <div className="text-part">
          <h3>Learn more about</h3>
          <h1>A A SALES</h1>
          <h2>Forging Horizons</h2>
          <button onClick={() => navigate("/contact")}>
            <MdOutlineCall />
            Contact us
          </button>
        </div>
      </section>
      <div className="page-intro">
        <div className="inner-content">
          <h1>Our Products & Services</h1>
          <section>
            <div className="image">
              <img src="/images/pages/home/intro.png" alt="" />
            </div>
            <ol>
              <h2>We solve the following problems for our clients</h2>
              <li>We optimize shipments scheduling and delivery</li>
              <li>
                Improve operational efficiency, reduce costs, and enhance
                customer satisfaction
              </li>
              <button onClick={() => navigate("/contact")}>
                Checkout our Services
              </button>
            </ol>
          </section>
        </div>
      </div>
      <div className="title-separator">
        <h1>Our Mission</h1>
      </div>
      <section className="mission-section">
        <div className="content">
          <h2>
            "We are out to provide seamless and cost-effective supply chain
            solutions, leveraging innovation and a commitment to excellence. We
            aim to exceed customer expectations by delivering reliable and
            efficient logistics services while fostering sustainability and
            growth for our clients and partners worldwide."
          </h2>
          <button onClick={() => navigate("/contact")}>
            <MdOutlineCall />
            Contact us
          </button>
        </div>
      </section>
      <div className="traction">
        <div className="numbers">
          <div className="row-1">
            <section>
              <h1>
                <NumberCounter end={5} delay={5} />
              </h1>
              <p>Continents</p>
            </section>
            <section>
              <h1>
                <NumberCounter end={51} delay={5} />
              </h1>
              <p>Countries</p>
            </section>
          </div>
          <div className="row-2">
            <section>
              <h1>
                <NumberCounter end={5000} delay={5} />
              </h1>
              <p style={{ textAlign: "center" }}>
                Distribution <br /> Centers
              </p>
            </section>
          </div>
        </div>
        <div className="text">
          <h2>
            We Operate in 4 Continents and We have 5000+ Warehouses and
            Distribution Centers
          </h2>
          <button onClick={() => navigate("/contact")}>
            <MdOutlineCall />
            Contact us
          </button>
        </div>
      </div>
      <section className="customer-part">
        <div className="content">
          <section className="image">
            <img src="/images/pages/about/section-3.png" alt="" />
          </section>
          <section className="text">
            <h1>Our Target Customers</h1>
            <h2>We Target the following customer segments</h2>
            <ol>
              <li>Manufacturers</li>
              <li>Retailers</li>
              <li>E-commerce Businesses</li>
              <li>Wholesalers and Distributors</li>
              <li>Agriculture and Food Industry</li>
              <li>Construction and Building materials</li>
              <li>Technology and Electronics</li>
            </ol>
            <button onClick={() => navigate("/services")}>Our Services</button>
          </section>
        </div>
      </section>
      <PopularItem title="Our Popular Services" context={popularServices} />
      <PopularItem title="Our Popular Products" context={popularProducts} />
    </Container>
  );
}

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  .page-head {
    width: 100vw;
    height: 100vh;
    position: relative;
    .backdrop {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 3;
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
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }
  .vector {
    position: absolute;
    z-index: 4;
    right: 0;
    bottom: 0;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 100vw;
    }

    width: 60vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .head-person {
    @media (min-width: 320px) and (max-width: 599px) {
      display: none;
    }
    position: absolute;
    z-index: 5;
    bottom: 0;
    right: 12px;
    height: 80vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text-part {
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    bottom: 70px;
    left: 80px;
    line-height: 90px;
    @media (min-width: 320px) and (max-width: 599px) {
      bottom: 20%;
      right: 0;
      line-height: 60px;
      width: 70vw;
      left: 10%;
    }
    h3 {
      font-family: Qwigley;
      color: #14dc78;
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
      font-size: 100px;
      font-style: normal;
      font-weight: 700;
      padding: 5px 10px;
      border-radius: 10px;
      background-color: white;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 70px;
      }
    }
    h2 {
      color: #fff;
      font-family: Roboto Serif;
      font-size: 70px;
      font-style: normal;
      font-weight: 700;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 40px;
      }
    }
    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 35px;
      gap: 17px;
      color: #18004a;
      font-family: Roboto Serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      border-radius: 100px;
      background-color: white;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 20px;
      }

      svg {
        width: 43px;
        height: 43px;
        @media (min-width: 320px) and (max-width: 599px) {
          width: 26px;
          height: 26px;
        }
      }
      &:hover {
        box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
      }
    }
  }
  .page-intro {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 0px;
    @media (min-width: 320px) and (max-width: 599px) {
      padding: 0;
    }
    .inner-content {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 100%;
      }
      h1 {
        align-self: flex-start;
        color: #000;
        font-family: Roboto;
        font-size: 54px;
        font-style: normal;
        font-weight: bold;
        letter-spacing: -1.28px;
        @media (min-width: 320px) and (max-width: 599px) {
          display: none;
        }
      }
      section {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        border-radius: 21.346px;
        @media (min-width: 320px) and (max-width: 599px) {
          flex-direction: column;
          border-radius: 0;
        }
        background: var(
          --gradient-2,
          linear-gradient(
            0deg,
            #085a31 8.81%,
            #098146 37.72%,
            #0ea45a 69.07%,
            #2ce689 100%
          )
        );
        .image {
          width: 45%;
          @media (min-width: 320px) and (max-width: 599px) {
            width: 100%;
          }
          img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            @media (min-width: 320px) and (max-width: 599px) {
              border-radius: 0px;
            }
          }
        }
        ol {
          width: 40%;
          height: 100%;
          margin: 40px 0px;
          margin-left: 1.5cm;
          @media (min-width: 320px) and (max-width: 599px) {
            width: 80%;
          }

          h2 {
            color: #18004a;
            font-family: Qwigley;
            font-size: 57.825px;
            font-style: normal;
            font-weight: 400;
            line-height: 40px;
            margin-bottom: 1cm;
            @media (min-width: 320px) and (max-width: 599px) {
              font-size: 50px;
            }
          }
          li {
            overflow: hidden;
            color: #fff;
            font-family: Roboto;
            font-size: 25.164px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: -0.503px;
            margin-bottom: 0.5cm;
            @media (min-width: 320px) and (max-width: 599px) {
              font-size: 20px;
            }
          }
          button {
            display: flex;
            padding: 8px 35px;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            background: white;
            font-family: Roboto;
            color: #18004a;
            font-size: 40px;
            margin-top: 20px;
            @media (min-width: 320px) and (max-width: 599px) {
              font-size: 20px;
              align-self: flex-end;
            }
          }
        }
      }
    }
  }

  .mission-section {
    position: relative;
    width: 100%;
    padding: 60px 0px;
    display: flex;
    justify-content: center;
    background:
      linear-gradient(0deg, rgba(24, 0, 74, 0.8) 0%, rgba(24, 0, 74, 0.8) 100%),
      url("/images/pages/about/section-2.png"),
      lightgray 50% / cover no-repeat;
    background-attachment: fixed;

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 80%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 95%;
      }
      h2 {
        color: #fff;
        text-align: center;
        font-family: Roboto;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 58px;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 30px;
          line-height: 40px;
        }
      }

      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 35px;
        gap: 17px;
        color: #18004a;
        font-family: Roboto Serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        border-radius: 100px;
        background-color: rgb(255, 255, 255);
        margin-top: 1cm;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 20px;
        }

        svg {
          width: 43px;
          height: 43px;
          @media (min-width: 320px) and (max-width: 599px) {
            width: 26px;
            height: 26px;
          }
        }
        &:hover {
          box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  .customer-part {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    padding: 63px 0px;
    .content {
      width: 80%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media (min-width: 320px) and (max-width: 599px) {
        flex-wrap: wrap;
      }
      .image {
        width: 35%;
        @media (min-width: 320px) and (max-width: 599px) {
          width: 100%;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        @media (min-width: 320px) and (max-width: 599px) {
          width: 100%;
          margin-top: 20px;
        }
        h1 {
          color: #18004a;
          font-family: Roboto;
          font-size: 48px;
          font-style: normal;
          font-weight: 700;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 36px;
          }
        }
        h2 {
          color: #18004a;
          font-family: Roboto;
          font-size: 28px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px;
        }
        ol {
          display: flex;
          flex-direction: column;
          li {
            color: #000;
            font-family: Roboto;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
          }
        }
      }
    }
  }
  .traction {
    width: 100%;
    padding: 60px 0px;
    display: flex;
    justify-content: center;
    background: #5414dc;
    margin-bottom: 20px;
    @media (min-width: 320px) and (max-width: 599px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    .numbers {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 100%;
      }
      div {
        display: flex;
        justify-content: space-around;
        width: 100%;

        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 20px;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);

          h1 {
            color: #18004a;
            font-family: Roboto;
            font-size: 80px;
            font-style: normal;
            font-weight: 800;
            @media (min-width: 320px) and (max-width: 599px) {
              font-size: 70px;
            }
          }
          p {
            color: #18004a;
            font-family: Roboto;
            font-size: 30px;
            font-style: normal;
            font-weight: 300;
            @media (min-width: 320px) and (max-width: 599px) {
              font-size: 25px;
            }
          }
        }
      }
    }
    .text {
      width: 45%;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 80%;
      }
      h2 {
        color: #fff;
        font-family: Roboto;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: 60px;
        margin-bottom: 20px;
        @media (min-width: 320px) and (max-width: 599px) {
          color: #fff;
          font-family: Roboto;
          font-size: 41.6px;
          font-style: normal;
          font-weight: 700;
          line-height: 45px; /* 75% */
        }
      }
      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 35px;
        gap: 17px;
        color: #18004a;
        font-family: Roboto Serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        border-radius: 100px;
        background-color: white;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 20px;
        }

        svg {
          width: 43px;
          height: 43px;
          @media (min-width: 320px) and (max-width: 599px) {
            width: 26px;
            height: 26px;
          }
        }
        &:hover {
          box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;
