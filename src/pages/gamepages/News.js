import React from 'react'
import { gamesDetails } from '../../global/GamesDetails';
import { NewsBox, NewsHalfGrid, NewsGrid } from './GamePagesStyle';

export default function News(props) {
    const gameData = gamesDetails.filter((el)=> el[0] === props.appid)[0];

    return (
        <div>
        <NewsGrid style>
            <NewsBox>
                <img src={gameData[7]} />
                <p>Rainbow Six Siege - Operação Shadow Legacy</p>
            </NewsBox>
            <NewsHalfGrid>
            <NewsBox>
                <img src={gameData[7]} />
                <p>Rainbow Six Siege - Operação Shadow Legacy</p>
            </NewsBox>
            <NewsBox>
                <img src={gameData[7]} />
                <p>Rainbow Six Siege - Operação Shadow Legacy</p>
            </NewsBox>
            </NewsHalfGrid>
            <NewsHalfGrid>
            <NewsBox>
                <img src={gameData[7]} />
                <p>Rainbow Six Siege - Operação Shadow Legacy</p>
            </NewsBox>
            <NewsBox>
                <img src={gameData[7]} />
                <p>Rainbow Six Siege - Operação Shadow Legacy</p>
            </NewsBox>
            </NewsHalfGrid>
      </NewsGrid>
        </div>
    )
}
