import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import NavElement from "./navelement";
import '../styles/navbar.css';

const NavBar = () => {
    return (
        <div className="title-links-container">
            <Link to='/' className="title-link">
                <StaticImage 
                    src="../images/orange-paint.png"
                    width={500}
                />
                <h1>Tepig Fan Page</h1>
            </Link>

            <nav className="links-container">
                <NavElement title="Facts" link="/facts" />
                <NavElement title="Games" link="/games" />
                <NavElement title="About" link="/about" />
            </nav>
        </div>
    );
}

export default NavBar;