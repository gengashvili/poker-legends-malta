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
              srcSet="/assets/festival-malta-bg.png"
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

        <div className="categoriesWrapper">
          <div className="categoryCard">
            <div className="heading">
              <span className="line"></span>
              <h4>A კატეგორიის საგზურში შედის</h4>
            </div>
            <ul>
              <li>
                <img src="/assets/final-item-ticket-icon.png" alt="icon" />
                ორმხრივი ავიაბილეთი
              </li>
              <li>
                <img src="/assets/final-item-hotel-icon.png" alt="icon" />
                The Festival in Malta -ს მეინ ივენთის ბაი-ინი
              </li>
              <li>
                <img src="/assets/final-item-event-icon.png" alt="icon" />
                Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი
              </li>
              <li>
                <img src="/assets/final-item-ticket-icon.png" alt="icon" />
                სასტუმრო
              </li>
              <li>
                <img src="/assets/final-item-ticket-icon.png" alt="icon" />
                €500 სახარჯი ფული
              </li>
            </ul>
          </div>
          <div className="categoryCard">
            <div className="heading">
              <span className="line"></span>
              <h4>A კატეგორიის საგზურში შედის</h4>
            </div>
            <ul>
              <li>
                <img src="/assets/final-item-ticket-icon.png" alt="icon" />
                ორმხრივი ავიაბილეთი
              </li>
              <li>
                <img src="/assets/final-item-hotel-icon.png" alt="icon" />
                The Festival in Malta -ს მეინ ივენთის ბაი-ინი
              </li>
              <li>
                <img src="/assets/final-item-event-icon.png" alt="icon" />
                Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი
              </li>
              <li>
                <img src="/assets/final-item-ticket-icon.png" alt="icon" />
                სასტუმრო
              </li>
              <li>
                <img src="/assets/final-item-ticket-icon.png" alt="icon" />
                €500 სახარჯი ფული
              </li>
            </ul>
          </div>
          <div className="categoryCard">
            <div className="heading">
              <span className="line"></span>
              <h4>A კატეგორიის საგზურში შედის</h4>
            </div>
            <ul>
              <li>
                <img src="/assets/final-item-ticket-icon.png" alt="icon" />
                ორმხრივი ავიაბილეთი
              </li>
              <li>
                <img src="/assets/final-item-hotel-icon.png" alt="icon" />
                The Festival in Malta -ს მეინ ივენთის ბაი-ინი
              </li>
              <li>
                <img src="/assets/final-item-event-icon.png" alt="icon" />
                Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი
              </li>
              <li>
                <img src="/assets/final-item-ticket-icon.png" alt="icon" />
                სასტუმრო
              </li>
              <li>
                <img src="/assets/final-item-ticket-icon.png" alt="icon" />
                €500 სახარჯი ფული
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tournirsContainer">
        <div className="heading">
          <span className="line"></span>
          <h4>მოიგე საგზური 30 აპრილის ტურნირებზე</h4>
        </div>
        <div className="wrapper">
          <div className="tournir">
            <img src="/assets/poker-item-1-ticket-icon.png" />
            <h5>„Holdem Grinders”</h5>
            <p>C კატეგორიის 1 საგზური</p>
          </div>
          <div className="tournir">
            <img src="/assets/poker-item-1-ticket-icon.png" />
            <h5>„Holdem Grinders”</h5>
            <p>C კატეგორიის 1 საგზური</p>
          </div>
          <div className="tournir">
            <img src="/assets/poker-item-1-ticket-icon.png" />
            <h5>„Holdem Grinders”</h5>
            <p>C კატეგორიის 1 საგზური</p>
          </div>

          <div className="tournir">
            <img src="/assets/poker-item-2-ticket-icon.png" />
            <h5>„The Festival in Malta, GTD“</h5>
            <p>C კატეგორიის 1 საგზური</p>
            <p>
              *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
              ბაი-ინის გადახდით.
            </p>
          </div>
          <div className="tournir">
            <img src="/assets/poker-item-2-ticket-icon.png" />
            <h5>“Cashgame Sharks”</h5>
            <p>C კატეგორიის 1 საგზური</p>
            <p>
              *ტურნირზე მონაწილებას შეძლებენ მხოლოდ ევროპაბეთის ბეჭდის
              მფლობელები.
            </p>
          </div>
        </div>
        <div className="paragraphs">
          <p>* თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით</p>
          <p>*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი ბაი-ინის გადახდით.</p>
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
        background-color: #2c3234;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 900;
        max-width: 600px;
        min-height: 62px;
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
    .categoriesWrapper {
      .categoryCard {
        margin: 20px 0;
        background-color: #25292b;
        border-radius: 14px;
        padding-bottom: 8px;

        .heading {
          position: relative;
          background-color: #2c3234;
          border-radius: 10px 10px 0 0;
          text-align: center;
          padding: 17px 0;
          .line {
            width: 100px;
            height: 4px;
            background-color: #ef5a21;
            border-radius: 0 0 4px 4px;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0px 0px 10px #ef5a21;
          }
          h4 {
            font-size: 14px;
            font-weight: 900;
          }
        }
        ul {
          padding: 0 12px;
          li {
            background-color: #1c1d1e;
            border-radius: 10px;
            margin: 3px 0;
            padding: 12px 15px;
            display: flex;
            align-items: center;
            img {
              margin-right: 12px;
              width: 32px;
              height: 32px;
            }
          }
        }
      }
    }
  }
  .tournirsContainer {
    background-color: #25292b;
    border-radius: 14px;
    margin-top: 25px;
    padding-bottom: 14px;
    .heading {
      position: relative;
      background-color: #2c3234;
      border-radius: 10px 10px 0 0;
      text-align: center;
      padding: 17px 0;
      .line {
        width: 100px;
        height: 4px;
        background-color: #ef5a21;
        border-radius: 0 0 4px 4px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 0px 10px #ef5a21;
      }
      h4 {
        font-size: 14px;
        font-weight: 900;
      }
    }
    .wrapper {
      .tournir {
        position: relative;
        background-color: #1e2122;
        border-radius: 12px;
        padding: 20px;
        margin: 10px 16px;
        img {
          position: absolute;
          top: 0;
          right: 15px;
        }
        h5 {
          font-size: 15px;
          font-weight: 900;
          margin-bottom: 5px;
        }
        p {
          font-size: 13px;
        }
      }
    }
    .paragraphs{
      margin: 0 auto;
      max-width: 85%;
      text-align: center;
      p{
        font-size: 13px;
        margin-bottom: 10px;
      }
    }
  }
`;
