import React from "react";
import { FaCheck, FaLock } from "react-icons/fa";
import { clubRewards } from "../../global/GamesDetails";
import {
  AchievGrid,
  AchievBox,
  AchievDesc,
  AchievLocked,
  AchievText,
} from "./GamePagesStyle";

import dummyAchiev1 from '../../assets/achiev.webp'
import dummyAchiev2 from '../../assets/achiev1.webp'

export default function Rewards(props) {
  return (
    <AchievGrid style>
        
      <AchievBox unlocked={true}>
        <div>
          <AchievLocked>
            <FaLock />
          </AchievLocked>
          <img alt="" src={dummyAchiev1} />
        </div>
        <AchievDesc>
          <h1>First Dummy Achievement</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, magna non vestibulum mattis, odio sapien finibus nisl, quis fringilla eros odio vel sapien. </span>
        </AchievDesc>
      </AchievBox>
      <AchievBox unlocked={false}>
        <div>
          <img alt="" src={dummyAchiev2} />
        </div>
        <AchievDesc>
          <h1>Second Dummy Achievement</h1>
          <span>Sed eu diam lectus. Phasellus fringilla consequat est vitae venenatis. Suspendisse porttitor auctor consectetur.</span>
        </AchievDesc>
        <AchievText>
          <div>
            <FaCheck />
            Desbloqueado
          </div>
          <span>{new Date().toLocaleDateString()}</span>
          
        </AchievText>
      </AchievBox>

      
    </AchievGrid>
  );
}
