import * as React from "react";
import NavBar from "./navbar";
import '../styles/main.scss';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;