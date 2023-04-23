import React from "react";
import styled from "styled-components";
import LeaderBoard from "./LeaderBoard";
import TicketsBoard from "./TicketsBoard";

export default function Home() {
  return (
    <Container>
      <Heading>
        <div className="line"></div>
        <h3>1₾ რეიქი = 1 ქულას</h3>
      </Heading>
      <LeaderBoard />
      <TicketsBoard />
      <LeaderBoard />
      <TicketsBoard />
      <LinkText>
        * ლიდერბორდის შედეგები განახლდება <span>პოკერის ლობიში</span>
      </LinkText>
    </Container>
  );
}

const Container = styled.div`
  background-color: #25292b;
  border-radius: 16px;
  margin: 0 16px;
  padding-bottom: 20px;
  color: #ffffff;
`;

const Heading = styled.div`
  background-color: #2c3234;
  border-radius: 16px;
  text-align: center;
  padding: 24px 0;
  position: relative;
  h3 {
    font-size: 16px;
  }
  .line {
    width: 125px;
    height: 4px;
    background-color: #ef5a21;
    border-radius: 0 0 4px 4px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 0px 10px #ef5a21;
  }
`;

const LinkText = styled.div`
margin: 0 auto;
  max-width: 80%;
  font-size: 13px;
  text-align: center;
  span {
    color: #ef5a21;
    text-decoration: underline;
  }
`;
