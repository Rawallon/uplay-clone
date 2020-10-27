import React from 'react';
import {StoreContainer } from './GamePageStyle';
import logoUbi from "../assets/mini-logo.svg";

export default function LibraryPage (props) {
    return (
        <StoreContainer>
            <img src={logoUbi} />
        </StoreContainer>
    )
}
