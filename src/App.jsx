import Background from './components/Background';
import JobCard from './components/JobCard';

import data from './data.json';


function App() {

  const jobElements = data.map(job => (
    <JobCard
      key={job.id}
      {...job}
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
