// import React, { Component } from 'react';
// //import { Link } from 'react-router';
// import { Link } from 'react-router-dom';

// export default class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <a className="navbar-brand" href="/">fcexam</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//          <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="container">
        
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item active">
//                 <Link className="nav-link" to="/Application">Application</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">About</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">Contact</Link>
//               </li>
//               <li className="nav-item" >
//               <Link className="nav-link" to="/">Result</Link>
//               </li>
//               <li class="nav-item">
//               <a class="nav-link" href="#">Pricing</a>
//               </li>
//             </ul>
//           </div>
//         </div>

//    </nav>
  import React, { Component } from 'react';
   import { Link } from 'react-router-dom';
  import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <Link className="navbar-brand" to="/">FC EXAM</Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
