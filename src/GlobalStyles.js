import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    ${'' /* color: #FFFFFF; */}
  }
  body{
    background-color: #1C1D1E;
  }

`
export default GlobalStyles;