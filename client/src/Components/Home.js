import React from 'react';
import Login from './Login';
import Register from './Register';
import About from './Aboutus';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom"
import './Home.css'
// import video1 from '../assets/video1.mp4'
const Home = () => {
    
    const navigate = useNavigate();
    return (
        <div id="Above" class='container-fluid'>
            {/* <button onClick={() => navigate("/About")} id="abo">About us</button> */}
            <button onClick={() => navigate("/Login")} id="log">Login<i class="fa-solid fa-right-to-bracket"></i></button>
            {/* This is Home page */}
            <button onClick={() => navigate("/Register")} id="reg">Register For Free</button>
            <br />
            {/* <div>
                { <video controls autoPlay loop muted className='c6'>
                <source
                  src={video1}
                  type="video/mp4"
                />
              </video>  }
          </div> */}
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src='https://assets.seniority.in/media/wysiwyg/golden_temple.jpg'
                    // src="https://cdn.pixabay.com/photo/2020/01/03/17/17/architecture-4738634_1280.jpg"
                    alt="First slide"
                    width="640" height="500"
                    />
                    <Carousel.Caption>
                    <h3 id='co'>Golden temple</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://assets.seniority.in/media/wysiwyg/Badrinath_Temple_Uttarakhand.jpg" 
                    width="640" height="500"
                    
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 id='co'> Badrinath Temple, Uttarakhand</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://assets.gqindia.com/photos/5f0ec391532fa7831d9d6e81/master/pass/Everything-you-need-to-know-about-the-world's-richest-temple-Sree-Padmanabhaswamy-and-its-treasures-worth-Rs-1,00,000-crore.jpg"
                    width="640" height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 id='co'>Padmanabhaswamy_Temple_Thiruvananthapuram</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://assets.seniority.in/media/wysiwyg/Ramnathswamy_Temple_Rameshwaram.jpg"
                    width="640" height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 id='co'>Ramnathswamy Temple, Rameshwaram</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://assets.seniority.in/media/wysiwyg/Virupaksha_Temple_Hampi.jpg"
                    width="640" height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 id='co'>Virupaksha Temple, Hampi</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://assets.seniority.in/media/wysiwyg/Lingaraja_Temple_Bhubaneshwar.jpg"
                    width="640" height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 id='co'>Lingaraja Temple, Bhubaneshwar</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://assets.seniority.in/media/wysiwyg/Konark_Sun_Temple_Konark.jpg"
                    width="640" height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 id='co'>Virupaksha Temple, Hampi</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://assets.seniority.in/media/wysiwyg/Somnath_Temple_Saurashtra_1.jpg"
                    width="640" height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 id='co'>Somnath_Temple_Saurashtra</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/wp/wp5991421.jpg"
                    width="640" height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 id='co'>Tirupathi_Balaji</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://static.toiimg.com/photo/64665528.cms"
                    width="640" height="500"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 id='co'>Khajuraho Temple, Madhya Pradesh</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>













            {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> */}
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button> */}
                {/* </div>
                <div className="carousel-inner" data-bs-interval="1000">
                    <div className="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2020/01/03/17/17/architecture-4738634_1280.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 id='write'>Welcome to the virtual world</h1>
                        </div>
                    </div> */}
                    {/* <div className="carousel-item" data-bs-interval="1000">
                        <img src="C:\Users\N M SRIHARSHA\OneDrive\Desktop\images\1s.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h1>Tirupathi_Balaji</h1>
                            </div>
                    </div> */}
                    {/* <div className="carousel-item" data-bs-interval="1000">
                        <img src="https://assets.seniority.in/media/wysiwyg/Jagannath_Temple.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h1>Jagannath_Temple</h1>
                                
                            </div>
                    </div> */}
                    {/* <div className="carousel-item" data-bs-interval="1000">
                        <img src="https://assets.seniority.in/media/wysiwyg/Virupaksha_Temple_Hampi.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h1>Virupaksha_Temple_Hampi</h1>
                            </div>
                    </div> */}
                    {/* <div className="carousel-item" data-bs-interval="1000">
                        <img src="https://assets.seniority.in/media/wysiwyg/Lingaraja_Temple_Bhubaneshwar.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h1>Lingaraja_Temple_Bhubaneshwar</h1>
                            </div>
                    </div> */}
                    {/* <div className="carousel-item" data-bs-interval="1000">
                        <img src="https://assets.seniority.in/media/wysiwyg/Padmanabhaswamy_Temple_Thiruvananthapuram.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h1>Padmanabhaswamy_Temple_Thiruvananthapuram</h1>
                            </div>
                    </div>  */}
                    {/* <div className="carousel-item" data-bs-interval="1000">
                        <img src="https://assets.seniority.in/media/wysiwyg/Somnath_Temple_Saurashtra_1.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h1>Somnath_Temple_Saurashtra</h1>
                            </div>
                    </div> */}


                {/* </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
            <h1 id='Abot'>About us</h1>
            <br />
            <br />
            <p id='head'>
                A Virtual Pilgrimage experience is an alternative to traval that is
                perfect for those who are unable to leave their home.
                or even for those who are just looking for spiritual journey.
                These can benefit the senior citizens who can visit these sites using their phones.
                the user can visit the pilgrimages of indicators from anywhere
                at any time
                <br/>&nbsp;&nbsp;
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Virtual pilgrimage is an important religious phenomenon for understanding the 
                new ways of being spiritual in the postmodern world. While often conservative in character, 
                linked as they are to actual sacred sites that are permeated by the mythical imaginare of
                 tradition, virtual pilgrimages exploit the new technological possibilities of the Internet
                  to re-imagine the sacred. In what follows, I argue that virtual pilgrimage has four key 
                  characteristics as a form of religious travel. First, it creates a mythscape, an immaterial 
                  mental geography that originally comes from sacred oral or scriptural traditions. Second, 
                  it exists as an interactive visual-auditory medium for experiencing a sense of sacred 
                  presence. Third, it generates symbolic forms of entertainment that are liminoid in character.
                   Fourth, as a leisure activity of individuals ‘Net surfing’ from their home or office
                    computers, it can create ‘virtual travelling communities’ of pilgrims who use the discourse
                     of communitas to describe their experience.
            </p>
            <h1 id='abot'>Motives</h1>
            <br/>
            <br/>
            <p id='head'>
                <li>Responding to the loss of spiritual
            vitality within the SGH community with an inclusive, restorative faith practice that is
            accessible to all,</li>
            <li>Finding an inclusive framework for honouring the diverse spiritual
            currents in the Shepherds community</li>
            <li>Contributing to literature and scholarship
            in pilgrimage studies within the disciplines of Theology and Practical Theology</li> 
            </p>
        </div>

    );
}

export default Home;
