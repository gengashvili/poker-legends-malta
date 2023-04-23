import React from "react";
import styled from "styled-components";

export default function LeaderBoard({ page }) {
  return (
    <Wrapper>
      {page === "home" ? (
        <Heading>
          <h4>TOP20 ლიდერბორდი ჰოლდემში</h4>
          <img src="/assets/example-icon.png" alt="example icon" />
        </Heading>
      ) : (
        <LBHeading>
          <h4>ქულების დაგროვების მექანიკა</h4>
          <img src="/assets/mechanic-icon.png" alt="mechanic icon" />
        </LBHeading>
      )}

      <Board>
        <div>
          <h6>ადგილი</h6>
          <h6>
            <img src="/assets/vaucheri.png" alt="vaucheri" />
            ვაუჩერი
          </h6>
          <h6>პრიზი</h6>
        </div>
        <ul>
          <li>
            <p>1</p>
            <p>1 500 ₾</p>
            <p>A კატეგორიის საგზური</p>
          </li>
          <li>
            <p>1</p>
            <p>1 500 ₾</p>
            <p>A კატეგორიის საგზური</p>
          </li>
          <li>
            <p>1</p>
            <p>1 500 ₾</p>
            <p>A კატეგორიის საგზური</p>
          </li>
          <li>
            <p>1</p>
            <p>1 500 ₾</p>
            <p>A კატეგორიის საგზური</p>
          </li>
          <li>
            <p>1</p>
            <p>1 500 ₾</p>
            <p>A კატეგორიის საგზური</p>
          </li>
          <li>
            <p>1</p>
            <p>1 500 ₾</p>
            <p>A კატეგორიის საგზური</p>
          </li>
        </ul>
      </Board>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 15px 0 0 0;
  color: #ffffff;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-size: 13px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }
`;

const Board = styled.div`
  margin: 24px 16px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 13px;
    h6 {
      font-size: 12px;
      color: #7d7d7d;
      display: flex;
      align-items: center;
      :last-child {
        margin-right: 40px;
      }
      img {
        width: 15px;
        height: 10px;
        margin-right: 4px;
      }
    }
  }
  ul {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #1e2122;
      border-radius: 76px;
      padding: 12px 20px 12px 13px;
      border: 2px solid #2c3234;
      :not(:first-child) {
        margin-top: 6px;
      }
      p {
        font-size: 10px;
        :first-child {
          border-radius: 50%;
          background-color: #2c3234;
          padding: 5px 9px;
        }
        :last-child {
          width: 30%;
          text-align: center;
        }
      }
    }
  }
`;

const LBHeading = styled.div`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: #1e2122;
  border-radius: 76px;
  border: 2px solid #2c3234;
  h4 {
    font-size: 13px;
    margin: 0 20px;
  }
  img{
    width: 38px;
    height: 38px;
    margin-right: -6px;
  }
`;
