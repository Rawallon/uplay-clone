import styled from "styled-components";

export const NewsCard = styled.div`
  overflow: hidden;
  position: relative;
  font-family: "UbisoftSansBold";
  background: #0e151d;
  color: white;
  height: 338px;
  margin: 32px 16px;

  display: flex;
  flex-direction: column;

  &:hover {
    filter: brightness(105%);
  }
  span {
    padding: 16px 20px;
  }

  img {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    height: 280px;
  }
`;

export const Dots = styled.div`
  width: 100%;
  position: absolute;
  top: 77%;
  left: 50%;
    display:flex;
  .active{
    filter:brightness(100%) !important
  }
  .square{
      margin: 5px 5px;
      width: 1%;
      height: 10px;
      background: #fff;
      filter:brightness(50%)
  }
`;
export const LArrow = styled.div`
  z-index: 9999;

  position: absolute;
  top: 40%;
  left: 0;
`;
export const RArrow = styled.div`
  z-index: 9999;
  position: absolute;
  top: 40%;
  right: 0;
`;
