import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className="footer">

            <nav class="navbar bottom navbar-light bg-warning text-dark ">
                <Link to="/" className="navbar-brand"><h3>Health and Diet Portal</h3></Link>

                <br />
                <div className="navbar ">

                <Link to="/about" className="navbar-brand">About</Link>
                    <Link to="/contact" className="navbar-brand"> Contact Us</Link>
                    <Link to="/food-recipes" className="navbar-brand">Food & Recipes</Link>

                </div>
            </nav>

        </div>
    )
}

export default Footer;