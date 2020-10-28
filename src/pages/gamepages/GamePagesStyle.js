import styled from "styled-components";

export const OverviewGrid = styled.div`
  max-width: 1100px;
  display: grid;
  gap: 20px;
  padding: 40px 40px 0 0;
  margin-bottom: 20px;
  grid-template-columns: 1fr;
`;

export const NewsGrid = styled(OverviewGrid)`
  gap: 40px;
`;
export const RewardsGrid = styled(OverviewGrid)`
  padding: 40px 30px 0 0;

display:flex;
flex-direction:column;
  gap: 0px;
  width:100%;
`;
export const AchievGrid = styled(RewardsGrid)`
  padding: 40px 25px 0 0;
`;
export const PropsGrid = styled(RewardsGrid)`
  padding: 40px 0px 0 0;
`;
export const ChallengesGrid = styled(OverviewGrid)`
  gap: 0px;
  grid-template-rows: 0.1fr 1fr;
`;

export const HalfGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;
export const NewsHalfGrid = styled(HalfGrid)`
  gap: 40px;
`;
export const ChallengesHalfGrid = styled(HalfGrid)`
  grid-template-rows: 0.1fr 1fr;
  gap: 0px;
`;

export const Box = styled.div`
  width: 100%;
  padding: 24px 20px;
  background: #12151a;
  color: ${(props) => props.color};
`;
export const RewardBox = styled.div`
  position:relative;
  display: grid;
  grid-template-columns: 0.35fr 1fr;
  width: 100%;
  padding: 20px 20px;
  background: ${props => props.unlocked ? "#13161A" : "#090A0C"};
  border-bottom: 2px solid #1c2127;
  img{
    width:100%;
    min-width: 180px;
    max-width: 240px;
    height:auto;
  }
`;

export const PropBox = styled(RewardBox)`
  grid-template-columns:  4fr 1fr;
  overflow: hidden;
  section{
    width:10vw;
    
  }
`;
export const AchievBox = styled(RewardBox)`

  grid-template-columns:  fit-content(100%) 1fr fit-content(100%);
  img{
    margin-right: 20px;
    width: 62px;
    height:62px;
    min-width: 62px;
  }
`;


export const AchievLocked = styled.div`
position:absolute;
background: rgba(18,22,16,0.6);
width: 62px;
height:62px;
display:flex;
justify-content:center;
align-items:center;
svg{
  fill:white;
}
`;
export const CheckedReward = styled.div`
position:absolute;
background: #22BB11;
width: 36px;
height:31px;
display:flex;
justify-content:center;
align-items:center;
svg{
  fill:white;
}
`;

export const RewardDesc = styled.div`
  display: flex;
flex-direction: column;
h1{
  color: white;
  font-size: 20px;
  margin-bottom:20px;
}
span{ 
  margin-bottom:20px;
  color: #C4C4C4;
  font-size: 13px;
}
`;

export const PropsDesc = styled.div`
display: flex;
flex-direction: column;
padding: 2px 0;
h1{
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin-bottom:16px;
}
span{ 
  margin-bottom:15px;
  color: #C4C4C4;
  font-size: 14px;
}
`;
export const AchievDesc = styled(RewardDesc)`
justify-content: space-between;
h1{
  margin-bottom:0px;
}
span{ 
  margin-bottom:0px;
}
`;

export const AchievText = styled.div`
display:grid;
align-content:space-between;
height: 80%;
span{
  font-size: 13px;
}
svg{
  margin-right:10px;
}
`;

export const CompletedCheck = styled.div`
  display: flex;
  color: #0cde89;
  flex-direction: column;
  font-size: 20px;
  margin-top: 25px;
  span {
    margin-top: 12px;
    color: #949ba2;
    font-size: 11px;
  }
`;

export const ChallengeBox = styled(Box)`
  position: relative;
  padding: 16px;
  margin-left: 20px;
  background: #1f2e3d;
  h1 {
    font-size: 16px;
    color: white;
    line-height: 30px;
  }

  h5 {
    color: #949ba2;
    font-size: 14px;
  }

  hr {
    width: auto;
    border: 1px solid #1c2127;
    margin: 18px -20px;
  }
`;
export const VideoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  img {
    width: 100%;
    height: auto;
  }
  .vtitle {
    margin-bottom: 20px;
  }
`;
export const NewsBox = styled(VideoBox)`
  padding: 0px;
  img {
    max-height: 255px;
    margin-bottom: 15px;
    object-fit: cover;
  }

  p {
    font-family: "UbisoftSansBold";
    margin-left: 20px;
    margin-bottom: 20px;
  }
