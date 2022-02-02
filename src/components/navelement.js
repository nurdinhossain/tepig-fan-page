import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const NavElement = ({ title, link }) => {
    return (
        <Link to={link} className="nav-element-link">
            <StaticImage 
                src="../images/brown-paint.png"
                width={250}
            />
            <h1>{title}</h1>
        </Link>
    );
}

export default NavElement;