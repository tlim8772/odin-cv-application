import './Form.css'
import { Bio } from './Bio.jsx';
import { Edu } from './Edu.jsx';
import { Job } from './Job.jsx';
import { Resume } from './Resume.jsx';
import { useState } from 'react';
import { bioObj } from './Bio.jsx';

export default function Form() {
  const [bio, setBio] = useState(bioObj);
  const [eduArr, setEduArr] = useState([]);
  const [jobArr, setJobArr] = useState([]);

  return (
    <>
      <div className='form'>
        <Bio updateBio={setBio} />
        <Edu updateEduArr={setEduArr} />
        <Job updateJobArr={setJobArr} />
      </div>
      <Resume bio={bio} eduArr={eduArr} jobArr={jobArr} />
    </>
  )
}