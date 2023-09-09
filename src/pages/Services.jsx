import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import styled from "styled-components";
import ServiceComponent from "../components/ServiceComponent";
import PopularItem from "../components/PopularItem";

const services = [
  {
    position: false,
    imageLink: "/images/pages/services/product1.png",
    title: "1. Transportation and Distribution Services",
    paragraph:
      "At AA SALES, we offer a comprehensive suite of transportation and distribution services designed to optimize your supply chain. Our expert team ensures efficient transportation management, from route optimization to carrier selection, while our strategically located warehouses and distribution centers provide secure storage and seamless order fulfillment. We excel in international freight forwarding, handling customs clearance and documentation for global shipments. With our advanced real-time visibility tools, you can monitor your supply chain at every step. We tailor our solutions to your unique needs, offering reliability, global reach, cutting-edge technology, and dedicated support. Partner with us to streamline your logistics, reduce costs, and enhance customer satisfaction, propelling your business to new heights",
  },
  {
    position: true,
    imageLink: "/images/pages/services/product2.png",
    title: "2. Product Warehousing Services",
    paragraph:
      "Whether you need racked storage, bulk storage, or specialized handling, we customize our solutions to match your requirements. By outsourcing your warehousing needs to us, you can free up valuable space, reduce overhead costs, and optimize operational efficiency. Trust AA SALES as your reliable partner for product warehousing, allowing you to focus on your core business activities.",
  },
  {
    position: false,
    imageLink: "/images/pages/services/product3.png",
    title: "3. Supply Chain Management",
    paragraph:
      "Our dedicated team of experts designs, implements, and optimizes supply chain strategies tailored to your specific industry and business needs. We excel in transportation management, ensuring timely and cost-effective delivery, whether it's local or global. Our strategically located warehouses and distribution centers provide secure inventory storage, allowing us to manage your stock levels, handle order fulfillment, and facilitate last-mile deliveries. We offer end-to-end visibility into your supply chain through cutting-edge technology, empowering you with real-time tracking and reporting.",
  },
  {
    position: true,
    imageLink: "/images/pages/services/product4.png",
    title: "4. Reverse Logistics",
    paragraph:
      "Whether it's handling product recalls, processing customer returns, recycling, or responsible disposal, we've got you covered. We excel in creating sustainable and environmentally friendly practices, ensuring that returned goods are properly assessed, refurbished, or disposed of according to regulations and industry best practices. Our expertise in reverse logistics minimizes waste, maximizes asset recovery, and supports your commitment to sustainability and responsible business practices. Partner with us to turn reverse logistics into a value-added service, ultimately strengthening your brand's reputation and bottom line.",
  },
  {
    position: false,
    imageLink: "/images/pages/services/product5.png",
    title: "5. E-Commerce Fulfillment",
    paragraph:
      "Our specialized e-commerce fulfillment services encompass everything you need to succeed in the online marketplace. From order processing and efficient inventory management to expert packing and timely shipping, we ensure that your customers receive their orders accurately and on time. We seamlessly integrate with various e-commerce platforms, enabling you to sell and expand your business on multiple channels. Our real-time tracking and reporting tools provide you and your customers with complete visibility into the status of every shipment. With our scalable solutions and customized strategies, you can grow your e-commerce business confidently.",
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
function Services() {
  return (
    <Container>
      <TopHeader />
      <ServicesContainer>
        {services.map((item) => (
          <ServiceComponent
            imagePosition={item.position}
            imageLink={item.imageLink}
            textTitle={item.title}
            textParagraph={item.paragraph}
          />
        ))}
      </ServicesContainer>
      <PopularItem
        link="products"
        title="Our Popular Products"
        context={popularProducts}
      />
    </Container>
  );
}

const TopHeader = () => {
  return (
    <HeaderContainer>
      <img loading="lazy" src="/images/pages/services/header.png" alt="" />
      <div className="backdrop" />
      <div className="text-content">
        <h3>Check out our</h3>
        <h1>Incredible</h1>
        <h2>Services</h2>
      </div>
      <div className="icon" onClick={() => window.scrollBy(0, 700)}>
        <MdOutlineArrowDropDown />
      </div>
    </HeaderContainer>
  );
};

export default Services;

const Container = styled.div``;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  img {
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .backdrop {
    position: absolute;
    z-index: 3;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
  .text-content {
    position: absolute;
    bottom: 100px;
    left: 100px;
    z-index: 5;
    line-height: 90px;
    @media (min-width: 320px) and (max-width: 599px) {
      left: 10%;
      bottom: 20%;
      line-height: 50px;
    }
    h3 {
      color: #14dc78;
      font-family: Qwigley;
      font-size: 100px;
      font-style: normal;
      font-weight: 400;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 50px;
      }
    }
    h1 {
      color: #18004a;
      font-family: Roboto;
      font-size: 110px;
      font-style: normal;
      font-weight: 500;
      padding: 10px 20px;
      background-color: white;
      border-radius: 10px;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 50px;
      }
    }
    h2 {
      color: #fff;
      font-family: Roboto;
      font-size: 100px;
      font-style: normal;
      font-weight: 500;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 50px;
      }
    }
  }
  .icon {
    position: absolute;
    z-index: 5;
    background-color: white;
    bottom: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    cursor: pointer;
    svg {
      width: 48px;
      height: 48px;
      color: #18004a;
    }
    &:hover {
      background-color: #cdcdcd;
    }
  }
`;
const ServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
  margin: 50px 0px;
`;
