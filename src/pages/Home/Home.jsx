import React from "react";
import styled from "styled-components";
import LeaderBoard from "../../Components/LeaderBoard";
import Heading from "../../Components/Heading";
import TicketsBoard from "./TicketsBoard";
import LinkText from "../../Components/LinkText";

export default function Home() {
  return (
    <Container>
      <Heading>
        <div className="line"></div>
        <h3>1₾ რეიქი = 1 ქულას</h3>
      </Heading>
      <LeaderBoard page="home" />
      <TicketsBoard />
      <LeaderBoard page="home" />
      <TicketsBoard />
      <LinkText/>
    </Container>
  );
}

const Container = styled.div`
  background-color: #25292b;
  border-radius: 16px;
  margin: 0 16px;
  padding-bottom: 20px;
  color: #ffffff;
  overflow: hidden;
`;
