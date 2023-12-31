import React from "react";
import DesktopSlider from "../components/DesktopSlider";
import styled from "styled-components";
import { MdOutlineCall } from "react-icons/md";
import NumberCounter from "number-counter";
import PopularItem from "../components/PopularItem";
import { useNavigate } from "react-router-dom";

const popularServices = [
  {
    imageLocation: "/images/pages/home/services/service1.png",
    title: "Product Shipments",
    serviceContent:
      "At AASALES we offer a comprehensive range of shipment services designed to meet your unique logistic needs.",
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

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <DesktopSlider />
      <div className="page-intro">
        <div className="inner-content">
          <h1>Our Products & Services</h1>
          <section>
            <div className="image">
              <img loading="lazy" src="/images/pages/home/intro.png" alt="" />
            </div>
            <ol>
              <li>Imports and exports</li>
              <h2>Our Products and Services</h2>
              <li>Product shipment</li>
              <li>Warehousing and distribution</li>
              <li>E-commerce logistics</li>
              <li>Transportation Services</li>
              <button onClick={() => navigate("/about")}>Learn more</button>
            </ol>
          </section>
        </div>
      </div>
      <div className="title-separator">
        <h1>Our Traction</h1>
      </div>
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
            We Operate in 5 Continents and We have 5000+ Warehouses and
            Distribution Centers
          </h2>
          <button onClick={() => navigate("/contact")}>
            <MdOutlineCall />
            Contact us
          </button>
        </div>
      </div>
      <div className="title-separator">
        <h1>Our Values</h1>
      </div>
      <div className="values">
        <section className="values-content">
          <section>
            <div className="icon">
              <img src="/images/pages/home/icons/value-quality.png" alt="" />
            </div>
            <div className="text">
              <h3>Quality</h3>
              <p>
                We ensure that all aspects of logistics operations, from
                packaging to transporation, meet high-quality standards to
                satisfy customers
              </p>
            </div>
          </section>
          <section>
            <div className="icon">
              <img src="/images/pages/home/icons/value2.png" alt="" />
            </div>
            <div className="text">
              <h3>Reliability</h3>
              <p>
                Consistently delivering goods on time and in the expected
                condition is our first hallmark
              </p>
            </div>
          </section>
          <section>
            <div className="icon">
              <img src="/images/pages/home/icons/value3.png" alt="" />
            </div>
            <div className="text">
              <h3>Accuracy</h3>
              <p>
                We maintain precise inventory and shipment tracking to prevent
                errors for every of our operations
              </p>
            </div>
          </section>
          <section>
            <div className="icon">
              <img src="/images/pages/home/icons/value4.png" alt="" />
            </div>
            <div className="text">
              <h3>
                Customer <br />
                Focus
              </h3>
              <p>
                We Tailor our services to meet the unique needs and demands of
                customers
              </p>
            </div>
          </section>
          <section>
            <div className="icon">
              <img src="/images/pages/home/icons/value5.png" alt="" />
            </div>
            <div className="text">
              <h3>Global Reach</h3>
              <p>
                We have the capacity to operate and manage logistics on a global
                scale and necessary
              </p>
            </div>
          </section>
          <section>
            <div className="icon">
              <img src="/images/pages/home/icons/value6.png" alt="" />
            </div>
            <div className="text">
              <h3>Transparency</h3>
              <p>
                We Provide clear, real-time information to clients about the
                status and location of their shipments
              </p>
            </div>
          </section>
        </section>
      </div>
      <PopularItem
        link="services"
        title="Our Popular Services"
        context={popularServices}
      />
      <PopularItem
        link="products"
        title="Our Popular Products"
        context={popularProducts}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  .values {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .values-content {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-between;
      gap: 100px;
      row-gap: 50px;
      @media (min-width: 320px) and (max-width: 599px) {
        grid-template-columns: repeat(2, 1fr);
      }
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          color: #18004a;
          text-align: center;
          font-family: Roboto;
          font-size: 44px;
          font-weight: bold;
          line-height: 40px;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 20px;
          }
        }
        p {
          color: #18004a;
          text-align: center;
          font-family: Roboto;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px;
          @media (min-width: 320px) and (max-width: 599px) {
            font-size: 12px;
            line-height: 15px;
          }
        }
        img {
          width: 100px;
          height: 100px;
          @media (min-width: 320px) and (max-width: 599px) {
            width: 70px;
            height: 70px;
          }
        }
      }
    }
  }
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
        justify-content: space-between;
        border-radius: 21.346px;
        @media (min-width: 320px) and (max-width: 599px) {
          flex-direction: column;
          border-radius: 0;
        }
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
          width: 45%;
          height: 100%;
          margin: 40px 0px;
          line-height: auto;
          @media (min-width: 320px) and (max-width: 599px) {
            width: 100%;
            padding-left: 10%;
          }

          h2 {
            color: #fff;
            font-family: Qwigley;
            font-size: 57.825px;
            font-style: normal;
            font-weight: 400;
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
            @media (min-width: 320px) and (max-width: 599px) {
              font-size: 20px;
            }
          }
          button {
            display: flex;
            padding: 8px 35px;
            justify-content: center;
            align-items: center;
            border-radius: 100px;
            background: #14dc78;
            font-family: Qwigley;
            color: #18004a;
            font-size: 40px;
            margin-top: 20px;
            @media (min-width: 320px) and (max-width: 599px) {
              font-size: 25px;
            }
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
