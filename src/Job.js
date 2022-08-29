import React from 'react';
import { useEffect, useState } from "react";

const Job = (props) => {

    const {
        company,
        contract,
        featured,

        languages,
        level,
        location,
        logo,

        position,
        postedAt,
        role,
        tools,
    } = props.data;

    let keywords = [role, level, ...languages, ...tools];

    const [icon, setIcon] = useState("");


    useEffect(() => {
        import(`${logo}`).then((d) => {
            setIcon(d.default);
        });
    }, [logo]);

    
    function check(item) {
        return keywords.includes(item);
    }


    const display = () => {
        if (props.keywords.every(check)) {
            return (
                <div className='job-container'>
                    <div className='logo'>
                        <img src={icon} alt="logo"></img>
                    </div>
                    <div className='main'>
                        <div className='top'>
                            <div style={{ color: "hsl(180, 29%, 50%)", fontSize: "20px" }}>{company}</div>
                            {props.data.new ? (<div>NEW!</div>) : null}
                            {featured ? (<div>FEATURED</div>) : null}
                        </div>
                        <div className='mid'>{position}</div>
                        <div className='bottom'>
                            {postedAt}
                            <div className='dot'></div>
                            {contract}
                            <div className='dot'></div>
                            {location}
                        </div>
                    </div>
                    <div className='info'>
                        {keywords.map((key, id) =>
                            <div onClick={() => props.setkeywords(key)} key={id}>{key}</div>
                        )}
                    </div>
                </div>
            )
        }
    }

    return (
        display()
    )
}

export default Job