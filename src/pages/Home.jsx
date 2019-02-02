import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="..................................................." subtitle="" />
        <div className="container">
          <div className="container"><h1>Farook college(Autonomous),kozhikode</h1></div>
         <p>Farook College, today,is the biggest residential postgraduate institution in Kerala offering 20 undergraduate, 15 postgraduate and Eight Ph.D. programmes.</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home