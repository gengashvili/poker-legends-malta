import React from "react";
import styled from "styled-components";
import AdditionalInfoCont from "../../Components/AdditionalInfoCont";
import Heading from "../../Components/Heading";
import LeaderBoard from "../../Components/LeaderBoard";
import LinkText from "../../Components/LinkText";

import TicketsBoard from "../Home/TicketsBoard";
import DailyTournaments from "./DailyTournaments";
import Tournaments from "./Tournaments";

export default function NewYearSeries() {
  return (
    <div>
    <Tournaments/>
      <Wrapper>
        <Heading>
        <div className="line"></div>
        <h3>მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით</h3>
        </Heading>
        <LeaderBoard />
        <TicketsBoard />
        <LinkText />
        <Paragraph>
          * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
          სატელიტები
        </Paragraph>
      </Wrapper>
      <DailyTournaments/>
      <AdditionalInfoCont />
    </div>
  );
}

const Wrapper = styled.div`
  background-color: #25292b;
  border-radius: 16px;
  margin: 19px 16px 24px 16px;
`;

const Paragraph = styled.p`
  font-size: 13px;
  color: #ffffff;
  max-width: 80%;
  margin: 10px auto 18px auto;
  text-align: center;
  padding-bottom: 20px;
`;
