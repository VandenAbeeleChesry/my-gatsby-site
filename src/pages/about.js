import * as React from 'react';
import Layout from '../components/layout';
import { text } from '../components/layout.module.css';

// Title document
import Seo from './seo';
export const Head = () => <Seo title="About Page" />

const AboutPage = () => {
    return (
        <Layout Title="About">
            <p className={text}>Ik ben een stagiar bij Qite.</p>
        </Layout>
    )
}

export default AboutPage;

