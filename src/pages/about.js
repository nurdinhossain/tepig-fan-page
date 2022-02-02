import * as React from 'react';
import Layout from "../components/layout";
import '../styles/main.scss';

const AboutPage = () => {
    return (
        <div className="main">
            <Layout>
                <h1>About</h1>
                <p>This is the about page</p>
            </Layout>
        </div>
    );
}

export default AboutPage;