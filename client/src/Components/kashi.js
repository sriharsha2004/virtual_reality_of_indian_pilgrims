import React from 'react';
import video4 from '../assets/video4.mp4';
import "./places.css"
const Kashi = () => {
    return (
        <center>
            <br></br>
            <h1>Kashi Temple</h1>
            <br></br>
            <br></br>
            { <video controls autoPlay loop muted className='c6'>
            <source
                src={video4}
                type="video/mp4"
            />
            </video>  }
          </center>
    );
}

export default Kashi;
