import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

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

import NewsPage from "./pages/NewsPage";
import Slider from "./components/Slider";
import LibraryPage from "./pages/LibraryPage";
import GamePage from "./pages/GamePage";
import StorePage from "./pages/StorePage";

export default function MainWindow() {
  const [showInstalledGames, setShowInstalledGames] = useState(0);
  const [showMyGames, setShowMyGames] = useState(0);
  const [showFreeGames, setShowFreeGames] = useState(0);
  return (
    <BrowserRouter>
      <div>
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
                <NavLink to="/news">Notícias</NavLink>
                <NavLink to="/games">Jogos</NavLink>
                <NavLink to="/store">Store</NavLink>
                <a href="https://github.com/Rawallon">My Github</a>
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
                      <img src={badgeUbi} alt="" />
                      <img src={badgeUbi} alt="" />
                      <img src={badgeUbi} alt="" />
                      <img src={badgeUbi} alt="" />
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
              <Switch>
                <Route path="/store" component={StorePage} />
                <Route path="/news" component={NewsPage} />
                <Route
                  path="/games"
                  render={(props) => (
                    <LibraryPage
                      showInstalledGames={showInstalledGames}
                      setShowInstalledGames={setShowInstalledGames}
                      showMyGames={showMyGames}
                      setShowMyGames={setShowMyGames}
                      showFreeGames={showFreeGames}
                      setShowFreeGames={setShowFreeGames}
                    />
                  )}
                />
                <Route path="/game/:appid/:page" component={GamePage} />
                <Route path="/game/:appid" component={GamePage} />
                <Route path="/slider" component={Slider} />
                <Route component={NewsPage} />
              </Switch>
            </BrowserWrapper>
          </CssWindow>
        </Container>
      </div>
    </BrowserRouter>
  );
}
