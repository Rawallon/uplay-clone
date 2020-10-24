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
export const HalfGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;
export const NewsHalfGrid = styled(HalfGrid)`
gap:40px;
`;
export const Box = styled.div`
  width: 100%;
    height: 100%;
  padding: 24px 20px;
  background: #12151a;
  color: ${props => props.color};
`;
export const VideoBox = styled(Box)`
display: flex;
flex-direction: column;
padding: 20px;
img{
    width: 100%;
    height: auto;
}
.vtitle{
    margin-bottom: 20px;
}
`;
export const NewsBox = styled(VideoBox)`
padding: 0px;
img{
    max-height: 255px;
    margin-bottom: 15px;
    object-fit: cover;
}

p{ 
  font-family: "UbisoftSansBold";
  margin-left: 20px;
    margin-bottom: 20px;
}
`;
export const BannerBox = styled(VideoBox)`
img{
  object-fit: cover;
    max-height: 255px;
    margin-bottom: 15px;
}
p{ 
  font-family: "UbisoftSansBold";
    margin-bottom: 20px;
}
span{
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
header{
    width:100%;
    height: 45px;
    background: #030404;
    display:flex;
    justify-content:center;
    img{
        object-fit: none;
        width:100%;
        height:auto;
    }
}
`;
export const ClubWrapper = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
padding:  0 25px 20px 20px;
`;
export const ClubColumn = styled.div`
display: flex;
flex-direction: column;
color: white;
  header{
    display:flex;
    justify-content:start;
    align-items:center;
    background: transparent;
    padding: 30px 0;
  }
/* font-size: 11px; */
`;

export const ClubColumnBox = styled.div`
background: #0B0D10;
display:flex;
flex-direction: column;
align-items:center;
justify-content:flex-end;
width:94%;
height: 185px;
p{
font-size: 40px;
margin-bottom: 12px;
}
span{
    font-size: 16px;
    color:#9D9E9F;
    margin-bottom: 30px;
}
.icons{
  height: 25px;
  width: 100%;
  margin-bottom: 15px;
  img{
    width:100%;
    height: 25px;
  }
}
`;

export const RewardColumn = styled(ClubColumn)`
margin-top: 25px;
padding-left: 20px;
border-left: 1px solid gray;
a{
color: #55AAFF;
text-decoration: none;
}
`;

export const RewardColumnBox = styled(ClubColumnBox)`
justify-content:center;
text-align: center; 
background: transparent;
`;
export const TextLink = styled.div`
color: #55AAFF;
display: flex;
align-items: center;
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
display:flex;
font-size: 13px;
opacity: ${props => props.status === "on" ? "1" : "0.5"};
div{
    display:flex;
    flex-direction:column;
    justify-content: space-between;
}
img {
    border-radius: 3px;
    margin-right: 12px;
    width: 38px;
    height: 38px;
    border: 2px solid ${props => props.status === "on" ? "#55aaff" : "#fff"};
}
`;