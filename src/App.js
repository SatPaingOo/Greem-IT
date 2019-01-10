import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Energy_Star from './about_green_it/Energy_Star.jsx';
import Virtulization from './about_green_it/Virtulization.jsx';
import Green_networking from './about_green_it/Green_networking.jsx';
import Green_computing from './about_green_it/Green_computing.jsx';
import Green_cloud from './about_green_it/Green_cloud.jsx';
import Green_collar from './about_green_it/Green_collar.jsx';
import Green_data_center from './about_green_it/Green_data_center.jsx';
import Greenwashing from './about_green_it/Greenwashing.jsx';


class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
         <Route path="/energy_star" component={Energy_Star} />
         <Route path="/virtulization" component={Virtulization} />
         <Route path="/green_networking" component={Green_networking} />
         <Route path="/green_computing" component={Green_computing} />
         <Route path="/green_cloud" component={Green_cloud} />
         <Route path="/green_collar" component={Green_collar} />
         <Route path="/green_data_center" component={Green_data_center} />
         <Route path="/greenwashing" component={Greenwashing} />
       </div>
     </Router>
    );
  }
}

export default App;
