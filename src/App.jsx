import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Background from './components/Background';
import FilterInput from './components/FilterInput';
import JobCard from './components/JobCard';

import data from './data.json';


const JobList = styled.div``;


function App() {

  const [filterSet, setFilterSet] = useState(new Set());
  const [jobData, setJobData] = useState([])

  useEffect(() => {
    const newJobData = data.map((job) => {
      const { languages, tools, role, level } = job;

      return { ...job, filterTerms: [...languages, ...tools, role, level] }
    })

    setJobData(newJobData);
  }, [])

  const addFilterTerm = (term) => {
    setFilterSet(prevFilter => {
      const newSet = new Set(prevFilter);
      newSet.add(term);

      return newSet;
    })

  }

  const removeFilterTerm = (term) => {
    setFilterSet(prevFilter => {
      const newSet = new Set(prevFilter);
      newSet.delete(term);

      return newSet;
    });
  }

  const jobElements = jobData
    .filter((job) => {
      if (filterSet.size === 0)
        return true

      else {
        if (job.filterTerms.some(term => filterSet.has(term)))
          return true
        else
          return false
      }
    })
    .map(job => (
      <JobCard
        key={job.id}
        {...job}
        filterSet={filterSet}
        addFilterTerm={addFilterTerm}
      />
    ))

  return (
    <div className="App">
      <Background />
      {filterSet.size !== 0 && <FilterInput filterSet={filterSet} setFilterSet={setFilterSet} removeFilterTerm={removeFilterTerm} />}

      <JobList>
        {jobElements}
      </JobList>
    </div>
  )
}

export default App
