import React from "react";
import styled from "styled-components";

export default function LinkText() {
  return (
    <StyledLinkText>
      <p>* ლიდერბორდის შედეგები განახლდება</p>
      <span>პოკერის ლობიში</span>
    </StyledLinkText>
  );
}

const StyledLinkText = styled.div`
  margin: 0 auto;
  font-size: 13px;
  text-align: center;
  color: #FFFFFF;
  span {
    color: #ef5a21;
    text-decoration: underline;
  }
`;
