import React, { useState } from 'react';
import {StoreContainer } from './GamePageStyle';
import logoUbi from "../assets/mini-logo.svg";
import {
    BrowserWrapper,
  } from "./BrowserStyle";
export default function LibraryPage (props) {
    return (
    <BrowserWrapper store={true}>
        <StoreContainer>
            <img src={logoUbi} alt="" />
        </StoreContainer>
    </BrowserWrapper>

    )
}
