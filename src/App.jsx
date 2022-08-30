import { useEffect, useState } from 'react';
import Background from './components/Background';
import JobCard from './components/JobCard';

import data from './data.json';


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
    setFilterSet(prevFilter => (
      new Set(prevFilter).add(term)
    ))

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
      {jobElements}
    </div>
  )
}

export default App
