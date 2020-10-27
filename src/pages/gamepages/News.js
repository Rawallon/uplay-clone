import React from 'react'
import { gamesNews } from '../../global/GamesDetails';
import { NewsBox, NewsHalfGrid, NewsGrid } from './GamePagesStyle';

export default function News(props) {
    const gameData = gamesNews.filter((el)=> el[0] === props.appid);
    console.log(gameData);

    return (
        <NewsGrid style>
            <NewsBox>
                <img alt="" src={gameData[0][2]} />
                <p>{gameData[0][1]}</p>
            </NewsBox>
  
            <NewsHalfGrid>
            <NewsBox>
            <img alt="" src={gameData[1][2]} />
                <p>{gameData[1][1]}</p>
            </NewsBox>
            <NewsBox>
            <img alt="" src={gameData[2][2]} />
                <p>{gameData[2][1]}</p>
            </NewsBox>
            </NewsHalfGrid>
            <NewsHalfGrid>
            <NewsBox>
            <img alt="" src={gameData[3][2]} />
                <p>{gameData[3][1]}</p>
            </NewsBox>
            <NewsBox>
            <img alt="" src={gameData[4][2]} />
                <p>{gameData[4][1]}</p>
            </NewsBox>
            </NewsHalfGrid>
      </NewsGrid>
    )
}
