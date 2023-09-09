import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Container>
      <section className="top-section" />
      <section className="form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdOpfGut3fsCyyoZ9Mf2Z6WQysMwTSbS35DegIeG8Fe9cwN9w/viewform?embedded=true"
          width="1000"
          height="887"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </section>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .top-section {
    width: 100%;
    height: 30vh;
    background-color: #18004a;
    margin-bottom: 20px;
  }
  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
      width: 100%;
      height: 1200px;
    }
  }
`;
