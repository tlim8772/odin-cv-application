import './Resume.css';

export function Resume(props) {
  const {
    bio,
    eduArr,
    jobArr,
  } = props;


  return (
    <div className='resume'>
      <div className='bio-section'>
        <h3>{bio.name}</h3>
        <div>
          <div>{bio.email && `email: ${bio.email}`}</div>
          <div>{bio.hp && `hp: ${bio.hp}`}</div>
        </div>
      </div>
      <div className='edu-section'>
        <h3>Education</h3>
        {eduArr.map(edu => 
          <div>
            {edu.schoolName} {edu.title} {edu.startDate} {edu.endDate}
          </div>
        )}
      </div>
      <div className='job-section'>
        <h3>Experience</h3>
        <ul>
          {jobArr.map(job => 
            <li>
              <div>{job.company} {job.position} {job.startDate} {job.endDate}</div>
              <div>{job.description}</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}