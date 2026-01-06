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
    remove,
    dragStart,
    drop,
  } = props;

  return (
    <div 
      className='edu-card' 
      draggable={state === 'editing'}
      onDragStart={dragStart}
      onDrop={drop}
      onDragOver={e => e.preventDefault()}
    >
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
      <button disabled={state === 'submitting'} onClick={remove}>remove</button>
    </div>
  )
}