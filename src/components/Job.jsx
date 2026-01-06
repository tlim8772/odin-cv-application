import { useState } from 'react';
import { JobCard } from './JobCard';
import './Job.css';

export const jobObj = {
  company: '',
  position: '',
  description: '',
  startDate: '',
  endDate: ''
};

export function Job(props) {
  const { updateJobArr } = props;
  const [state, setState] = useState('editing');
  const [jobArr, setJobArr] = useState([]);

  function keySetter(key, idx) {
    return (value) => {
      jobArr[idx][key] = value;
      setJobArr([...jobArr]);
    }
  }

  function removeJob(idx) {
    return () => {
      setJobArr([...jobArr.slice(0, idx), ...jobArr.slice(idx + 1)]);
    }
  }

  function addJob() {
    setJobArr([...jobArr, structuredClone(jobObj)]);
  }

  function edit() {
    setState('editing');
  }

  function submit() {
    setState('submitting');
    updateJobArr(jobArr);
  }

  return (
    <div className="job">
      <div>Experience</div>
      {jobArr.map((job, i) => 
        <JobCard
          state={state} 
          {...job}
          setCompany={keySetter('company', i)}
          setPosition={keySetter('position', i)}
          setDescription={keySetter('description', i)}
          setStartDate={keySetter('startDate', i)}
          setEndDate={keySetter('endDate', i)}
          remove={removeJob(i)}
        />
      )}
      <div>
        <button disabled={state === 'submitting'} onClick={addJob}>add</button>
        <button onClick={edit}>edit</button>
        <button onClick={submit}>submit</button>
      </div>
    </div>
  )
}