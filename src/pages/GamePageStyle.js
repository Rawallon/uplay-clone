import styled from "styled-components";

export const BrowserContainer = styled.div`
  /* padding: 0 9% 0 9%; */
  width: 100%;
  height: 100%;
  color: #55aaff;
`;

export const PageWrapper = styled.div`
height: 100%;
display: grid;
grid-template-columns: 1fr 2fr;
gap:40px;
`;
export const MenuWrapper = styled.div`
padding-top: 40px;
position: sticky;
top: 0;
left: 0;
width: 50%;
min-width: 250px;
max-width: 250px;
height: 35vh;
justify-self: end;
font-size: 13px;
`;
export const TextLink = styled.div`
display: flex;
align-items: center;
margin-bottom: 30px;
 svg{
     margin-right: 14px;
 }
 img{
     width: 100%;
 }
 img:hover{filter: brightness(0.1); }
 button{
     margin-bottom: -12px;
     padding: 0 13px;
     font-size: 20px;
  font-family: "UbisoftSansBold";
  color:white;
     width: 100%;
    height: 40px;
    background: #55aaff;
    border-radius: 3px;
 }

 a{
    display: flex;
align-items: center;
    color: #55aaff;
    text-decoration:none;
 }
 &:hover {
    filter: brightness(120%);
  }
`;

export const SubTextLink = styled(TextLink)`
margin-bottom: 25px;
`;

export const SubMenuWrapper = styled(MenuWrapper)`
padding-top: 0;
height: 100%;
overflow-y: auto;
font-family: "UbisoftSansBold";
font-size: 16px;
`;
