import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Kumbh+Sans:wght@100..900&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Overpass+Mono:wght@300..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
  background: #FF7979;
  background-image: url(/images/bg-intro-mobile.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and  (min-width: 768px){
    background-image: url(/images/bg-intro-desktop.png);


  }
}
  body, button {
    font-family: 'Poppins', sans-serif;

  }
  html{
    font-size: 62.5%;
   
  }
`;

export default Globals;
