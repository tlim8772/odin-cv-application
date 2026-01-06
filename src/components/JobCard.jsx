import './JobCard.css';

export function JobCard(props) {
  const {
    state,
    company,
    setCompany,
    position,
    setPosition,
    description,
    setDescription,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    remove
  } = props;

  return (
    <div className='job-card'>
      <input 
        type='text'
        value={company}
        onChange={e => setCompany(e.target.value)}
        placeholder='company'
        disabled={state === 'submitting'}
      />
      <input
        type='text'
        value={position}
        onChange={e => setPosition(e.target.value)}
        placeholder="position"
        disabled={state === 'submitting'}
      />
      <textarea 
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="description"
        disabled={state === 'submitting'}
      />
      <input 
        type='date'
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        disabled={state === 'submitting'}
      />
      <input 
        type='date'
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        disabled={state === 'submitting'}
      />
      <button disabled={state === 'submitting'} onClick={remove}>remove</button>
    </div>
  )
}