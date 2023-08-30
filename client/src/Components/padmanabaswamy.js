import React from 'react';
import video5 from '../assets/video5.mp4';
import "./places.css"
const Padmanabaswamy = () => {
    return (
        <center>
            <br></br>
            <h1>Yadagirigutta temple</h1>
            <br></br>
            <br></br>
            { <video controls autoPlay loop muted className='c6'>
            <source
                src={video5}
                type="video/mp4"
            />
            </video>  }
          </center>
    );
}

export default Padmanabaswamy;
