import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    
  }
  
  body{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background: #0096c7;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  h1{
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    
    
  }
  
  html, body, #root{
    height: 100%;
  }
`

