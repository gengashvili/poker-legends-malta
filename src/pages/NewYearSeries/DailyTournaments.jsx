import styled from "styled-components";

export default function DailyTournaments() {
  return (
    <Wrapper>
      <h4>ყოველდღიური ტურნირები და სატელიტები</h4>
      <div className="cardsWrapper">
        <div className="card">
          <img src="/assets/tournament-bg-m.png" />
          <div className="textWrapper">
            <div>
              <span>Omaha Highrollers</span>
              <span>ბაი-ინი XXX₾</span>
            </div>
            <div>
              <span>40 000₾</span>
              <span>27 დეკემბერი</span>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/assets/tournament-bg-m.png" />
          <div className="textWrapper">
            <div>
              <span>Omaha Highrollers</span>
              <span>ბაი-ინი XXX₾</span>
            </div>
            <div>
              <span>40 000₾</span>
              <span>27 დეკემბერი</span>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/assets/main-bg-sm.png" />
          <div className="textWrapper">
            <div>
              <span>Omaha Highrollers</span>
              <span>ბაი-ინი XXX₾</span>
            </div>
            <div>
              <span>40 000₾</span>
              <span className="lastCardDate">27 დეკემბერი</span>
            </div>
          </div>
        </div>
      </div>
      <p>
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 24px 16px;
  color: #ffffff;
  font-weight: 900;
  h4 {
    font-size: 14px;
    width: fit-content;
    margin: 0 auto;
  }

  .card {
    position: relative;
    margin: 16px 0;
    img {
      width: 100%;
    }
    .textWrapper {
      width: max-content;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      div {
        :first-child {
          span {
            :first-child {
              font-size: 14px;
              margin-right: 24px;
            }
            :last-child {
              font-size: 12px;
            }
          }
        }
        :last-child {
          span {
            :first-child {
              font-size: 24px;
              color: #ffbe00;
              margin-right: 52px;
            }
            :last-child {
              font-size: 14px;
              background-color: #b78648;
              border-radius: 15px 15px 0px 15px;
              padding: 4px 12px;
            }
          }
        }
      }
    }
  }

  .lastCardDate {
    color: #094b3d;
    background-color: #d7c860;
  }

  p{
    font-size: 14px;
  }
`;
