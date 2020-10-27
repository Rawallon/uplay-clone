import React from "react";
import {
  RewardsGrid,
  AchievBox,
  PropsDesc,
  PropsGrid,
} from "./GamePagesStyle";
import { TextLink } from "../GamePageStyle";
import { FaComment, FaComments, FaFacebook, FaGlobe, FaQuestion } from "react-icons/fa";

export default function Rewards(props) {
  return (
    <PropsGrid>
      <RewardsGrid style>
        <AchievBox unlocked={true}>
          <PropsDesc>
            <TextLink><a href="https://github.com/Rawallon"><FaGlobe /> My Github</a></TextLink>
            <TextLink><a href=""><FaFacebook /> My Github</a></TextLink>
            <TextLink><a href=""><FaComments /> My Github</a></TextLink>
            <TextLink><a href=""><FaQuestion /> My Github</a></TextLink>
            
          </PropsDesc>
        </AchievBox>
      </RewardsGrid>

    </PropsGrid>
  );
}
