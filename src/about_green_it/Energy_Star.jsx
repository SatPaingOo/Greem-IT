import React, { Component } from 'react';
import Navber from '../components/Navber.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import { Link } from 'react-router-dom';

class Energy_Star extends Component {
    render() {
        return (
            <div>
                <Navber />
                <Jumbotron title="Energy Star" subtitle="This is Energy Star!" />

                <div className="container">
                    <p>
                        Energy Star is a government-backed labeling program that helps people and organizations save money and reduce greenhouse gas emissions by identifying factories, office equipment, home appliances and electronics that have superior energy efficiency. In recent years, Energy Star ratings have been extended to some new homes, commercial and industrial facilities. Energy Star originated in 1992 as a joint program of the U.S. Environmental Protection Agency (EPAM) and the U.S. Department of Energy (DoE). In 2007, the European Union adapted Energy Star, including related standards, for all of its members. Australia and New Zealand has already adopted the program. As a result, the Energy Star symbol has become the international symbol for energy efficiency.
                    </p>
                    <p>
                        Any building or product that has received an Energy Star rating carries a blue logo, pictured above. Energy Star is a voluntary labeling system, though most manufacturers find it commercially desirable to display the logo if their products qualify. The standards themselves, however, are set by governmental agencies. Energy Star labels, for instance, are only awarded to homes that have been independently verified to be at least 15% more efficient than the standard mandated by the relevant state or local energy codes in a given area.
                    </p>
                    <p>
                        Computers were one of the first devices to be rated by Energy Star. In general, computer energy consumption can be reduced in two ways: by using components that require less power or by using power management software to modulate the energy consumption of these components. Energy Star ratings are available for desktop computers, laptops, workstations and gaming consoles. PDAs, smartphones, 
                        <Link className="link" to="/blade_servers"> blade servers</Link>, 
                        <Link className="link" to="/thin_clients"> thin clients</Link> 
                        and large servers are not, as of the end of 2007, rated by Energy Star. For any PC shipped through enterprise channels to receive an Energy Star rating, however, it must specifically:
                        <ul>
                            <li>ship with an automatic sleep mode set to activate in 15 minutes</li>
                            <li>automatically disable Wake on LAN (WOL) enabled from sleep mode while on AC power</li>
                            <li>maintain network connectivity while in sleep mode</li>
                            <li>depending on its classification, require between 65 and 95 
                                <Link className="link" to="/watt"> watt</Link>s of power</li>   
                        </ul>
                    </p>
                    <p>
                        In 2007, a new specification for desktop computers was introduced. Version 4.0 mandates higher standards than the previous iteration, requiring 80% or greater power supply efficiency to gain an Energy Star approved stamp. This 80% efficiency standard is the subject of advocacy efforts by 80 PLUS, an electric utility-funded incentive program that encourages the integration of energy-efficient power supplies into desktop computers and servers. According to their Web site, "the 80 PLUS performance specification requires power supplies in computers and servers to be 80% or greater energy efficient at 20%, 50% and 100% of rated load with a true power factor of 0.9 or greater. This makes an 80 PLUS certified power supply substantially more efficient than typical power supplies."
                    </p>
                    <p>
                        Energy Star provides online assessment tools that allow businesses and consumers to rate the efficiency of homes and industrial facilities. Energy Star ratings have become an important component of buying decisions for both consumers and businesses. More efficient buildings, appliances and hardware mean significant savings over time on heating or power costs.
                    </p>
                    <p>
                        The EPA estimates that if every U.S. household and business replaced old computers with new Energy Star-qualified models, more than $1.8 billion in energy costs would be saved over the next five years, avoiding greenhouse gas emissions equivalent to more than those produced by 2.7 million cars. Similarly, Energy Star-qualified florescent bulbs consume up to 75% less energy than standard incandescent bulbs to provide the same amount of light, and last up to 10 times longer.
                    </p>
                    <p>
                        Adoption of energy efficient practices are an important component of the green computing movement, both in terms of lower operating costs and reduced pressure on the energy grid. This in turn over time reduces, if not halts, the growth in greenhouse gasses emitted by coal-fired energy plants. These gasses, according to recent reports from the Intergovernmental Panel on Climate Change are the major component in the rapid warming of the Earth over the past century, a development which has potentially disastrous results for both humans and ecosystems in general worldwide.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Energy_Star;