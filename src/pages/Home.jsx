import React, { Component } from 'react';
import Navber from '../components/Navber.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Navber />
                <Jumbotron title="Welcome" subtitle="Put Something Witty here!" />

                <div className="container">
                    <h2>green IT (green information technology)</h2>
                    <p>
                        Green IT (green information technology) is the practice of environmentally sustainable computing. 

                        Green IT aims to minimize the negative impact of IT operations on the environment by designing, manufacturing, operating and disposing of computers and computer-related products in an environmentally-friendly manner.The motives behind green IT practices include reducing the use of hazardous materials, maximizing energy efficiency during the product's lifetime and promoting the biodegradability of unused and outdated products.

                        The concept of green IT emerged in 1992 when the U.S. Environmental Protection Agency launched 
                        <Link className="link" to="/energy_star">Energy Star</Link>
                        , a voluntary labeling program that helps organizations save money and reduce greenhouse gas emissions by identifying products that offer superior energy efficiency. Other components of green IT include the redesign of data centers and the growing popularity of 
                         <Link className="link" to="/virtulization">virtulization</Link> ,
                         <Link className="link" to="/green_networking">green networking</Link>  
                         and cloud computing.
                    </p>
                    <p>
                        See also :  
                        <Link className="link" to="/green_computing">green computing</Link> , 
                        <Link className="link" to="/green_cloud">green cloud</Link> , 
                        <Link className="link" to="/green_collar">green collar</Link> , 
                        <Link className="link" to="/green_data_center">green data center</Link> , 
                        <Link className="link" to="/greenwashing">greenwashing</Link> 
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;