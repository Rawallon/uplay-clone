import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { clubRewards } from '../../global/GamesDetails';
import { RewardsGrid, RewardBox, RewardDesc, CheckedReward, RewardBtn } from './GamePagesStyle';
import coinUbi from "../../assets/coin.svg";

export default function Rewards(props) {
    const gameData = clubRewards.filter((el) => el[0] === props.appid);
    return (
        <RewardsGrid style>
            {
                gameData.map((el, index) => {
                    return (
                        <RewardBox>
                            <div>
                                {
                                    (el[3] === "download") ?
                                        (<CheckedReward><FaCheck /></CheckedReward>)
                                        :
                                        ""
                                }

                                <img alt="" src={el[5]} />
                            </div>
                            <RewardDesc>
                                <h1>{el[1]}</h1>
                                <span>{el[2]}</span>
                                {
                                    (el[3] === "download") ?
                                        (<RewardBtn><button>Baixar</button></RewardBtn>)
                                        :
                                        (<RewardBtn><button>Get it for <img src={coinUbi} alt="" /> {el[4]}</button></RewardBtn>)
                                }
                            </RewardDesc>
                        </RewardBox>
                    );
                })
            }
        </RewardsGrid>
    )
}
