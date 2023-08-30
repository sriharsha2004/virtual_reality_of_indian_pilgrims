import React from 'react';
import video1 from '../assets/video1 (3).mp4'
import "./places.css"
const Golden = () => {
    return (
        <center>
            <br></br>
            <h1>Golden Temple</h1>
            <br></br>
            <br></br>
            { <video controls autoPlay loop muted className='c6'>
            <source
                src={video1}
                type="video/mp4"
            />
            </video>  }
          </center>
    );
}

export default Golden;
