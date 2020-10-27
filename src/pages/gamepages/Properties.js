import React from "react";
import { FaCheck, FaLock } from "react-icons/fa";
import {
  RewardsGrid,
  AchievBox,
  RewardBtn,
  PropsDesc,
  PropsGrid,
} from "./GamePagesStyle";

export default function Rewards(props) {
  return (
    <PropsGrid>
      <RewardsGrid style>
        <AchievBox unlocked={true}>
          <PropsDesc>
            <h1>Desbloqueie uma versão teste</h1>
            <span>
              Se você tem uma senha para uma versão teste, clique no botão
              abaixo e insira a senha para receber acesso a essa versão
            </span>
            <RewardBtn>
              <button>Desbloqueie uma versão teste</button>
            </RewardBtn>
            <h1></h1>
          </PropsDesc>
        </AchievBox>
      </RewardsGrid>

      <RewardsGrid style>
        <AchievBox unlocked={true}>
          <PropsDesc>
            <h1>
              Essa ação permite que você especifique argumentos de linha de
              comando adicionais ao iniciar o seu jogo
            </h1>
            <RewardBtn>
              <button>Desbloqueie uma versão teste</button>
            </RewardBtn>
          </PropsDesc>
        </AchievBox>
      </RewardsGrid>
    </PropsGrid>
  );
}
