import './Form.css'
import { Bio } from './Bio.jsx';
import { Edu } from './Edu.jsx';
import { Job } from './Job.jsx';

export default function Form() {
  return (
    <div className='form'>
      <Bio />
      <Edu />
      <Job />
    </div>
  )
}