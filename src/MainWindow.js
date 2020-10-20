import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import profPic from "./assets/profile.jpg";
import logoUbi from "./assets/mini-logo.svg";
import coinUbi from "./assets/coin.svg";
import {
  BrowserWrapper,
  Container,
  CssWindow,
  WindowHeader,
  WindowsBar,
} from "./style";
import {
  FaWindowMinimize,
  FaRegSquare,
  FaTimes,
  FaBars,
  FaComment,
  FaUserFriends,
  FaHeart,
  FaShoppingCart,
  FaSortDown,
} from "react-icons/fa";

import BrowserWindow from "./pages/BrowserWindow";
import Slider from "./components/Slider";

export default function MainWindow() {
  return (
    <Container>
      <CssWindow>
        <WindowsBar>
          <img src={logoUbi} alt="" />
          UPLAY
          <div className="windowsopt">
            <FaWindowMinimize />
            <FaRegSquare />
            <FaTimes />
          </div>
        </WindowsBar>
        <WindowHeader>
          <div className="headerMenu">
            <FaBars size={18} />
            <span className="active">Notícias</span>
            <span>Jogos</span>
            <span>Store</span>
            <span>Discover the XX PC specs</span>
          </div>

          <div className="headerIcons">
            <FaComment size={20} />
            <FaUserFriends size={20} />
            <FaHeart size={20} />
            <FaShoppingCart size={20} />
            <div className="profile">
              <div className="profPicture">
                <img src={profPic} alt="" />
              </div>
              <div className="profData">
                <p>
                  LegitNightOwl
                  <span className="m-over">
                    <FaSortDown />
                  </span>
                </p>
                <span>Nível 31</span>
              </div>
              <div className="profCoins">
                <img src={coinUbi} alt="" />
                512
              </div>
            </div>
          </div>
        </WindowHeader>

        <BrowserWrapper>
          <BrowserRouter>
            <Route path="/news" component={BrowserWindow} />
            <Route exact path="/" component={BrowserWindow} />
            <Route path="/slider" component={Slider} />
          </BrowserRouter>
        </BrowserWrapper>

      </CssWindow>
    </Container>
  );
}
