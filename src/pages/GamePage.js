import React from 'react'
import { FaArrowLeft, FaBullseye, FaGamepad, FaGift, FaMedal, FaNewspaper, FaQuestion, FaWrench } from 'react-icons/fa';
import { HashRouter, NavLink } from 'react-router-dom';
import { gamesDetails } from '../global/GamesDetails.js';
import News from './gamepages/News.js';
import Overview from './gamepages/Overview.js';
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
            <HashRouter basename="/">
                <TextLink><NavLink to="/games"><FaArrowLeft /> Voltar para Jogos</NavLink></TextLink>
            </HashRouter>
                <TextLink><img src={gameData[5]} alt="" /></TextLink>
                <TextLink><button>{buttonText()}</button></TextLink>
                <SubTextLink>{(gameData[1] === 'My' && "Localizar jogo instalado")}</SubTextLink>
                <SubTextLink>{(((gameData[1] === 'Installed') || (gameData[1] === 'My')) && "Mostrar Chave")}</SubTextLink>
            <SubMenuWrapper>
            <HashRouter basename={"/game/"+props.match.params.appid+"/"}>
                <TextLink><NavLink to="overview"><FaGamepad /> Visão geral</NavLink></TextLink>
                <TextLink><NavLink to="news"><FaNewspaper /> Notícias do jogo</NavLink></TextLink>
                <TextLink><NavLink to="challenges"> <FaBullseye /> Desafios do Club </NavLink></TextLink>
                <TextLink><NavLink to="rewards"> <FaGift /> Recompensas </NavLink></TextLink>
                <TextLink><NavLink to="achievements"> <FaMedal /> Consquistas</NavLink></TextLink>
                {/* <TextLink><NavLink to="/games"> <FaShoppingCart /> Store</NavLink></TextLink> */}
                <TextLink><NavLink to="props"> <FaWrench /> Propriedades</NavLink></TextLink>
                <TextLink><NavLink to="helpdesk"> <FaQuestion /> Suporte</NavLink></TextLink>
            </HashRouter>

            </SubMenuWrapper>
            </MenuWrapper>
            {
            (props.match.params.page === "overview" && <Overview appid={gameData[0]} style={gameData[2]} />)||
            (props.match.params.page === "news" && <News appid={gameData[0]} />)
            }
        </PageWrapper>
        </BrowserContainer>
    )
}
