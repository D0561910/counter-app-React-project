import React, { Component } from 'react';

/* class NavBar extends Component {
    render() { 
        return ( 
         );
    }
}
  */
/* export default NavBar;
 */

const NavBar = ({totalCounters}) => {
    return (  
            <nav className="navbar navbar-light bg-light ">
                <a className="navbar-brand" href="#">
                    Navbar
            <span className="badge-pill badge-secondary m-2">
            {totalCounters}
            </span>
                 </a>
            </nav>

    );
}
 
export default NavBar;