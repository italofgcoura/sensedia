import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sora', sans-serif;

}

html {
  --color-primary: #5C21AA;
  --color-white: white;
  --color-gray: #6A6A6A;
}

body{
   
  font-size: 16px;
  
}

button{
  cursor: pointer;
}
`;
