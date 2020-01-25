import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav className="nav" style={{display:"flex",justifyContent:"space-between"}}>
            <Link style={{ color: "white", fontWeight: "bold", textDecoration: "none" , paddingLeft:20}} to='/'> <h3> Hotel Booking</h3></Link>
            <div>
                <Link style={{ color: "white", fontWeight: "bold", textDecoration: "none",paddingRight:20 }} to='/about'>
                        About Us
                </Link>

                <Link style={{ color: "white", fontWeight: "bold", textDecoration: "none",paddingRight:20 }} to='/contact'>
                    
                        Contact Us
                    
                </Link>
                </div>

            



        </nav>



    )
}

export default Nav;