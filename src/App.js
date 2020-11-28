import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Redirect, Route, Switch } from "react-router-dom";
import Service from './Components/Service';
import Story from './Components/Story';
import Process from './Components/Process';
import Certificate from './Components/Certificate'
import Portfolio from './Components/Portfolio'
import Brand_slide from './Components/Brand_slide';
import Form from './Components/Form';
import Footer from './Components/Footer'
import Map from './Components/Map'

function App() {
  return (<>
      <Navbar/>
      <Switch>
        <Route path="/Service" component={Service} />
        <Redirect to ="/"/>
      </Switch>
      <Story title="Our Story" btn="Read more"/>
      <Process/>
      <Certificate/>
      <Portfolio/>
      <Brand_slide/>
      <Story title="Consulting the cost of your project" btn="Start here"/>
      <Form/>
      <Map/>
      <div className="container"><Footer/></div>




      </>
  );
}

export default App;

