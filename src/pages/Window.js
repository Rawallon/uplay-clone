import React from 'react'
import profPic from '../assets/profile.jpg'
import logoUbi from '../assets/mini-logo.svg'
import coinUbi from '../assets/coin.svg'
import { Container, CssWindow, WindowHeader, WindowsBar } from './style'
import { FaWindowMinimize, FaRegSquare,FaTimes, FaBars, FaComment, FaUserFriends, FaHeart, FaShoppingCart, FaSortDown } from "react-icons/fa";



export default function Window() {
    return (
        <Container>
            <CssWindow>
            <WindowsBar>
            <img src={logoUbi} alt="" />
             UPLAY
             <div className="windowsopt">
             <FaWindowMinimize/>
             <FaRegSquare/>
             <FaTimes/>
             </div>
            </WindowsBar>
            <WindowHeader>
                <div className="headerMenu">
                <FaBars size={18}/>
                <span className="active">Notícias</span>
                <span>Jogos</span>
                <span>Store</span>
                <span>Discover the XX PC specs</span>
                </div>

                <div className="headerIcons">
<FaComment size={20}/>
<FaUserFriends size={20}/>
<FaHeart size={20}/>
<FaShoppingCart size={20}/>
<div className="profile">
<div className="profPicture">
<img src={profPic} />
</div>
<div className="profData">
<p>LegitNightOwl <FaSortDown/></p>
<span>Nível 31</span>
</div>
<div className="profCoins">
    <img src={coinUbi} />
    512
</div>
</div>
                </div>
            </WindowHeader>
            </CssWindow>
        </Container>
    )
}
