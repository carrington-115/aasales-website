import React, { useRef } from "react";
import styled from "styled-components";
import { BsFillChatQuoteFill } from "react-icons/bs";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const propertyID = import.meta.env.VITE_PRODUCT_ID;
const widjetID = import.meta.env.WIDJET_ID;

function Chat() {
  return (
    <Container>
      <div
        className="chat-btn"
        style={{
          width: "60px",
          height: "60px",
        }}
      >
        <BsFillChatQuoteFill
          color="blue"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <ChatComponent />
    </Container>
  );
}

const ChatComponent = () => {
  const tawkMessengerRef = useRef();
  return (
    <TawkMessengerReact
      ref={tawkMessengerRef}
      propertyId="64f23b20b2d3e13950ed6b26"
      widjetId="1h993dum6"
    />
  );
};

export default Chat;

const Container = styled.section`
  position: fixed;
  bottom: 20px;
  right: 20px;
  .chat-btn {
    cursor: pointer;
    &:hover {
      svg {
        fill: red;
      }
    }
  }
`;
