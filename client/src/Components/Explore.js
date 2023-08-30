import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Button } from 'react-bootstrap';
import './Explore.css'
// import Container from 'react-bootstrap/Container';/
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from "react-router-dom"
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import Konark from './konark';
import Somanath from './somanath';
import Kashi from './kashi';

const Explore = () => {
    const navigate = useNavigate();
    const temple1 = () =>{
        navigate("/golden_temple_wiki")
    }
    const temple2 = () =>{
        navigate("/tirupati_temple_wiki")
    }
    const temple3 = () =>{
        navigate("/konark_temple_wiki")
    }
    const temple6 = () =>{
        navigate("/kashi_temple_wiki")
    }
    const temple5 = () =>{
        navigate("/somnath_temple_wiki")
    }
    const temple4 = () =>{
        navigate("/yadagirigutta_temple_wiki")
    }
    const golden = () =>{
        navigate("/golden_temple_panorama");
    }
    const tirupati = () =>{
        navigate("/tirupati_panorama");
    }
    const Padmanabaswamy = () =>{
        navigate("/Padmanabaswamy_panorama");
    }
    const Kashi = () =>{
        navigate("/kashi_panorama");
    }
    const Somnath = () =>{
        navigate("/Somnath_panorama");
    }
    const Konark = () =>{
        navigate("/Konark_panorama");
    }
    return (
        <Container fluid="md">
            <h1 id='he'>🛕Welcome to virtual tours⬇️</h1>
            <button onClick={() => navigate("/")} id="Back" >Logout<i class="fa-solid fa-right-from-bracket"></i></button>
            <br/>
            <br/>
            <Row>
                <Col>
                    <Card style={{height : "40em",overflow : "auto"}}>  
                    <Card.Img variant="top" id="a" src="https://timesofindia.indiatimes.com/photo/61820954.cms" />  
                    <Card.Body>  
                        <Card.Title>Golden Temple</Card.Title>  
                        <Card.Text>  
                        The Golden Temple also known as the Harmandir Sahib ,it is a gurdwara located in the city of Amritsar, Punjab, India.It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur, and Gurdwara Janam Asthan in Nankana Sahib
                        </Card.Text>  
                        <div id='pos'>
                            <Button variant='primary' onClick={temple1} id="r">Read More</Button>
                            <Button variant='success' id='s' onClick={golden}>Explore</Button>
                        </div>
                    </Card.Body>  
                    </Card>  
                </Col>
                <Col>
                   <Card style={{height : "40em",overflow : "auto"}}> 
                     <Card.Img variant="top" id="b" src="https://images.newindianexpress.com/uploads/user/imagelibrary/2022/7/2/w1200X800/Tirupati_Temple.jpg" />  
                     <Card.Body>  
                         <Card.Title>Sri Venkateswara Swami Vaari Temple</Card.Title>  
                         <Card.Text>  
                         Sri Venkateswara Swami Vaari Temple is a Hindu temple situated in the hill town of Tirumala at Tirupati in Tirupati district of Andhra Pradesh, India.The Temple is dedicated to Venkateswara, a form of Vishnu
                         , who is believed to have appeared on the earth to save mankind . 
                         </Card.Text>  
                         <Button variant='primary' onClick={temple2} id="r">Read More</Button>
                         <Button variant='success' id='s' onClick={tirupati}>Explore</Button>
                     </Card.Body>  
                     </Card>  
                         
                </Col>
                <Col>
                
                   <Card style={{height : "40em",overflow : "auto"}} >  
                     <Card.Img variant="top" id="b" src="https://i.ytimg.com/vi/FmxbaEbiDqg/maxresdefault.jpg" />  
                     <Card.Body>  
                         <Card.Title>Konark Sun Temple</Card.Title>  
                         <Card.Text>  
                         Konark Sun Temple is a 13th-century CE (year 1250) Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri district, Odisha, India.
                         This temple is Dedicated to the Hindu Sun God Surya, has the appearance of a 100-foot (30 m) high chariot with immense wheels and horses, all carved from stone.
                         </Card.Text>  
                        
                         <Button variant='primary' onClick={temple3} id="r">Read More</Button>
                         <Button variant='success' id='s' onClick={Konark}>Explore</Button>
                     </Card.Body>  
                     </Card>  

                </Col>
            </Row>
            <Row>
            <Col>
                
                   <Card style={{height : "40em",overflow : "auto"}}>  
                     <Card.Img variant="top" id="b" src="https://blogbox.indianeagle.com/wp-content/uploads/2017/10/Yadagirigutta-Yadadri-Temple-Complex-Telangana.jpg" />  
                     <Card.Body>  
                         <Card.Title>Yadagirigutta temple</Card.Title>  
                         <Card.Text>  
                         Sri Lakshmi Narasimha Swamy Temple or simply known as Yadadri or Yadagirigutta temple,(also known as Pancha Narasimha Kshetram and Rishi Aradhana Kshetram) is a Hindu temple situated on a hillock in the small town of Yadagirigutta in the Yadadri Bhuvanagiri district of the Indian state of Telangana.
                         </Card.Text>  
                         {/* <Button variant="primary" href='https://en.wikipedia.org/wiki/Sri_Lakshmi_Narasimha_Swamy_Temple,_Yadadri'>Read More</Button>   */}
                         <Button variant='primary' onClick={temple4} id="r">Read More</Button>
                         <Button variant='success' id='s' onClick={Padmanabaswamy}>Explore</Button>
                     </Card.Body>  
                     </Card>  
    

                </Col>
                <Col>
            
                   <Card style={{height : "40em",overflow : "auto"}}> 
                     <Card.Img variant="top" id="b" src="https://www.ritiriwaz.com/wp-content/uploads/2020/09/Somnath-Temple.jpg" />  
                     <Card.Body>  
                         <Card.Title>Somnath temple</Card.Title>  
                         <Card.Text>  
                         The Somnath temple, also called Somanātha temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites for Hindus and is believed to be first among the twelve jyotirlinga shrines of Shiva.
                         The temple was reconstructed several times in the past by multiple Muslim invaders.
                         </Card.Text>  
                         {/* <Button variant="primary" href='https://en.wikipedia.org/wiki/Somnath_temple'>Read More</Button>   */}
                         <Button variant='primary' onClick={temple5} id="r">Read More</Button>
                         <Button variant='success' id='s' onClick={Somnath}>Explore</Button>
                     </Card.Body>  
                     </Card>  
                </Col>
                <Col>
                   <Card style={{height : "40em",overflow : "auto"}}>  
                     <Card.Img variant="top" id="b" src="https://img.jagranjosh.com/images/2021/December/13122021/kashi-temples.webp" />  
                     <Card.Body>  
                         <Card.Title>Kashi Vishwanath Temple</Card.Title>  
                         <Card.Text>  
                         The Kashi Vishwanath Temple is a famous Hindu temple dedicated to Lord Shiva. It is located in Vishwanath Gali of Varanasi, Uttar Pradesh in India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples.
                         </Card.Text>  
                         {/* <Button variant="primary" href='https://en.wikipedia.org/wiki/Kashi_Vishwanath_Temple'>Read More</Button>   */}
                         <Button variant='primary' onClick={temple6} id="r">Read More</Button>
                         <Button variant='success' id='s' onClick={Kashi}>Explore</Button>
                     </Card.Body>  
                     </Card>  
                </Col>


            </Row>
        </Container >


    );
}

export default Explore;
