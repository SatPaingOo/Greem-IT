import React, { Component } from 'react';
import Navber from '../components/Navber.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
    render() {
        return (
            <div>
                <Navber />
                <Jumbotron title="Contact" subtitle="the subtitle Contact" />

                <div className="container">
                    <h2>Welcome</h2>
                    <p>
                         Welcome Myanmar........... 
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;