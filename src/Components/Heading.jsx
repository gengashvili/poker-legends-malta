import styled from "styled-components";


const Heading = styled.div`
  background-color: #2c3234;
  border-radius: 16px;
  text-align: center;
  padding: 24px 0;
  position: relative;
  h3 {
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
`;
export default Heading