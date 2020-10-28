import React, { useState } from "react";
import { clubChallenges } from "../../global/GamesDetails";
import {
  ChallengeRewardsRow,
  ChallengesHalfGrid,
  ChallengesGrid,
  CompletedCheck,
  TextLink,
  ChallengeBox,
  ChallengeRewards,
  ChallengeWrapper,
  ChallengeList,
  ChallengeListItem,
  ChallengeRewardsListRow,
} from "./GamePagesStyle";
import { FaCheck } from "react-icons/fa";

import coinUbi from "../../assets/coin.svg";

export default function Challenges(props) {
  const [selectChallenge, setSelectChallenge] = useState(0);
  const gameData = clubChallenges.filter((el) => el[0] === props.appid);

  return (
    <ChallengesGrid style>
      <TextLink>
        <TextLink deactivated={false}>Clássico</TextLink>
        <TextLink deactivated={true}>Semanalmente</TextLink>
      </TextLink>
      <ChallengesHalfGrid>
        <ChallengeWrapper>
          <TextLink active={true}>Concluido(s) (0/{gameData.length})</TextLink>
        </ChallengeWrapper>
        <ChallengeList>
          {gameData.map((el, index) => {
            return (
              <ChallengeListItem key={index} active={selectChallenge === index} onClick={() => setSelectChallenge(index)} >
                <h1>{el[1]}</h1>
                <h5>{el[2].substr(0, 73)}...</h5>
                <ChallengeRewardsListRow>
                  <img src={coinUbi} alt="" />
                  <img src={coinUbi} alt="" />
                  <div className="completed">
                    <p>
                      <FaCheck /> Concluído
            </p>
                  </div>
                </ChallengeRewardsListRow>
                <hr />
              </ChallengeListItem>
            );
          })}
        </ChallengeList>

        <ChallengeBox>
          <h1>{gameData[selectChallenge][1]}</h1>
          <h5>{gameData[selectChallenge][2]}</h5>
          <CompletedCheck>
            <p>
              <FaCheck /> Concluído
            </p>
            <span>{new Date().toLocaleDateString()}</span>
          </CompletedCheck>
          <hr />
          <ChallengeRewards>
            Prêmio
            <ChallengeRewardsRow>
              <img src={coinUbi} alt="" />
              {gameData[selectChallenge][3]}
            </ChallengeRewardsRow>
            <ChallengeRewardsRow>
              <img src={coinUbi} alt="" />
              {gameData[selectChallenge][4]}
            </ChallengeRewardsRow>
          </ChallengeRewards>
        </ChallengeBox>
      </ChallengesHalfGrid>
    </ChallengesGrid>
  );
}
