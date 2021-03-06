import React from 'react'

import profPic from "../../../assets/profile.jpg";
import clubHeader from "../../../assets/club-header.jpg";
import coinUbi from "../../../assets/coin.svg";


import { NavLink } from "react-router-dom";

import {
    OverviewGrid,
    HalfGrid,
    Box,
    ProfileList,
    Profile,
    VideoBox,
    BannerBox,
    ClubBox,
    ClubWrapper,
    ClubColumn,
    ClubColumnBox,
    RewardColumn,
    RewardColumnBox,
} from "../GamePagesStyle";
import { gamesDetails } from '../../../global/GamesDetails';
export default function SimpleOverview(props) {
    const gameData = gamesDetails.filter((el) => el[0] === props.AppID)[0];

    return (
        <div>
            <OverviewGrid style>
                <HalfGrid>
                    <Box color="white">
                        <span>Amigos que jogaram este jogo (2):</span>
                        <ProfileList>
                            <Profile status="off">
                                <img alt="" src={profPic} />
                                <div>
                                    <p>Rawallon</p>
                                    <span>Off-line</span>
                                </div>
                            </Profile>
                            <Profile status="on">
                                <img alt="" src={profPic} />
                                <div>
                                    <p>Rawallon</p>
                                    <span> </span>
                                </div>
                            </Profile>
                        </ProfileList>
                    </Box>
                    <VideoBox>
                        <img alt="" src={gameData[6]} />
                        <section className="vtitle">{gameData[7]} </section>
                    </VideoBox>
                </HalfGrid>
                <BannerBox>
                    <img alt="" src={gameData[8]} />
                    <p>{gameData[9]}</p>
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
