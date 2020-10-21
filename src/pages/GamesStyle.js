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
  /* margin-left: 30px; */
  cursor: default;

  display: flex;
  align-items: center;
  margin-bottom: 13px;

  &:hover {
    filter: brightness(120%);
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
`;
export const GameCard = styled.div`
  cursor: default;
  font-family: "UbisoftSans";
  background: #161a1f;
  color: #b9babb;
  width: 237px;
  height: 357px;
  justify-content: flex-start;
  /* margin: 0 16px; */

  display: flex;
  flex-direction: column;
  &:hover {
    filter: brightness(120%);
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
    font-size: 14px;
  }
`;
