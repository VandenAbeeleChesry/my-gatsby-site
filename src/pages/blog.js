import * as React from 'react';
import Layout from '../components/layout';
import { text } from '../components/layout.module.css';

import { graphql } from 'gatsby';

// Title document
import Seo from './seo';
export const Head = () => <Seo title="Blog Page" />

const BlogPage = ({data}) => {
    console.log(data);
    
    return (
        <Layout Title="Blog">
            <p className={text}>Welkom op de blog pagina. Hier vind je alle bogs.</p>
            <ul>
            {
                // We maken een loop (map) door de data.allFile.nodes en we zeggen dat elke item (node) dit en dit is
                // Alles moet ook een key hebben zoals (vue!)
                data.allFile.nodes.map((node) => {
                    return (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    );
                })
            }
            </ul>
        </Layout>
    )
}

export default BlogPage

export const data = graphql` 
query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
            name
        }
    }
}`;