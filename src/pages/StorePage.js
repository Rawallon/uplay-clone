import React from 'react';
import {StoreContainer } from './GamePageStyle';
import logoUbi from "../assets/big-logo.svg";
import {
    BrowserWrapper,
  } from "./BrowserStyle";
export default function LibraryPage () {
    return (
    <BrowserWrapper store={true}>
        <StoreContainer>
            <img src={logoUbi} alt="" />
        </StoreContainer>
    </BrowserWrapper>

    )
}
