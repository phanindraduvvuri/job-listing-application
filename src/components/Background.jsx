import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import desktopBackground from '/images/bg-header-desktop.svg';
import mobileBackground from '/images/bg-header-mobile.svg';

import { DESATURATED_DARK_CYAN } from '../constants/styles';

const BgImageContainer = styled.div`
    width: 100%;
    background-color: ${DESATURATED_DARK_CYAN};
    margin-bottom: 3rem;
`

function Background() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 324px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 324px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    return (
        <BgImageContainer>
            <img src={matches ? desktopBackground : mobileBackground} alt="" />
        </BgImageContainer>
    )
}

export default Background;
