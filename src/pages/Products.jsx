import React from "react";
import styled from "styled-components";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ProductComponent from "../components/ProductComponent";
import PopularItem from "../components/PopularItem";

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
const productsList = [
  {
    position: false,
    imageLink: "/images/pages/products/product1.png",
    title: "1. Leather goods",
    collection: [
      "/images/pages/products/pcollection1/col1.png",
      "/images/pages/products/pcollection1/col2.png",
      "/images/pages/products/pcollection1/col3.png",
      "/images/pages/products/pcollection1/col4.png",
    ],
    paragraph:
      "Discover Quality Leather Products from AA SALES. At AA SALES, we take pride in offering a diverse range of high-quality products to meet our customers' needs. Among our wide selection, leather stands as a cornerstone of our offerings. Our carefully sourced and expertly crafted leather products include exquisite pieces that cater to various industries and preferences. ",
  },
  {
    position: true,
    imageLink: "/images/pages/products/product2.png",
    title: "2. Textile goods",
    collection: [
      "/images/pages/products/pcollection2/col1.png",
      "/images/pages/products/pcollection2/col2.png",
      "/images/pages/products/pcollection2/col3.png",
      "/images/pages/products/pcollection2/col4.png",
    ],
    paragraph:
      "Our commitment to excellence begins with the meticulous selection of textile materials sourced from around the world, each chosen for its quality, durability, and unique character. This forms the foundation for a remarkable collection of textile products designed to transcend industries and ignite creativity. Our textile offerings are as versatile as they are inspirational, catering to a wide spectrum of applications. ",
  },
  {
    position: false,
    imageLink: "/images/pages/products/product3.png",
    title: "3. Foot Wears",
    collection: [
      "/images/pages/products/pcollection3/col1.png",
      "/images/pages/products/pcollection3/col2.png",
      "/images/pages/products/pcollection3/col3.png",
      "/images/pages/products/pcollection3/col4.png",
    ],
    paragraph:
      "Our catalog showcases a diverse spectrum of premium footwear, from elegant dress shoes that embody sophistication and luxury to versatile sneakers designed for comfort and performance. Each pair of footwear we offer embodies a fusion of form and function, making them suitable for various occasions and lifestyles.",
  },
  {
    position: true,
    imageLink: "/images/pages/products/product4.png",
    title: "4. Cosmetics and Perfumes",
    collection: [
      "/images/pages/products/pcollection4/col1.png",
      "/images/pages/products/pcollection4/col2.png",
      "/images/pages/products/pcollection4/col3.png",
      "/images/pages/products/pcollection4/col4.png",
    ],
    paragraph:
      "At AA SALES, we're dedicated to enhancing your beauty and elevating your senses with a captivating collection of cosmetics and perfumes. Within our curated selection, cosmetics and fragrances take center stage as the epitome of elegance and self-expression. Our journey towards excellence begins with sourcing the finest ingredients for our cosmetics, ensuring that each product not only enhances your natural beauty but also nourishes and cares for your skin. Our perfumes are crafted with a meticulous blend of scents and notes, capturing the essence of luxury and sophistication.",
  },
  {
    position: false,
    imageLink: "/images/pages/products/product5.png",
    title: "5. Food Items",
    collection: [
      "/images/pages/products/pcollection5/col1.png",
      "/images/pages/products/pcollection5/col2.png",
      "/images/pages/products/pcollection5/col3.png",
      "/images/pages/products/pcollection5/col4.png",
    ],
    paragraph:
      "At AA SALES, we invite you on a culinary journey that celebrates the vibrant tapestry of flavors from around the world. In our carefully curated selection, grains, spices, and rice take center stage as essential ingredients that transform every meal into a culinary masterpiece. Our commitment to excellence begins with the sourcing of the highest-quality ingredients. From the rolling fields of golden wheat to the remote spice markets and lush rice paddies, we handpick each element to ensure authenticity, purity, and unmatched taste.",
  },
  {
    position: true,
    imageLink: "/images/pages/products/product6.png",
    title: "6. Electronics",
    collection: [
      "/images/pages/products/pcollection6/col1.png",
      "/images/pages/products/pcollection6/col2.png",
      "/images/pages/products/pcollection6/col2.png",
      "/images/pages/products/pcollection6/col4.png",
    ],
    paragraph:
      "Our journey towards excellence begins with sourcing the latest and most advanced electronic devices and components from leading manufacturers worldwide. Each product is chosen not only for its performance but also for its ability to transform lives, making it easier, more efficient, and more enjoyable. Our catalog boasts an array of consumer electronics that cater to the needs of modern lifestyles. From the latest smartphones and tablets that keep you connected on the go to sleek laptops and smartwatches that seamlessly blend style and functionality, we provide the tools to navigate today's digital world with ease.",
  },
];
function Products() {
  return (
    <Container>
      <PageHeader />
      <ProductsContainer>
        <ProductComponent
          imageLink={productsList[0].imageLink}
          textTitle={productsList[0].title}
          textParagraph={productsList[0].paragraph}
          imagePosition={productsList[0].position}
          collection={productsList[0].collection}
        />
        <ProductComponent
          imageLink={productsList[1].imageLink}
          textTitle={productsList[1].title}
          textParagraph={productsList[1].paragraph}
          imagePosition={productsList[1].position}
          collection={productsList[1].collection}
        />
        <ProductComponent
          imageLink={productsList[2].imageLink}
          textTitle={productsList[2].title}
          textParagraph={productsList[2].paragraph}
          imagePosition={productsList[2].position}
          collection={productsList[2].collection}
        />
        <ProductComponent
          imageLink={productsList[3].imageLink}
          textTitle={productsList[3].title}
          textParagraph={productsList[3].paragraph}
          imagePosition={productsList[3].position}
          collection={productsList[3].collection}
        />
        <ProductComponent
          imageLink={productsList[4].imageLink}
          textTitle={productsList[4].title}
          textParagraph={productsList[4].paragraph}
          imagePosition={productsList[4].position}
          collection={productsList[4].collection}
        />
        <ProductComponent
          imageLink={productsList[5].imageLink}
          textTitle={productsList[5].title}
          textParagraph={productsList[5].paragraph}
          imagePosition={productsList[5].position}
          collection={productsList[5].collection}
        />
      </ProductsContainer>
      <PopularItem
        link="services"
        title="Our Popular Services"
        context={popularServices}
      />
    </Container>
  );
}

const PageHeader = () => {
  return (
    <HeaderContainer>
      <img loading="lazy" src="/images/pages/products/header.png" alt="" />
      <div className="text">
        <h3>Check out our</h3>
        <h1>Incredible</h1>
        <h2>Products</h2>
      </div>
      <div className="icon" onClick={() => window.scrollBy(0, 700)}>
        <MdOutlineArrowDropDown />
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

const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 100px;
  margin: 50px 0px;
`;
