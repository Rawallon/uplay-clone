import React, { useState } from 'react';
import {StoreContainer } from './GamePageStyle';
import logoUbi from "../assets/mini-logo.svg";
import { animated, useTransition } from 'react-spring';

export default function LibraryPage (props) {

    const [items, set] = useState(["teste","aa"])
const transitions = useTransition(items, null, {
from: { transform: 'translate3d(0,-40px,0)' },
enter: { transform: 'translate3d(0,0px,0)' },
leave: { transform: 'translate3d(0,-40px,0)' },
})


    return (
        <StoreContainer>
            {
            transitions.map(({ item, props, key }) =>
            <animated.div key={key} style={props}>{item}</animated.div>
            )
            }
            <img src={logoUbi} alt="" />
        </StoreContainer>
    )
}
