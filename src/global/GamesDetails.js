import RaymanLogo from "../assets/games/logo/rayman.png";
import ACBlackFlagLogo from "../assets/games/logo/acblackflag.png";
import Division2Logo from "../assets/games/logo/tdiv2.png";
import TCRainbowSix from "../assets/games/logo/tcrs.png";
import TCWildlandsLogo from "../assets/games/logo/tcgrwildlands.png";

import videoPic from "../assets/games/social/r6/youtube.webp";
import UpdateBannerIMG from '../assets/games/updates/SHADOWLEGACY.webp';

import WDL from "../assets/news/WDL.jpg";
import Sale from "../assets/news/Sale.jpg";

export const newsSlider = [
  //[ Text, IMG ]
  ["Ubisoft Connect/Uplay Clone", "https://ubiservices.cdn.ubi.com/380d0ffc-edd0-4ea9-a486-83c2e504d708/news/960x540_UBC_keyart.jpg"],
  ["Wow, a slider!", "https://ubiservices.cdn.ubi.com/66fcdb38-e7c2-45dd-a1c4-acbd7086d00f/news/NEWS_960x540.jpg"],
  ["Wow, a slider!", WDL],
  ["Here we go!", Sale],
];

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

export const clubChallenges = [
  // [AppID, Title, Desc, UCoins, XP]
  ["1", "Dummy Challenge 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis enim sed eros placerat mattis. Integer sem orci, dignissim sit amet hendrerit in, feugiat non tortor.", 1, 1],
  ["3", "Primeira Morte", "Elimine o primeiro inimigo nos modos Multiplayer ou Caça-terrorista em Casual/Colocação.", 10, 660],
  ["3", "Meste da Destruição", "Colo um Atacante, utilize uma Carga de Demolição em uma parede destrutivel para criar uma passagem.", 10, 660],
  ["3", "Dummy Challenge 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis enim sed eros placerat mattis. Integer sem orci, dignissim sit amet hendrerit in, feugiat non tortor.", 1337, 1337],
  ["2", "Dummy Challenge 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis enim sed eros placerat mattis. Integer sem orci, dignissim sit amet hendrerit in, feugiat non tortor.", 1, 1],
  ["4", "Dummy Challenge 4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis enim sed eros placerat mattis. Integer sem orci, dignissim sit amet hendrerit in, feugiat non tortor.", 1, 1],
  ["5", "Dummy Challenge 5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis enim sed eros placerat mattis. Integer sem orci, dignissim sit amet hendrerit in, feugiat non tortor.", 1, 1],
];

export const clubRewards = [
  //[AppID, Title, Desc, Type, Price, image]
  ["3","Trilha sonora","Faixas selecionadas da trilha sonora oficial em formato digital.","download","0","https://static8.cdn.ubi.com/u/Uplay/Games/RSIX7/rewards/reward2.jpg?imwidth=640"],
  ["3","Fan Kit do Rainbow Six Siege Operation Ember Rise","Explore o conteúdo mais recente de Rainbow Six Siege com o Fan Kit da Operation Ember Rise!","download","0","https://ubiservices.cdn.ubi.com/8a755c07-9730-4204-a7fb-60a76c280950/reward/DEFAULT_RSIX7REWARD39_thumbnail.jpg?imwidth=640"],
  ["3","Fan Kit do Rainbow Six Siege Operation Shifting Tides","Explore o conteúdo mais recente de Rainbow Six Siege com o Fan Kit da Operation Shifting Tides!","download","0","https://ubiservices.cdn.ubi.com/8a755c07-9730-4204-a7fb-60a76c280950/reward/DEFAULT_RSIX7REWARD45_thumbnail.jpg?imwidth=640"],
  ["3","Fan Kit do Rainbow Six Siege Operation Steel Wave","Explore o conteúdo mais recente de Rainbow Six Siege com o Fan Kit da Operation Steel Wave!","download","0","https://ubiservices.cdn.ubi.com/8a755c07-9730-4204-a7fb-60a76c280950/reward/DEFAULT_RSIX7REWARD51_thumbnail.png?imwidth=640"],
  ["3","Fan Kit do Rainbow Six Siege Operation Void Edge","Explore o conteúdo mais recente de Rainbow Six Siege com o Fan Kit da Operation Void Edge!","download","0","https://ubiservices.cdn.ubi.com/8a755c07-9730-4204-a7fb-60a76c280950/reward/DEFAULT_RSIX7REWARD47_thumbnail.png?imwidth=640"],
  ["3","Fan Kit do Rainbow Six® Siege Burnt Horizon","No Fan Kit do Rainbow Six® Siege você encontra diversos itens em alta resolução que foram usados na Operation Burnt Horizon. Aproveite!","download","0","https://ubiservices.cdn.ubi.com/8a755c07-9730-4204-a7fb-60a76c280950/reward/DEFAULT_RSIX7REWARD33_thumbnail.jpg?imwidth=640"],
  ["3","Guias de cosplay: Operation Burnt Horizon","Dê vida aos Agentes da Operation Burnt Horizon com estes guias de cosplay para Gridlock e Mozzie!","download","0","https://ubiservices.cdn.ubi.com/8a755c07-9730-4204-a7fb-60a76c280950/reward/DEFAULT_RSIX7REWARD42_thumbnail.jpg?imwidth=640"],
  ["3","Guias de cosplay: Operation Ember Rise","Dê vida aos Agentes da Operation Ember Rise com estes guias de cosplay para Amaru e Goyo!","download","0","https://ubiservices.cdn.ubi.com/8a755c07-9730-4204-a7fb-60a76c280950/reward/DEFAULT_RSIX7REWARD40_thumbnail.jpg?imwidth=640"],
  
];
