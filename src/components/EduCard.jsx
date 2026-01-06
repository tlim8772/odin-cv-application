import { useState } from 'react';
import './EduCard.css';

export function EduCard(props) {
  const {
    state,
    schoolName,
    setSchoolName,
    title, 
    setTitle,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    remove
  } = props;

  return (
    <div className='edu-card'>
      <input 
        required
        type='text'
        placeholder='School Name'
        onChange={e => setSchoolName(e.target.value)}
        value={schoolName}
        disabled={state === 'submitting'}
      />
      <input
        required
        type='text'
        placeholder='Title'
        onChange={e => setTitle(e.target.value)}
        value={title}
        disabled={state === 'submitting'}
      />
      <input 
        required
        type='date'
        placeholder='Start Date'
        onChange={e => setStartDate(e.target.value)}
        value={startDate}
        disabled={state === 'submitting'}
      />
      <input 
        required
        type='date'
        placeholder='End Date'
        onChange={e => setEndDate(e.target.value)}
        value={endDate}
        disabled={state === 'submitting'}
      />
      <button onClick={remove}>remove</button>
    </div>
  )
}