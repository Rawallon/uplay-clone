import React from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { HashRouter, NavLink } from 'react-router-dom';
import { gamesDetails } from '../global/GamesDetails.js';
import {BrowserContainer, GameCard, GameWrapper, GameTitle, GameCat} from './LibraryPageStyle.js';

export default function LibraryPage (props) {
    const { showInstalledGames, setShowInstalledGames, showMyGames, setShowMyGames, showFreeGames, setShowFreeGames} = props;
    return (
        <BrowserContainer>



            <HashRouter basename="/game/">
            <GameCat onClick={()=> setShowInstalledGames(!showInstalledGames)}> { showInstalledGames ? <FaAngleDown /> : <FaAngleRight /> }Instalados</GameCat>
            <GameWrapper showing={showInstalledGames}>
                {showInstalledGames ? (gamesDetails.filter((el) => el[1] === "Installed").map((el,index) => <NavLink to={el[0]+"/overview"}><GameCard key={el[0]}> <img src={el[4]} alt="" /><GameTitle><span>{el[3]}</span></GameTitle></GameCard></NavLink>)) : ""}
            </GameWrapper>

            <GameCat onClick={()=> setShowMyGames(!showMyGames)}> { showMyGames ? <FaAngleDown /> : <FaAngleRight /> }Meus Jogos</GameCat>
            <GameWrapper showing={showMyGames}>
                {showMyGames ? (gamesDetails.filter((el) => el[1] === "My").map((el,index) => <NavLink to={el[0]+"/overview"}><GameCard key={el[0]}> <img src={el[4]} alt="" /><GameTitle><span>{el[3]}</span></GameTitle></GameCard></NavLink>)) : ""}
            </GameWrapper>

            <GameCat onClick={()=> setShowFreeGames(!showFreeGames)}> { showFreeGames ? <FaAngleDown /> : <FaAngleRight /> }Jogos grátis</GameCat>
            <GameWrapper showing={showFreeGames}>
                {showFreeGames ? (gamesDetails.filter((el) => el[1] === "Free").map((el,index) => <NavLink to={el[0]+"/overview"}><GameCard key={el[0]}> <img src={el[4]} alt="" /><GameTitle><span>{el[3]}</span></GameTitle></GameCard></NavLink>)) : ""}
            </GameWrapper>
            </HashRouter>
        </BrowserContainer>
    )
}
