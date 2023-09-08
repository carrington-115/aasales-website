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
  return <HeaderContainer></HeaderContainer>;
};

export default Products;

const Container = styled.div``;

const HeaderContainer = styled.section``;
