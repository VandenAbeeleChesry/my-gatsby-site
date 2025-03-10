import * as React from 'react';
import Layout from '../components/layout';
import { text } from '../components/layout.module.css';
import { StaticImage } from 'gatsby-plugin-image';

// Title document
import Seo from './seo';
export const Head = () => <Seo title="Home Page" />


const HomePage = () => {
  return (
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
