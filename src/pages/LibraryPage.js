import React, { Component } from 'react';
import { FaAngleDown, FaAngleRight, FaBars, FaThLarge } from 'react-icons/fa';
import { NavLink, withRouter } from 'react-router-dom';
import { gamesDetails } from '../global/GamesDetails.js';
import {BrowserContainer, GameCard, GameWrapper, GameTitle, GameCat} from './LibraryPageStyle.js';

class LibraryPage extends Component {
    render()
    {
    const { showInstalledGames, setShowInstalledGames, showMyGames, setShowMyGames, showFreeGames, setShowFreeGames} = this.props;

    return (
            <BrowserContainer>
                <GameCat >
                    <FaThLarge size={20}/>
                    <FaBars size={20} />
                    <FaBars size={20} />
                    <input type="text" placeholder="Search"></input>
                </GameCat>

                <GameCat onClick={()=> setShowInstalledGames(!showInstalledGames)}> { showInstalledGames ? <FaAngleDown /> : <FaAngleRight /> }Instalados</GameCat>
                <GameWrapper showing={showInstalledGames}>
                    {showInstalledGames ? (gamesDetails.filter((el) => el[1] === "Installed").map((el,index) => <NavLink to={"/game/"+el[0]+"/overview"}><GameCard key={el[0]}> <img src={el[4]} alt="" /><GameTitle><span>{el[3]}</span></GameTitle></GameCard></NavLink>)) : ""}
                </GameWrapper>

                <GameCat onClick={()=> setShowMyGames(!showMyGames)}> { showMyGames ? <FaAngleDown /> : <FaAngleRight /> }Meus Jogos</GameCat>
                <GameWrapper showing={showMyGames}>
                    {showMyGames ? (gamesDetails.filter((el) => el[1] === "My").map((el,index) => <NavLink to={"/game/"+el[0]+"/overview"}><GameCard key={el[0]}> <img src={el[4]} alt="" /><GameTitle><span>{el[3]}</span></GameTitle></GameCard></NavLink>)) : ""}
                </GameWrapper>

                <GameCat onClick={()=> setShowFreeGames(!showFreeGames)}> { showFreeGames ? <FaAngleDown /> : <FaAngleRight /> }Jogos grátis</GameCat>
                <GameWrapper showing={showFreeGames}>
                    {showFreeGames ? (gamesDetails.filter((el) => el[1] === "Free").map((el,index) => <NavLink to={"/game/"+el[0]+"/overview"}><GameCard key={el[0]}> <img src={el[4]} alt="" /><GameTitle><span>{el[3]}</span></GameTitle></GameCard></NavLink>)) : ""}
                </GameWrapper>
            </BrowserContainer>
    )
    }
}

export default withRouter(LibraryPage)

