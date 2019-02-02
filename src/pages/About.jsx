import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './About.css';


class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
    
        <div className="wrapper"> <form>
        <div><h3>Student Login</h3></div>
          <div className="form-wrapper">
          <label>RegisterNumber:</label>
          <input type="text"
                 placeholder="RegisterNo"
                 />
                   <div className="password">
          <label>Password</label>
        
           <input type="password"
                  placeholder="Password" 
                 />
                 </div>
          <button type="submit">Login</button>
          </div>
          </form></div>
       
        <Footer />
      </div>
    );
  }
}

export default About