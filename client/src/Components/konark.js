import React from 'react';
import video2 from '../assets/video2.mp4';
import "./places.css"
const Konark = () => {
    return (
        <center>
            <br></br>
            <h1>Konark Temple</h1>
            <br></br>
            <br></br>
            { <video controls autoPlay loop muted className='c6'>
            <source
                src={video2}
                type="video/mp4"
            />
            </video>  }
          </center>
    );
}

export default Konark;
