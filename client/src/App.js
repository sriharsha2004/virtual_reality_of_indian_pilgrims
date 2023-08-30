import React from 'react';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register'
import Login from './Components/Login';
import Userlist from './Components/Userlist';
// import { Route } from 'router';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Explore from './Components/Explore'
import Otp from './Components/otp';
import Golden from './Components/golden';
import Somnath from './Components/somanath';
import Kashi from './Components/kashi';
import Tirupati from './Components/tirupati';
import Padmanabaswamy from './Components/padmanabaswamy';
import Konark from './Components/konark';
import Temple1 from './Components/temple1'
import Temple2 from './Components/temple2'
import Temple3 from './Components/temple3'
import Temple4 from './Components/temple4'
import Temple5 from './Components/temple5'
import Temple6 from './Components/temple6'


function App() {
  return (
    // <div className="App">
      <div class='container-fluid'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path = "/Login" element={<Login/>}/>
        <Route exact path = "/Register" element = {<Register/>}></Route>
        <Route exact path = "/Explore" element = {<Explore/>}></Route>
        <Route exact path = "/otp" element={<Otp/>}></Route>
        <Route exact path = "/golden_temple_panorama" element={<Golden/>}></Route>
        <Route exact path = "/Somnath_panorama" element={<Somnath/>}></Route>
        <Route exact path = "/Konark_panorama" element={<Konark/>}></Route>
        <Route exact path = "/kashi_panorama" element={<Kashi/>}></Route>
        <Route exact path = "/tirupati_panorama" element={<Tirupati/>}></Route>
        <Route exact path = "/Padmanabaswamy_panorama" element={<Padmanabaswamy/>}></Route>
        <Route exact path='/golden_temple_wiki' element={<Temple1/>}></Route>
        <Route exact path='/tirupati_temple_wiki' element={<Temple2/>}></Route>
        <Route exact path='/konark_temple_wiki' element={<Temple3/>}></Route>
        <Route exact path='/yadagirigutta_temple_wiki' element={<Temple4/>}></Route>
        <Route exact path='/somnath_temple_wiki' element={<Temple5/>}></Route>
        <Route exact path='/kashi_temple_wiki' element={<Temple6/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
