import styled from "styled-components";
export const BrowserContainer = styled.div`
  padding: 32px 8% 0 40px;
  width: 100%;
  height: 100%;
`;

export const GameCat = styled.section`
  font-family: "UbisoftSansBold";
  text-decoration: none;
  color: #55aaff;

  display: flex;
  align-items: center;
  margin-bottom: 13px;

  svg:hover,
  &:hover {
    filter: brightness(105%);
  }
  svg{
    margin-right:25px;
  }
  input:focus{
    
    border: 1px solid #BBBDBF;
    background: #55595D;
    color:#fff;
  }
  input:hover{
    border: 1px solid #505358;
  }
  input{
    border: 1px solid #2F3339;
    background: #2F3339;
    padding: 7px 10px;
    border-radius: 3px;
  }
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  background: #33383d;
  margin-bottom: 10px;
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: ${(props) => (props.showing ? "16px 0;" : "0;")};
  border-top: ${(props) => (props.showing ? "1px solid #33383D;" : "0;")};
  a{
    text-decoration:none;
  }
`;
export const GameCard = styled.div`
  font-family: "UbisoftSans";
  background: #161a1f;
  color: #b9babb;
  width: 237px;
  height: 357px;
  justify-content: flex-start;

  display: flex;
  flex-direction: column;
  &:hover {
    filter: brightness(105%);
  }
  img {
    object-fit: fill;
    object-position: 50% 20%;
    width: 237px;
    height: 277px;
  }
`;
export const GameTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  span {
    padding: 0 10px;
  }
`;
