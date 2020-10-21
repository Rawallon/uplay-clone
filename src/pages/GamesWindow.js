import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import {BrowserContainer, GameCard, GameWrapper, GameTitle, GameCat, Separator, active} from './GamesStyle.js';

export default function GamesWindow() {
    const [showInstalledGames, setShowInstalledGames] = useState(0)
    const [showMyGames, setShowMyGames] = useState(0)
    const [showFreeGames, setShowFreeGames] = useState(0)

    const gamesList = [
        // Everything taken from: https://store.ubi.com/ofertas//
        // ["Cat","Name","IMG"]
        ["My","Assassin's Creed IV Black Flag","https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw7f2b5ed1/images/large/56c4948088a7e300458b46b0.jpg?sw=341&sh=450&sm=fit"],
        ["My", "Rayman Legends", "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwa8b6d5b5/images/large/56c4948888a7e300458b47da.jpg?sw=300&sh=395&sm=fit"],
        ["Installed","Tom Clancy's The Division™ 2","https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/pt_BR/dw4beceb2e/images/large/5b06a3984e0165fa45ffdcc5.jpg?sw=300&sh=395&sm=fit"],
        ["Free","Tom Clancy's Ghost Recon Wildlands","https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/pt_BR/dw14a26c6d/images/large/574474b488a7e3b8638b456a.jpg?sw=341&sh=450&sm=fit"],
        ]


    return (
        <BrowserContainer>
            <GameCat onClick={()=> setShowInstalledGames(!showInstalledGames)}> { showInstalledGames ? <FaAngleDown /> : <FaAngleRight /> }Instalados</GameCat>
            <GameWrapper showing={showInstalledGames}>
                {showInstalledGames ? (gamesList.filter((el) => el[0] === "Installed").map((el,index) => <GameCard key={index}> <img src={el[2]} alt="" /><GameTitle><span>{el[1]}</span></GameTitle></GameCard>)) : ""}
            </GameWrapper>

            <GameCat onClick={()=> setShowMyGames(!showMyGames)}> { showMyGames ? <FaAngleDown /> : <FaAngleRight /> }Meus Jogos</GameCat>
            <GameWrapper showing={showMyGames}>
                {showMyGames ? (gamesList.filter((el) => el[0] === "My").map((el,index) => <GameCard key={index}> <img src={el[2]} alt="" /><GameTitle><span>{el[1]}</span></GameTitle></GameCard>)) : ""}
            </GameWrapper>

            <GameCat onClick={()=> setShowFreeGames(!showFreeGames)}> { showFreeGames ? <FaAngleDown /> : <FaAngleRight /> }Jogos grátis</GameCat>
            <GameWrapper showing={showFreeGames}>
                {showFreeGames ? (gamesList.filter((el) => el[0] === "Free").map((el,index) => <GameCard key={index}> <img src={el[2]} alt="" /><GameTitle><span>{el[1]}</span></GameTitle></GameCard>)) : ""}
            </GameWrapper>
        </BrowserContainer>
    )
}
