import React from 'react';
import video6 from '../assets/video6.mp4';
import "./places.css"
const Tirupati = () => {
    return (
        <center>
            <br></br>
            <h1>Tirupati Temple</h1>
            <br></br>
            <br></br>
            { <video controls autoPlay loop muted className='c6'>
            <source
                src={video6}
                type="video/mp4"
            />
            </video>  }
          </center>
    );
}

export default Tirupati;
