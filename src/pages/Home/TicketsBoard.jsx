import styled from "styled-components";

export default function TicketsBoard() {
  return (
    <StyledBoard>
      <div>
        <span className="line"></span>
        <img src="/assets/travel-icon-sm.png" alt="airplane icon" />
        <p>The Festival in Malta-ს საგზური</p>
      </div>
      <div>
        <span className="line"></span>
        <img src="/assets/ticket-icon-sm.png" alt="ticket icon" />
        <p>
          სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
          Festival in Malta-ს საგზური
        </p>
      </div>
      <div>
        <span className="line"></span>
        <div className="img">
          <img src="/assets/vaucheri.png" alt="vaucheri icon" />
        </div>
        <p>„ალტას“ ვაუჩერი</p>
      </div>
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  margin: 20px 16px;
  color: #ffffff;
  font-size: 13px;
  div {
    padding: 14px 12px 14px 0;
    border-radius: 14px;
    background-color: #2c3234;
    display: flex;
    align-items: center;
    position: relative;
    :not(:first-child) {
      margin-top: 10px;
    }

    img {
      width: 37px;
      height: 35px;
      margin: 0 8px 0 15px;
    }
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

    .img {
      width: 37px;
      height: 35px;
      margin: 0 8px 0 15px;
      background-color: rgba(84, 87, 88, 0.4);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 25px;
        height: 16px;
      }
    }

  }
`;
