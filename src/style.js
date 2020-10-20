import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 1080px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353a45;
`;

export const CssWindow = styled.div`
  padding: 2px;
  background: #1c2127;
  width: 80%;
  height: 80%;

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

  .windowsopt svg:hover {
    /* color: white; */
    filter: brightness(140%);
  }
  .windowsopt {
    filter: brightness(70%);
    font-size: 0.9rem;
    display: flex;
    gap: 29px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: auto;
  }
`;

export const WindowHeader = styled.div`
  padding: 22px 40px;
  background: #161a1f;
  color: #55aaff;
  width: 100%;
  height: 60px;
  max-height: 90px;
  display: flex;
  justify-content: space-between;

  .active {
    color: white;
  }
  .headerMenu {
    font-family: "UbisoftSansBold";
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headerMenu span:hover,
  .headerMenu svg:hover,
  .headerIcons svg:hover {
    /* color: white; */
    filter: brightness(140%);
  }
  .headerMenu svg {
    margin-right: 10px;
    cursor: default;
  }
  .headerMenu span {
    margin-left: 30px;
    cursor: default;
  }

  .headerIcons > svg {
    margin-left: 43px;
    cursor: default;
  }
  .headerIcons {
    display: flex;
    align-items: center;
    justify-content: center;
    .profile {
      margin-left: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .profPicture img {
      width: 34px;
      border: 2px solid #55aaff;
    }
    .profPicture {
      margin-right: 12px;
    }
    .profData {
      color: white;
      margin-right: 16px;
      border-right: 1px solid gray;
      .m-over {
        font-size: 1rem;
        opacity: 0;
      }
    }
    .profData:hover .m-over {
      opacity: 1;
    }
    .profData p {
      cursor: default;
    }
    .profData span {
      font-size: 12px;
      cursor: default;
    }
    .profCoins {
      cursor: default;
      font-size: 14px;
      color: white;
      padding-left: 4px;
      /* border-left: 1px solid gray; */
    }
    .profCoins img {
      width: 12px;
      height: 12px;
      margin: 0 8px;
    }
  }
`;
export const BrowserWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`;
