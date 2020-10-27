import React, { Component } from "react";
import {
  BrowserWrapper,
  BrowserContainer,
  NewsCard,
  NewsWrapper,
  RecentNews,
  RecentNewsGrid,
  RecentNewsCard,
  FeaturedNews,
  FeaturedNewsCard,
  RecentNewsWrapper,
  Newscard,
} from "./BrowserStyle";
// News img
import WDL from "../assets/news/WDL.jpg";
import Sale from "../assets/news/Sale.jpg";
 import Newsfeat01 from '../assets/news/news-feat-1.jpg';
 import Newsfeat02 from '../assets/news/news-feat-2.jpg';
 import Newsfeat03 from '../assets/news/news-feat-3.jpg';
 import Newsfeat04 from '../assets/news/news-feat-4.jpg';
// News img
import Slider from "../components/Slider";
import { FaThLarge, FaThList } from "react-icons/fa";
import { withRouter } from "react-router-dom";

export default function NewsPage() {
    const recentNews = [
        // Taken from: https://news.ubisoft.com/en-us/archive
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2RacQjMS5w3EwIppOhm4aP/8c4064a7d663072312f25102c5b2da0b/ACV_EXP01_KeyArt.jpg", "Assassin’s Creed Valhalla Post-Launch Detailed"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1dIudUeK5kWSwH0vfNvFRW/2a2339151cc9381e3894b33c7aa90eee/GreenDaysHeader.jpg", "Green Days – A Force for the Environment at Ubisoft"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4cxfHKczOoQ5GUNknKUq0m/1cfc4d0164fcb5f90c86a8a0cfa07260/ubinews-article-wdl-nvidia-contest-THUMBNAIL.jpg", "Watch Dogs: Legion – Enter to Win Collector’s Edition, NVIDIA GeForce RTX 3080 Graphics Card, and More"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3h4s0GE47IBDxheVyJkfuX/e854163c0246c91bd79f390e9414391e/ubisoft_logo_whiteonblack_960x540_351175.jpg","Ubisoft Launches #VoteLikeYouGame Campaign"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6MEnsaP5ijUA2GP9xCpc7c/0ea6ac36c0f810fa86eb31fd657f002e/BrandNewsArticle_gear-halloween-oct2020_960x540.jpg","11 Ubisoft Face Masks for A Quick and Easy Halloween"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1t9BxPee0GLfWrRUZFIAXs/b65d8d1b8de21fcc563ccf350c64db4c/Thumb.jpg","BIPOC of Ubisoft -  Xavier Chamoiseau"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4elmf3AQ0KQjjmJZnZW28d/9a63ad998d4c6230dae9c7594afc6317/Asgard-Thumbnail.jpg","Assassin’s Creed Valhalla – PC Specs Revealed"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5OprzY0tsZexxLoRJB4o1U/fc6eae088e73a48b8920b7171355d849/FF_SCREEN_Select_001.jpg","Family Feud Out November 12"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4VcCSiLlhPxxeGaED3PQ3U/504463ab8eb9c88be5ec04ea4fda95c6/ACV_Ivarr.jpg", "Assassin’s Creed Valhalla – Forge Alliances, Build a Village, and Be a Kingmaker"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/246Pp5KoLMLvDSjUFCP4GS/532d4f808d473b528ea9f3fae5535665/ubinews-zoobuilder-thumbnail-v1.jpg", "Animating the Future – Developer Interview"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2cwe9Y7f4O7tiA6aymUhbA/dd4c603c8edf99e913056058eb80ad1c/UBInews-bipoc-fatim-THUMBNAIL.jpg", "BIPOC of Ubisoft – Fatim Aissatou Diop"],
        ["https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2yEpnoHESmuxlpIfClzusp/0eb86c6cfdef72d8801c0d92181bcaa8/Thumb.jpg", "For Honor Will Be Playable on Next-Gen Consoles"]
    ]
  return (
    <BrowserWrapper news={true}>
    <BrowserContainer>
       <Newscard >
        <NewsCard>
        <img src={WDL} alt="" />
        <span>Edição Ultimate inclui Season Pass e muito mais</span>
        </NewsCard>
        <NewsCard>
        <img src={Sale} alt="" />
        <span>Grandes descontos para os best sellers</span>
        </NewsCard>
        </Newscard>

        <Slider /> 

      <NewsWrapper>
        <RecentNews>
          <header>
            Notícias recentes
            <div>
              <span className="detail">Visualização:</span>
              <FaThLarge size={12} />
              <FaThList size={12} />
              <select>
                <option>Categorias</option>
              </select>
            </div>
          </header>
          <RecentNewsGrid>
              <RecentNewsWrapper>
              {recentNews.map((el, index)=>(
                    <RecentNewsCard key={el[1]}>
                      <img src={el[0]} alt="" />
                      <div className="content">
                      <span>{el[1]}</span>
                      <span className="detail"> há um dia</span>
                    </div>
                  </RecentNewsCard>
               ))}   
              </RecentNewsWrapper>
               

            <FeaturedNewsCard>
              <img src={Newsfeat02} alt="" />
              <div className="content">
              <span>DESTAQUE</span>
              <span className="detail">6 de outubro de 2020</span>
              </div>
            </FeaturedNewsCard>
            <FeaturedNewsCard>
              <img src={Newsfeat01} alt="" />
              <span>DESTAQUE</span>
              <span className="detail">6 de outubro de 2020</span>
            </FeaturedNewsCard>
            <FeaturedNewsCard>
              <img src={Newsfeat04} alt="" />
              <span>DESTAQUE</span>
              <span className="detail">6 de outubro de 2020</span>
            </FeaturedNewsCard>
            <FeaturedNewsCard>
              <img src={Newsfeat03} alt="" />
              <span>DESTAQUE</span>
              <span className="detail">6 de outubro de 2020</span>
            </FeaturedNewsCard>
          </RecentNewsGrid>

          <FeaturedNews>
            Destaques
          </FeaturedNews>
            
        </RecentNews>
      </NewsWrapper>
    </BrowserContainer>
    </BrowserWrapper>
);
}