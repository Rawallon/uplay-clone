import React from 'react'
import { FaArrowLeft, FaBullseye, FaGamepad, FaGift, FaMedal, FaNewspaper, FaQuestion, FaWrench } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { gamesDetails } from '../global/GamesDetails.js';
import Challenges from './gamepages/Challenges.js';
import News from './gamepages/News.js';
import Overview from './gamepages/Overview.js';
import Achievements from './gamepages/Achievement.js';
import Rewards from './gamepages/Rewards.js';
import Properties from './gamepages/Properties.js';
import Help from './gamepages/Help.js';

import { PageWrapper,BrowserContainer,TextLink,MenuWrapper,SubMenuWrapper,SubTextLink } from './GamePageStyle.js';

export default function GamePage(props) {
    const AppID = props.match.params.appid;
    const gameData = gamesDetails.filter((el)=> el[0] === AppID)[0];
    const buttonText = () => {
        if(gameData[1] === 'Installed')
            return "Jogar";
        else if(gameData[1] === 'My') 
            return "Baixar"; 
        else if(gameData[1] === 'Free') 
            return "Adicionar aos Meus Jogos";
    }
    return (
        <BrowserContainer>
        <PageWrapper>
            <MenuWrapper>
                <TextLink><NavLink to={"/games"}><FaArrowLeft /> Voltar para Jogos</NavLink></TextLink>
                <TextLink><img src={gameData[5]} alt="" /></TextLink>
                <TextLink><button>{buttonText()}</button></TextLink>
                <SubTextLink>{(gameData[1] === 'My' && "Localizar jogo instalado")}</SubTextLink>
                <SubTextLink>{(((gameData[1] === 'Installed') || (gameData[1] === 'My')) && "Mostrar Chave")}</SubTextLink>
            <SubMenuWrapper>
                <TextLink active={props.match.params.page === "overview"}><NavLink to={"overview"}><FaGamepad /> Visão geral</NavLink></TextLink>
                <TextLink active={props.match.params.page === "news"}><NavLink to={"news"}><FaNewspaper /> Notícias do jogo</NavLink></TextLink>
                <TextLink active={props.match.params.page === "challenges"}><NavLink to={"challenges"}> <FaBullseye /> Desafios do Club </NavLink></TextLink>
                <TextLink active={props.match.params.page === "rewards"}><NavLink to={"rewards"}> <FaGift /> Recompensas </NavLink></TextLink>
                <TextLink active={props.match.params.page === "achievements"}><NavLink to={"achievements"}> <FaMedal /> Consquistas</NavLink></TextLink>
                <TextLink active={props.match.params.page === "props"}><NavLink to={"props"}> <FaWrench /> Propriedades</NavLink></TextLink>
                <TextLink active={props.match.params.page === "help"}><NavLink to={"help"}> <FaQuestion /> Suporte</NavLink></TextLink>

            </SubMenuWrapper>
            </MenuWrapper>
            {
            (props.match.params.page === "overview" && <Overview appid={gameData[0]} style={gameData[2]} />)||
            (props.match.params.page === "news" && <News appid={gameData[0]} />) ||
            (props.match.params.page === "challenges" && <Challenges appid={gameData[0]} />) ||
            (props.match.params.page === "rewards" && <Rewards appid={gameData[0]} />) ||
            (props.match.params.page === "achievements" && <Achievements appid={gameData[0]} />) ||
            (props.match.params.page === "props" && <Properties appid={gameData[0]} />) ||
            (props.match.params.page === "help" && <Help appid={gameData[0]} />)
            }
        </PageWrapper>
        </BrowserContainer>
    )
}
