import React from 'react'
import Job from './Job'

const Jobs = ({ data, setkeywords, keywords }) => {
    console.log(data);
    return (
        <div className='job-list'>
            {data.map((d) => {
                return <Job key={d.id} data={d} setkeywords={setkeywords} keywords={keywords} />;
            })}
        </div>
    )
}

export default Jobs