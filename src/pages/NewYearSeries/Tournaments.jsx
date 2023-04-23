import styled from "styled-components";
import { TbClockHour3 } from "react-icons/tb";

export default function Tournaments() {
  return (
    <Wrapper>
      <span className="line"></span>

      <div className="heading">ტურნირები და სატელიტები</div>

      <div className="middle-container">
        <h4>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h4>
        <div className="timeBox">
          <span className="clockBox">
            <TbClockHour3 />
          </span>
          <span className="text">19:00 / 19:30 / 20:00</span>
        </div>
        <img className="left" src="/assets/promo-left-img-m.png" alt="" />
        <img className="right" src="/assets/promo-right-img-m.png" alt="" />
      </div>

      <div className="textWrapper">
        <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
        <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
        <button>პოკერის ლობი</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: #2c3234;
  color: #fff;
  border-radius: 16px;
  text-align: center;
  .heading {
    font-size: 16px;
    padding: 24px 0;
    font-weight: 900;
  }
  h4 {
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

  .middle-container {
    background-color: #171718;
    padding: 15px 0 30px 0;
    position: relative;

    .timeBox {
      height: 32px;
      max-width: fit-content;
      display: flex;
      align-items: center;
      border: 2px solid #f05a22;
      border-radius: 10px;
      overflow: hidden;
      .clockBox {
        background-color: #f05a22;
        padding: 6px 9px;
        border-radius: 0 13px 13px 0;
        svg {
          width: 20px;
          height: 20px;
        }
      }
      .text {
        font-size: 13px;
        margin: 0 12px;
      }
    }

    .left,
    .right {
      position: absolute;
      bottom: 0;
    }
    .left {
      left: -10px;
    }
    .right {
      right: -10px;
    }
  }

  .textWrapper {
    font-size: 14px;
    button {
      background-color: #F05A22;
      border-radius: 5px;
      color: #fff;
      border: none;
      padding: 6.5px 18.5px;
      font-size: 15px;
    }
  }
`;
