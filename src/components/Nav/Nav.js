import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav className="nav" style={{display:"flex"}}>
            <Link style={{ color: "white", fontWeight: "bold", textDecoration: "none" }} to='/'> <h3> Hotel Booking</h3></Link>
            <ul className="nav-links">

                <Link style={{ color: "white", fontWeight: "bold", textDecoration: "none" }} to='/about'>
                    <li>
                        About Us
                    </li>
                </Link>

                <Link style={{ color: "white", fontWeight: "bold", textDecoration: "none" }} to='/contact'>
                    <li>
                        Contact Us
                    </li>
                </Link>


            </ul>



        </nav>



    )
}

export default Nav;