import React from 'react';
import video3 from '../assets/video3.mp4';
import "./places.css"
const Somnath = () => {
    return (
        <center>
            <br></br>
            <h1>Somnath Temple</h1>
            <br></br>
            <br></br>
        { <video controls autoPlay loop muted className='c6'>
        <source
            src={video3}
            type="video/mp4"
        />
        </video>  }
      </center>
    );
}

export default Somnath;
