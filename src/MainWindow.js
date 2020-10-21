import React from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";

import profPic from "./assets/profile.jpg";
import logoUbi from "./assets/mini-logo.svg";
import coinUbi from "./assets/coin.svg";
import badgeUbi from "./assets/badge-placeholder.svg";
import {
  BrowserWrapper,
  Container,
  CssWindow,
  Windowsopt,
  ProfileHover,
  WindowHeader,
  HeaderLeft,
  HeaderRight,
  WindowsBar,
  ProfilePart,
  ProfileData,
  ProfilePic,
  ProfCoins,
  SubProfile,
  SubProfilePic,
  SubProfileData,
  SubProfileSeparator,
  SubProfileBadge,
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
import GamesWindow from "./pages/GamesWindow";

export default function MainWindow() {
  return (
    <Container>
      <CssWindow>
        <WindowsBar>
          <img src={logoUbi} alt="" />
          UPLAY
          <Windowsopt>
            <FaWindowMinimize />
            <FaRegSquare />
            <FaTimes />
          </Windowsopt>
        </WindowsBar>
        <WindowHeader>
          <HeaderLeft>
            <FaBars size={18} />
            <HashRouter basename="/">
              <NavLink to="/news">Notícias</NavLink>
              <NavLink to="/games">Jogos</NavLink>
              <NavLink to="/store">Store</NavLink>
              <a href="https://github.com/Rawallon">My Github</a>
            </HashRouter>
          </HeaderLeft>

          <HeaderRight>
            <FaComment size={20} />
            <FaUserFriends size={20} />
            <FaHeart size={20} />
            <FaShoppingCart size={20} />
            <ProfilePart>
              <ProfilePic>
                <img src={profPic} alt="" />
              </ProfilePic>
              <ProfileData>
                <p>
                  LegitNightOwl
                  <span className="m-over">
                    <FaSortDown />
                  </span>
                </p>
                <span>Nível 31</span>
              </ProfileData>
              <ProfileHover>
              <SubProfile>
                <SubProfilePic>
                    <img src={profPic} alt="" />
                  </SubProfilePic>
                  <SubProfileData>
                    <p>LegitNightOwl</p>
                    <span>Nível 31</span>
                  </SubProfileData>
                </SubProfile>
                <SubProfileSeparator />
                <SubProfileBadge>
                  <img src={badgeUbi} alt=""/>
                  <img src={badgeUbi} alt=""/>
                  <img src={badgeUbi} alt=""/>
                  <img src={badgeUbi} alt=""/>
                </SubProfileBadge>
              </ProfileHover>

              <ProfCoins>
                <img src={coinUbi} alt="" />
                512
              </ProfCoins>
            </ProfilePart>
          </HeaderRight>
        </WindowHeader>

        <BrowserWrapper>
          <HashRouter>
            <Switch>
              <Route path="/news" component={BrowserWindow} />
              <Route path="/games" component={GamesWindow} />
              <Route path="/slider" component={Slider} />
              <Route component={BrowserWindow} />
            </Switch>
          </HashRouter>
        </BrowserWrapper>
      </CssWindow>
    </Container>
  );
}
