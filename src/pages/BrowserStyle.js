import styled from "styled-components";
import bgLeft from "../assets/banner-left.png";
import bgRight from "../assets/banner-right.webp";

export const BrowserWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  padding: 0 90px;
  display: flex;
  justify-content: center;
  ${props => props.store &&`
  background: #000;
  `}
  ${props => props.news &&`
  background: url(${bgLeft}),
    url(${bgRight}),
    radial-gradient(
      52.23% 343.96% at 98.68% -135.12%,
      rgba(175, 0, 105, 0.4) 0,
      rgba(172, 0, 165, 0) 100%
    ),
    radial-gradient(
      85.24% 284.66% at 94.31% 100%,
      rgba(104, 0, 185, 0.4) 0,
      rgba(57, 19, 87, 0) 100%
    ),
    radial-gradient(
      24.41% 110.74% at 41.22% -2.5%,
      rgba(1, 8, 73, 0.5) 0,
      rgba(5, 0, 36, 0) 100%
    ),
    radial-gradient(
      45.29% 126.18% at 0 95.83%,
      #123f54 0,
      rgba(19, 64, 87, 0) 100%
    ),
    radial-gradient(
      18.98% 65.19% at -0.42% -1.39%,
      #005740 0,
      rgba(0, 36, 26, 0) 100%
    ),
    linear-gradient(0deg, #000, #000);
  background-position: 0 0, 100% 100%;
  background-repeat: no-repeat;
  `}
`;


export const Newscard = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    margin-top: 40px;
  `;
export const BrowserContainer = styled.div`
  /* padding: 32px 8% 0 8%; */
  width: 100%;
  height: 100%;

`;

export const NewsCard = styled.div`
  font-family: "UbisoftSansBold";
  background: #0e151d;
  color: white;
  width: 50%;
  height: 175px;
  margin: 0 16px;

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
    object-position: 50% 20%;
    width: 100%;
    height: 119px;
  }
`;

export const NewsWrapper = styled.div`
  margin: 32px 16px;
  font-family: "UbisoftSansBold";
  color: #fff;
  display: grid;
`;

export const RecentNews = styled.div`
  font-family: "UbisoftSansBold";
  color: #fff;
  display: grid;
  grid-template-columns: 3fr 1fr;

  header {
    display: grid;
    grid-template-columns: 4.5fr 1fr;
    margin-bottom: 20px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      select {
        padding: 2px;
        font-size: 11px;
        background: #2e3844;
        color: gray;
        border-radius: 3px;
      }
    }
  }
  .detail {
    font-family: "UbisoftSans";
    color: gray;
    font-size: 11px;
  }
`;

export const RecentNewsGrid = styled.div`
  display: grid;
  grid-column: 1/3;
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
export const RecentNewsWrapper = styled.div`
display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column: 1/4;
  grid-row: 1/5;
`;

export const RecentNewsCard = styled(NewsCard)`
  box-sizing: border-box;
  margin: 0 0;
  width: 100%;
  /* height: 298px; */
  height: 100%;
  img {
    height: 197px;
  }
  span {
    font-size: 1.2rem;
  }
  .detail {
    font-size: 1rem;
  }
  .content{
      height: 100%;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
  }
`;
export const FeaturedNews = styled.div`
  padding-left: 30px;
  grid-column: 2/3;
  grid-row: 1;
  font-family: "UbisoftSansBold";
  color: #fff;
  display: grid;
`;

export const FeaturedNewsCard = styled(RecentNewsCard)`
background: #2D353F;
  grid-column: 4/5;
  span {
    font-size: 1.2rem;
  }
`;
