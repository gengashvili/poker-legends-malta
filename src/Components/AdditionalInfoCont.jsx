import React from "react";
import styled from "styled-components";

export default function AdditionalInfoCont() {
  return (
    <StyledAdditionalInfoCont>
      <h3>
        დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 Side
        ლიდერბორდი
      </h3>
      <p>
        * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
      </p>
    </StyledAdditionalInfoCont>
  );
}

const StyledAdditionalInfoCont = styled.div`
  color: #ffffff;
  background-color: #2c3234;
  border-radius: 16px;
  margin: 24px 16px 0 16px;
  padding: 24px 0 16px 0;

  h3,p{
    max-width: 75%;
    margin: 0 auto;
  }
  h3{
    font-size: 16px;
    margin-bottom: 11px;
  }
  p{
    font-size: 12px;
  }
`;
