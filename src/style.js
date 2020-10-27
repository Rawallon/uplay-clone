import styled from "styled-components";
import bgLeft from "./assets/banner-left.png";
import bgRight from "./assets/banner-right.webp";

export const Container = styled.div`
  width: 100%;
  min-width: 1080px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353a45;
`;

export const BrowserWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: center;
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

export const CssWindow = styled.div`
  padding: 2px;
  background: #1c2127;
  width: 80%;
  height: 90%;

  display: flex;
  flex-direction: column;
`;

export const WindowsBar = styled.header`
  color: gray;
  font-weight: 900;
  font-size: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px;
  background-color: #121419;
  width: 100%;
  height: 30px;

  img {
    width: 10px;
    height: auto;
  }
`;

export const Windowsopt = styled.header`
  filter: brightness(70%);
  font-size: 0.9rem;
  display: flex;
  gap: 29px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;

  & svg:hover {
    /* color: white; */
    filter: brightness(140%);
  }
`;
export const WindowHeader = styled.div`
  padding: 22px 40px;
  background: #161a1f;
  color: #0077ee;
  width: 100%;
  height: 60px;
  max-height: 90px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  font-family: "UbisoftSansBold";
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #55aaff;
    margin-left: 30px;
  }

  .active {
    color: white !important;
  }

  a:hover,
  svg:hover,
  & svg:hover {
    /* color: white; */
    filter: brightness(140%);
  }
  svg {
    margin-right: 10px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 43px;
  }

  & svg:hover {
    /* color: white; */
    filter: brightness(140%);
  }
`;

export const ProfilePart = styled.div`
  position: relative;
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-left: 0;
  }
`;
export const ProfilePic = styled.div`
  margin-right: 12px;
  width: 38px;
  height: 38px;
  img {
    width: 38px;
    height: 38px;
    border: 2px solid #0077ee;
  }
`;
export const ProfileData = styled.div`
  color: white;
  margin-right: 16px;
  border-right: 1px solid gray;

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  .m-over {
    font-size: 1rem;
    opacity: 0;
  }

  &:hover .m-over {
    opacity: 1;
  }
  span {
    font-size: 12px;
  }
`;
export const ProfCoins = styled.div`
  font-size: 14px;
  color: white;
  padding-left: 4px;
  /* border-left: 1px solid gray; */

  img {
    border: 0;
    width: 12px;
    height: 12px;
    margin: 0 8px;
  }
`;

export const ProfileHover = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: -20em;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 15px;
  background: #1c2127;
  width: 310px;
  height: 150px;

  display: flex;
  flex-direction: column;

  ${ProfilePart}:hover & {
    z-index: 1;
  }
`;

export const SubProfile = styled(ProfilePic)`
  width: 100%;
  height: 48px;
  margin-left: 0px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 13px;
`;

export const SubProfilePic = styled(ProfilePic)`
  margin-left: 0px;
  margin-right: 13px;
  width: 48px;
  height: 48px;
  img {
    border: 0;
    width: 48px;
    height: 48px;
    border-radius: 5px;
  }
`;
export const SubProfileData = styled(ProfileData)`
  border-right: 0;
  justify-content: space-between;
`;

export const SubProfileSeparator = styled.hr`
  width: 100%;
  height: 1px;
  background: #33383d;
  margin-bottom: 10px;
`;

export const SubProfileBadge = styled.div`
  display: flex;
  width: 100%;
  img {
    padding: 0 15px;
  }
`;
