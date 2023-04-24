import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    ${"" /* color: #FFFFFF; */}
  }
  body{
    background-color: #1C1D1E;
    @media(min-width: 1024px){
      position: relative;
      :before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-image: url('/assets/desktop-version-bg.png');
          background-size: cover;
          background-position: center;
          opacity: 0.6;
          z-index: -1;
      } 
      #root{
        background-color: #1C1D1E;
        max-width: 940px;
        height: 100vh;
        overflow-y: scroll;
        margin: 30px auto;
        border-radius: 13px;
        ::-webkit-scrollbar {
        display: none;
        }
      }
    }
  }

`;
export default GlobalStyles;
