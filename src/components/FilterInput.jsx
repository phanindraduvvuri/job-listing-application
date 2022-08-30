import React from 'react'
import styled from 'styled-components'

import { DESATURATED_DARK_CYAN, FONT_WEIGHT_BOLD, MAIN_FG } from '../constants/styles'
import { FilterButton } from './Filter'

const TopFilterBar = styled.div`
    background-color: white;
    width: 90%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(91 164 164 / .3);

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    top: -6rem;

`
const FilterButtons = styled.div`

`

const ClearButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${MAIN_FG};
    font-weight: ${FONT_WEIGHT_BOLD};
    cursor: pointer;

    &:hover {
        color: ${DESATURATED_DARK_CYAN};
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-thickness: 2px;
    }
`

function FilterInput({ filterSet, setFilterSet, removeFilterTerm }) {
    const filterButtons = [...filterSet].map((filterTerm, index) => (
        <FilterButton onClick={() => removeFilterTerm(filterTerm)} removable key={index}>{filterTerm}</FilterButton>
    ));

    return (
        <TopFilterBar>
            <FilterButtons>
                {filterButtons}
            </FilterButtons>
            <ClearButton onClick={() => setFilterSet(new Set())}>clear</ClearButton>
        </TopFilterBar>
    )
}

export default FilterInput
