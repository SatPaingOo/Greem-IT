import React, { Component } from 'react';
import Navber from '../components/Navber.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';
import './Style.css';


class Virtulization extends Component {
    render() {
        return (
            <div>
                <Navber />
                <Jumbotron title="Virtulization" subtitle="this is virtulization" />

                <div className="container">
                    <p>
                    Virtualization is the creation of a 
                    <Link className="link" to="/virtual"> virtual</Link> 
                     -- rather than actual -- version of something, such as an  
                     <Link className="link" to="/operating_system"> operating system</Link> , 
                     a <Link className="link" to="/server">server</Link> ,
                      a storage device or network resources.
                    </p>
                    <p>
                    You probably know a little about virtualization if you have ever divided your  
                    <Link className="link" to="/hard_drive"> hard drive</Link>  
                    into different partitions. A  
                    <Link className="link" to="/partition"> partition</Link>  is the logical division of a hard disk drive to create, in effect, two separate hard drives.
                    </p>
                    <p>

                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Virtulization;