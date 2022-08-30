import React from 'react';
import styled from 'styled-components';

import { DESATURATED_DARK_CYAN, FILTER_TABLET_BG, FONT_WEIGHT_BOLD } from '../constants/styles';

const FilterButton = styled.button`
    color: ${DESATURATED_DARK_CYAN};
    background-color: ${FILTER_TABLET_BG};

    border: none;
    border-radius: 5px;
    margin: .5rem;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: ${FONT_WEIGHT_BOLD};
    font-size: 1.4rem;

    transition: all .3s ease-out;

    &:hover, &:focus-visible {
        background-color: ${DESATURATED_DARK_CYAN};
        color: ${FILTER_TABLET_BG};
        ${({ removable }) => removable && `
            &::after {
                content: 'X';
                margin: .5rem;
            }
        `}
    }

`

function Filter({ filterWord, addFilterTerm }) {
    return (
        <FilterButton onClick={() => addFilterTerm(filterWord)}>{filterWord}</FilterButton>
    )
}

export default Filter;
export { FilterButton };

