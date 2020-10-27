import styled from "styled-components";

export const BrowserContainer = styled.div`
  /* padding: 0 9% 0 9%; */
  /* width: 100%;
  height: 100%; */
  color: #0077EE;
  max-width: 1500px;
  min-width: 900px;
  
`;
export const StoreContainer = styled(BrowserContainer)`
width:100%;
  background: #000;
  display:flex;
  align-content:center;
  justify-content:center;
  img{
    width:15%;
    height:auto;
  }
`;
export const PageWrapper = styled.div`
  height: 100%;
  width:100%;
  display: grid;
  /* grid-template-columns: 0.65fr 2fr; */
  grid-template-columns: minmax(200px,0.3fr) minmax(1080px,1fr);
  gap: 40px;
`;
export const MenuWrapper = styled.div`
  padding-top: 40px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 300px;
  height: 35vh;
  justify-self: end;
  font-size: 13px;
`;
export const TextLink = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  
  svg {
    margin-right: 14px;
  }

  img {
    width: 100%;
  }

  button {
    transition: filter 0.3s linear;
    margin-bottom: -12px;
    padding: 0 13px;
    font-size: 20px;
    font-family: "UbisoftSansBold";
    color: white;
    width: 100%;
    height: 40px;
    background: #0077EE;
    border-radius: 3px;
  }

  a {
    transition: color 0.3s ease-in-out, filter 0.3s linear;
    display: flex;
    align-items: center;
    color: ${(props) => (props.active ? "#FFF;" : "#55AAFF;")};
    text-decoration: none;
  }
  a:hover,
  button:hover {
    filter: brightness(120%);
  }
`;

export const SubTextLink = styled(TextLink)`
  margin-bottom: 25px;
  &:hover {
    filter: brightness(120%);
  }
`;

export const SubMenuWrapper = styled(MenuWrapper)`
  padding-top: 0;
  height: 100%;
  overflow-y: auto;
  font-family: "UbisoftSansBold";
  font-size: 16px;
`;
