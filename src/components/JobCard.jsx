import React from 'react';
import styled from 'styled-components';

import { DESATURATED_DARK_CYAN, FILTER_TABLET_BG, FONT_SIZE, FONT_WEIGHT_BOLD, FONT_WEIGHT_NORMAL, JOB_FG, MAIN_FG } from '../constants/styles';
import Filter from './Filter';


const Job = styled.div`
    background-color: white;

    width: 90%;
    max-width: 80rem;

    border-radius: 5px;
    margin: 2rem auto;
    padding: 3rem;

    display: flex;
    align-items: center;

    position: relative;
    border-left: ${props => props.featured ? `5px solid ${DESATURATED_DARK_CYAN}` : ''};
    box-shadow: 0 0 10px rgb(91 164 164 / .3);

`

const Logo = styled.img`
    max-width: 7rem;
    margin-right: 3rem;

    @media (max-width: 800px) {
        position: absolute;
        max-width: 5rem;
        top: -2.5rem;
    }
`

const JobContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

`

const JobInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        gap: .5rem;

    }
`

const JobCompany = styled.p`
    color: ${DESATURATED_DARK_CYAN};
    font-weight: ${FONT_WEIGHT_NORMAL};
    display: flex;
    align-items: center;
    gap: 1rem;
`

const JobPosition = styled.p`
    color: ${JOB_FG};
    font-weight: ${FONT_WEIGHT_BOLD};
`

const JobFooter = styled.p`
    color: ${MAIN_FG};
`

const Flag = styled.span`
    background-color: ${props => props.featured ? `${JOB_FG}` : `${DESATURATED_DARK_CYAN}`};
    border-radius: 50vw;
    color: ${FILTER_TABLET_BG};
    display: inline-block;
    font-size: 1.2rem;
    font-weight: ${FONT_WEIGHT_BOLD};
    padding: 0.2rem 0.7rem;
    text-transform: uppercase;
`

const FiltersContainer = styled.div`

`

const Hr = styled.hr`
    @media (max-width: 800px) {
        width: 100%;
        border: 1px solid;
        margin-block: 1.5rem;
    }
`

function JobCard({ logo, company, position, postedAt, contract, location, isNew, isFeatured, role, level, languages, tools, filterSet, addFilterTerm, filterTerms, setFilterTerms }) {
    // setFilterTerms([...languages, ...tools, role, level])

    const filterButtons = filterTerms
        .map((filterTerm, index) => (
            <Filter
                key={index}
                filterWord={filterTerm}
                addFilterTerm={addFilterTerm}
            />
        ))
    return (
        <Job featured={isFeatured === true}>
            <Logo src={logo} alt="Company Logo" />
            <JobContent>
                <JobInfo>
                    <JobCompany>{company} {isNew && <Flag>New!</Flag>} {isFeatured && <Flag featured>Featured</Flag>}</JobCompany>
                    <JobPosition>{position}</JobPosition>
                    <JobFooter>{postedAt} • {contract} • {location}</JobFooter>
                </JobInfo>
                <Hr />
                <FiltersContainer>
                    {filterButtons}
                </FiltersContainer>
            </JobContent>
        </Job>
    )
}

export default JobCard;
