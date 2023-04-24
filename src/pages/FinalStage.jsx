import React from "react";
import styled from "styled-components";

export default function FinalStage() {
  return (
    <Container>
      <section className="festivalContainer">
        <div className="maltaBox">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcset="/assets/festival-malta-bg.png"
            />
            <img src="/assets/festival-malta-sm.png" alt="festival malta" />
          </picture>
          <p>გაემგზავრე The Festival in Malta-ზე!</p>
          <p>
            The Festival Series ტურნირების ფარგლებში, ევროპაბეთი უკვე მეორედ
            აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
          </p>
          <div>
            <span className="line"></span>
            15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
          </div>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 16px;
  color: #ffffff;
  .festivalContainer {
    border-radius: 16px;
    padding: 20px;
    border: #25292b 4px solid;
    .maltaBox {
      text-align: center;
      img {
        width: 100%;
      }
      p {
        font-size: 14px;
        max-width: 85%;
        margin: 16px auto 10px auto;
      }
      div {
        position: relative;
        background-color: #2C3234;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 900;
        max-width: 600px;
        min-height:62px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .line {
          width: 4px;
          height: 28px;
          background-color: #ef5a21;
          border-radius: 0 4px 4px 0;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translatey(-50%);
          box-shadow: 0px 0px 10px #ef5a21;
        }
      }
    }
  }
`;
