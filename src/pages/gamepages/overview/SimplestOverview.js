import React from 'react'
import { NavLink } from "react-router-dom";

import clubHeader from "../../../assets/club-header.jpg";
import coinUbi from "../../../assets/coin.svg";


import {
    OverviewGrid,
    BannerBox,
    ClubBox,
    ClubWrapper,
    ClubColumn,
    ClubColumnBox,
    RewardColumn,
    RewardColumnBox,
  } from "../GamePagesStyle";
import { gamesDetails } from '../../../global/GamesDetails';
export default function SimplestOverview(props) {
    const gameData = gamesDetails.filter((el)=> el[0] === props.AppID)[0];

    return (
        <div>
              <OverviewGrid style>
      <BannerBox>
          <img alt="" src={gameData[7]} />
          <p>Rainbow Six Siege - Operação Shadow Legacy</p>
          <span>Ver todas notícias</span>
      </BannerBox>
      <ClubBox>
          <header><img alt="" src={clubHeader} /></header>
          <ClubWrapper>
<ClubColumn>
  <header>Desafios Classicos</header>
    <ClubColumnBox>
        <p>12/12</p>
        <span>Concluído</span>
        <div className="icons"> <img alt="" src={coinUbi} /></div>

    </ClubColumnBox>
</ClubColumn>
<ClubColumn>
  <header>Desafios Semanais</header>
    <ClubColumnBox>
        <p>6</p>
        <span>Desafios disponíveis</span>
        <div className="icons"> <img alt="" src={coinUbi} /></div>

    </ClubColumnBox>
</ClubColumn>
<RewardColumn>
  <header>Recompensas</header>
    <RewardColumnBox>
    Você já obteve todas as Recompensas para este jogo
    </RewardColumnBox>
    <NavLink to="/overview">
    Mostrar todas as recompensas
    </NavLink>
</RewardColumn>
          </ClubWrapper>
      </ClubBox>

    </OverviewGrid>
  
        </div>
    )
}
