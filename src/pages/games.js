import * as React from 'react';
import Layout from "../components/layout";
import '../styles/main.scss';

const GamesPage = () => {
    return (
        <div className="main">
            <Layout>
                <h1>Games</h1>
                <p>This is the games page</p>
            </Layout>
        </div>
    );
}

export default GamesPage;