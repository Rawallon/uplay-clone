import { createGlobalStyle } from 'styled-components';
import UbiRegSansEOT from '../assets/font/ubisoftsans-regular.eot'
import UbiRegSansWOFF from '../assets/font/ubisoftsans-regular.woff'

import UbiBoldSansWOFF from '../assets/font/ubisoftsans-bold.woff'
import UbiBoldSansEOT from '../assets/font/ubisoftsans-bold.eot'

export const Globals = createGlobalStyle`
/* FONT FROM: https://www.fontzip.com/ubisoft-sans */
    @font-face {
        font-family: 'UbisoftSans';
        src: url(${UbiRegSansEOT}) format('eot'),
        url(${UbiRegSansWOFF}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'UbisoftSansBold';
        src: url(${UbiBoldSansEOT}) format('eot'),
        url(${UbiBoldSansWOFF}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
    /* FONT FROM https://www.fontzip.com/ubisoft-sans */

  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    box-sizing: border-box;
  }
  html, body, :root {
    font-family: 'ubisoftsans','Poppins', Arial, Helvetica, sans-serif
  }

  /* width */
*::-webkit-scrollbar {
  width: 8px;
}

/* Track */
*::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
/* Handle */
*::-webkit-scrollbar-thumb {
  background: #3C4754; 
  border-radius: 10px;
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: #475362; 
}
`;