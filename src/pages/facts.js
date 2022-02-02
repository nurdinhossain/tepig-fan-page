import * as React from 'react';
import Layout from "../components/layout";
import '../styles/main.scss';

const FactsPage = () => {
    return (
        <div className="main">
            <Layout>
                <h1>Facts</h1>
                <p>This is the facts page</p>
            </Layout>
        </div>
    );
}

export default FactsPage;