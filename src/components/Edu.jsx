import { useRef, useState } from 'react';
import { EduCard } from './EduCard';
import './Edu.css';

export const emptyEdu = {
  schoolName: '',
  title: '',
  startDate: '',
  endDate: ''
}

export function Edu(props) {
  const { updateEduArr } = props;
  const [state, setState] = useState('editing');
  const [eduArr, setEduArr] = useState([]);

  const ref = useRef({
    id: 'edu',
    idx: 0,
  });

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

  function submit() {
    setState('submitting');
    updateEduArr(eduArr);
  }

  function reorder(srcIdx, destIdx) {
    if (srcIdx === destIdx) return;
    if (srcIdx < destIdx) {
      setEduArr([
          ...eduArr.slice(0, srcIdx), 
          ...eduArr.slice(srcIdx + 1, destIdx + 1), 
          eduArr[srcIdx], 
          ...eduArr.slice(destIdx + 1),
        ]);
    } else {
      setEduArr([
        ...eduArr.slice(0, destIdx),
        eduArr[srcIdx],
        ...eduArr.slice(destIdx, srcIdx),
        ...eduArr.slice(srcIdx + 1),
      ])
    }
  }

  function dragStart(myIdx) {
    return (e) => {
      e.dataTransfer.setData('id', 'edu');
      ref.current = {...ref.current, idx: myIdx};
    }
  }

  function drop(myIdx) {
    return (e) => {
      if (e.dataTransfer.getData('id') !== 'edu') return;
      reorder(ref.current.idx, myIdx);
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
          dragStart={dragStart(i)}
          drop={drop(i)}
        />
      )}
      <div>
        <button disabled={state === 'submitting'} onClick={addEdu}>add</button>
        <button onClick={() => setState('editing')}>edit</button>
        <button onClick={submit}>submit</button>
      </div>
    </div>
  )
}