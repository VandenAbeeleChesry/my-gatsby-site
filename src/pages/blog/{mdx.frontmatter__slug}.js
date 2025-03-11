import * as React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';

// Importeren voor het dynamisch inladen
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Title
import Seo from '../seo';
export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />;

// Aan de hand van de id hier beneden in de graphql weet die welke data hij moet tonen (iets zoals een _entry.twig)
// Altijd oproepen met data!
const BlogPost = ({ data, children }) => {  
  // console.log(data);

  // Roep de image op
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout Title={data.mdx.frontmatter.title}>
      <p>My blog post contents will go here (eventually).</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>{data.mdx.frontmatter.date}:</p>
      {children}
      <Link to="/blog">Go back</Link>
    </Layout>
  );
};

export default BlogPost;

// In de frontmatter in de mdx files hebben we dus ook zaken die te maken hebben met de images erin gestoken
// Zoals je ziet kunnen we de settings van de image ook zo aanpassen
export const data = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(
              formats: WEBP, 
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`