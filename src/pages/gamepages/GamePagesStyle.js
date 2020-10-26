import styled from "styled-components";

export const OverviewGrid = styled.div`
  max-width: 1100px;
  display: grid;
  gap: 20px;
  padding: 40px 40px 0 0;
  margin-bottom: 20px;
  grid-template-columns: 1fr;
  /* grid-template-rows: repeat(4, min); */
  /* grid-template-rows: minmax(134px, 134px); */
`;
export const NewsGrid = styled(OverviewGrid)`
  gap: 40px;
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
  /* font-size: 11px; */
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
    color: #55aaff;
    text-decoration: none;
  }
`;

export const RewardColumnBox = styled(ClubColumnBox)`
  justify-content: center;
  text-align: center;
  background: transparent;
`;
export const TextLink = styled.div`
  color: ${(props) => (props.deactivated ? "#293B4F;" : "#FFF;")};
  display: flex;
  align-items: center;
  margin-right: ${(props) => (!props.deactivated ? "30px;" : "0px;")};
  margin-top: 14px;
  margin-bottom: 10px;
  &:hover {
    filter: brightness(120%);
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
  border-bottom: 1px solid #fff;
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
    border: 2px solid ${(props) => (props.status === "on" ? "#55aaff" : "#fff")};
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
  background: ${props => props.active ? "#1F2E3D" : "#111419" };

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
