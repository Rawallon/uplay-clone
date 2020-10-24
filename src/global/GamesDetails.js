import RaymanLogo from "../assets/games/logo/rayman.png";
import ACBlackFlagLogo from "../assets/games/logo/acblackflag.png";
import Division2Logo from "../assets/games/logo/tdiv2.png";
import TCRainbowSix from "../assets/games/logo/tcrs.png";
import TCWildlandsLogo from "../assets/games/logo/tcgrwildlands.png";

import videoPic from "../assets/games/social/r6/youtube.webp";
import UpdateBannerIMG from '../assets/games/updates/SHADOWLEGACY.webp';

export const gamesDetails = [
  // Everything taken from: https://store.ubi.com/ofertas//
  // ["AppID","Cat","OverviewStyle","Name","IMG","LogoDir", "UpdateBannerImgDir",videoPic]
  [
    "1",
    "My",
    "SimplestOverview",
    "Assassin's Creed IV Black Flag",
    "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw7f2b5ed1/images/large/56c4948088a7e300458b46b0.jpg?sw=341&sh=450&sm=fit",
    ACBlackFlagLogo,
    " ",
    " ",
  ],
  [
    "2",
    "My",
    "SimpleOverview",
    "Rayman Legends",
    "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwa8b6d5b5/images/large/56c4948888a7e300458b47da.jpg?sw=300&sh=395&sm=fit",
    RaymanLogo,
    videoPic,
    UpdateBannerIMG,
  ],
  [
    "3",
    "Installed",
    "ComplexStatsOverview",
    "Tom Clancy's Rainbow Six® Siege",
    "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/pt/dw06f673c8/images/large/5e15a4115cdf9a1ec45ad82e.jpg?sw=341&sh=450&sm=fit",
    TCRainbowSix,
    videoPic,
    UpdateBannerIMG,
  ],
  [
    "4",
    "Installed",
    "ComplexStatsOverview",
    "Tom Clancy's The Division™ 2",
    "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/pt_BR/dw4beceb2e/images/large/5b06a3984e0165fa45ffdcc5.jpg?sw=300&sh=395&sm=fit",
    Division2Logo,
    " ",
    " ",
  ],
  [
    "5",
    "Free",
    "FreeOverview",
    "Tom Clancy's Ghost Recon Wildlands",
    "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/pt_BR/dw14a26c6d/images/large/574474b488a7e3b8638b456a.jpg?sw=341&sh=450&sm=fit",
    TCWildlandsLogo,
    " ",
    " ",
  ],
];

export const gamesNews = [
  // ["AppID","Cat","OverviewStyle","Name","IMG","LogoDir", "UpdateBannerImgDir",videoPic]
  []
];