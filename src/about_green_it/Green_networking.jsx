import React, { Component } from 'react';
import Navber from '../components/Navber.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';
import './Style.css';

class Green_networking extends Component {
    render() {
        return (
            <div>
                <Navber />
                <Jumbotron title="Green Networking" subtitle="What is green networking?" />

                <div className="container">
                    <p>
                    Green networking is the practice of selecting energy-efficient networking technologies and products, and minimizing resource use whenever possible.
                    </p>
                    <p>
                        Green networking practices include:
                        <ul>
                            <li>Implementing <Link className="link" to="/virtulization">virtulization</Link> .</li>
                            <li>Practicing server consolidation.</li>
                            <li>Upgrading older equipment for newer, more energy-efficient products.</li>
                            <li>Employing systems management to increase efficiency.</li>
                            <li>Substituting telecommuting, remote administration and videoconferencing for travel.</li>
                        </ul>
                    </p>
                    <p>
                    Although investing in green networking may require an initial cash outlay, the products and practices involved typically save money once put in place.
                    </p>
                    <p>
                         See also: 
                         <Link className="link" to="/green_data_center">green data center</Link> ; 
                         <Link className="link" to="/green_computing">green computing</Link> 
                    </p>
                    
                </div>
                <Footer />
            </div>
        );
    }
}

export default Green_networking;