`;
export const BannerBox = styled(VideoBox)`
  img {
    object-fit: cover;
    max-height: 255px;
    margin-bottom: 15px;
  }
  p {
    font-family: "UbisoftSansBold";
    margin-bottom: 20px;
  }
  span {
    margin-bottom: 25px;
  }
`;
export const MiniStats = styled.div`
  padding: 10px 20px;
  background: #12151a;
  color: white;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  section {
  }
`;
export const ClubBox = styled(VideoBox)`
  padding: 0 0px 20px 0px;
  header {
    width: 100%;
    height: 45px;
    background: #030404;
    display: flex;
    justify-content: center;
    img {
      object-fit: none;
      width: 100%;
      height: auto;
    }
  }
`;
export const ClubWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 25px 20px 20px;
`;
export const ClubColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  header {
    display: flex;
    justify-content: start;
    align-items: center;
    background: transparent;
    padding: 30px 0;
  }
`;

export const ClubColumnBox = styled.div`
  background: #0b0d10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 94%;
  height: 185px;
  p {
    font-size: 40px;
    margin-bottom: 12px;
  }
  span {
    font-size: 16px;
    color: #9d9e9f;
    margin-bottom: 30px;
  }
  .icons {
    height: 25px;
    width: 100%;
    margin-bottom: 15px;
    img {
      width: 100%;
      height: 25px;
    }
  }
`;

export const RewardColumn = styled(ClubColumn)`
  margin-top: 25px;
  padding-left: 20px;
  border-left: 1px solid gray;
  a {
    color: #0077EE;
    text-decoration: none;
  }
`;

export const RewardColumnBox = styled(ClubColumnBox)`
  justify-content: center;
  text-align: center;
  background: transparent;
`;
export const RewardBtn = styled.div`
  button {
    transition: filter 0.3s linear;
    margin-bottom: -12px;
    padding: 5px 30px;
    font-size: 16px;
    font-family: "UbisoftSansBold";
    color: white;
    background: #0077EE;
    border-radius: 3px;
    display:flex;
    align-items:center;
  }
  img{
    width: 18px;
    height:18px;
        min-width: 0px;
        margin: 0 5px;
  }
  button:hover {
    filter: brightness(105%);
  }

`;
export const TextLink = styled.div`
  color: ${(props) => (props.deactivated ? "#293B4F;" : "#FFF;")};
  display: flex;
  align-items: center;
  margin-right: ${(props) => (!props.deactivated ? "30px;" : "0px;")};
  margin-top: 14px;
  margin-bottom: 10px;
  &:hover {
    filter: brightness(105%);
  }
`;

export const MiniStatsSub = styled.div`
  font-family: "UbisoftSansBold";
`;
export const MiniStatsAttr = styled.div`
  border-bottom: 1px solid #33383d;
  padding: 5px 0 18px 0;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-row: 1/1;
  grid-column: 1/3;
  display: flex;
  justify-content: space-between;
  div {
    font-family: "UbisoftSansBold";
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 24px;
    p {
      font-family: "UbisoftSans";
      color: #a0a2a3;
      font-size: 16px;
    }
  }
`;

export const ProfileList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  border-bottom: 1px solid ${(props) => (props.status === "on" ? "rgba(255,255,255,0.5)" : "#FFF")};
  padding: 12px 24px;
  display: flex;
  font-size: 13px;
  opacity: ${(props) => (props.status === "on" ? "1" : "0.5")};
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  img {
    border-radius: 3px;
    margin-right: 12px;
    width: 38px;
    height: 38px;
    border: 2px solid ${(props) => (props.status === "on" ? "#0077EE" : "#fff")};
  }
`;

export const ChallengeWrapper = styled(ProfileList)`
  grid-column: 1/3;
  font-size: 13px;
`;

export const ChallengeList = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;
export const ChallengeListItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px 0 16px;
  background: ${props => props.active ? "#1F2E3D" : "#111419"};

  h1 {
    font-size: 16px;
    color: white;
  }

  h5 {
    color: #949ba2;
    font-size: 14px;
  }
  hr {
    width: auto;
    border: 1px solid #1c2127;
    margin: 0 -20px;
  }
`;

export const ChallengeRewards = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 16px;
`;
export const ChallengeRewardsRow = styled(ChallengeRewards)`
  flex-direction: row;
  align-items: center;
  img {
    margin: 12px 12px 12px 0;
    width: 32px;
    height: 32px;
  }
`;
export const ChallengeRewardsListRow = styled(ChallengeRewardsRow)`
  margin: 0px;
  margin: 32px 0 20px 0;
  img {
    width: 24px;
    height: 24px;
  }

  .completed {
    color: #0cde89;
    margin-left: auto;
  }
`;
