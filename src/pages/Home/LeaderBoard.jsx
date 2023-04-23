import React from "react";
import styled from "styled-components";

export default function LeaderBoard() {
  return (
    <Wrapper>
      <Heading>
        <h4>TOP20 ლიდერბორდი ჰოლდემში</h4>
        <img src="/assets/example-icon.png" alt="example icon" />
      </Heading>
      <Board>
        <tr>
          <th>ადგილი</th>
          <th>ვაუჩერი</th>
          <th>პრიზი</th>
        </tr>
        <tr>
          <td>1</td>
          <td>1 500 ₾</td>
          <td>A კატეგორიის საგზური</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1 500 ₾</td>
          <td>A კატეგორიის საგზური</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1 500 ₾</td>
          <td>A კატეგორიის საგზური</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1 500 ₾</td>
          <td>A კატეგორიის საგზური</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1 500 ₾</td>
          <td>A კატეგორიის საგზური</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1 500 ₾</td>
          <td>A კატეგორიის საგზური</td>
        </tr>
      </Board>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 15px 0 0 0;
  color: #FFFFFF;

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

const Board = styled.table`
  margin: 24px 15px;
  tr {
    text-align: left;
    /* :not(:first-child){
      color: red;
    } */
  }
  th,
  td {
    width: 33%;
  }
  th {
    font-size: 12px;
  }
  td {
    font-size: 10px;
  }
`;
