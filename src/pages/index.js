import * as React from 'react';
import Layout from '../components/layout';
import { text } from '../components/layout.module.css';
import { StaticImage } from 'gatsby-plugin-image';

// Title document
import Seo from './seo';
export const Head = () => <Seo title="Home Page" />


const HomePage = () => {
  return (
      // De StaticImage is voor afbeeldingen die statisch zijn (hun src is hardcoded)
      // GatsbyImage is voor dynamische afbeeldinge (hun src wordt via een prop doorgegeven) ~ In graphql kan je zo dan de placeholder, format etc instellen
      <Layout Title="Home">
          <p className={text}>Welkom op mijn website.</p>
          <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
                placeholder='dominantColor'
                formats={['webp']}
                layout='constrained'
          />
      </Layout>
  );
};

// Stap 3: Exporteren
export default HomePage;
