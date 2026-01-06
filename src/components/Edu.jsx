import { useState } from 'react';
import { EduCard } from './EduCard';
import './Edu.css';

const emptyEdu = {
  schoolName: '',
  title: '',
  startDate: '',
  endDate: ''
}

export function Edu() {
  const [state, setState] = useState('editing');
  const [eduArr, setEduArr] = useState([]);

  function keySetter(key, idx) {
    return (value) => {
      eduArr[idx][key] = value;
      setEduArr([...eduArr]);
    }
  }

  function addEdu() {
    setEduArr([...eduArr, structuredClone(emptyEdu)]);
  }

  function removeEdu(idx) {
    return () => {
      setEduArr([...eduArr.slice(0, idx), ... eduArr.slice(idx + 1)]);
    }
  }

  return (
    <div className='edu'>
      <div>Education</div>
      {eduArr.map((edu, i) => 
        <EduCard
          state={state}
          {...edu}
          setSchoolName={keySetter('schoolName', i)}
          setTitle={keySetter('title', i)}
          setStartDate={keySetter('startDate', i)}
          setEndDate={keySetter('endDate', i)}
          remove={removeEdu(i)}
        />
      )}
      <div>
        <button onClick={addEdu}>add</button>
        <button onClick={() => setState('editing')}>edit</button>
        <button onClick={() => setState('submitting')}>submit</button>
      </div>
    </div>
  )
}