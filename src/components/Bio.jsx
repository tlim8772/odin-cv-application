import { useState } from 'react';
import './Bio.css';

export function Bio() {
  const [state, setState] = useState('editing')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');

  return (
    <div className='bio'>
      <div>Biography</div>
      <input 
        required 
        type='text' 
        placeholder='name'
        onChange={e => setName(e.target.value)} 
        value={name} 
        disabled={state === 'submitting'}
      />
      <input
        required 
        type='email' 
        placeholder='email'
        onChange={e => setEmail(e.target.value)} 
        value={email} 
        disabled={state === 'submitting'}
      />
      <input 
        required 
        type='number' 
        placeholder='hp number'
        onChange={e => setHp(e.target.value)} 
        value={hp} 
        disabled={state === 'submitting'}
      />
      <div>
        <button onClick={() => setState('editing')}>edit</button>
        <button onClick={() => setState('submitting')}>submit</button>
      </div>
    </div>
  )
}