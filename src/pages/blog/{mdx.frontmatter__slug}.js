import * as React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';

// Title
import Seo from '../seo';
export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />;

// Aan de hand van de id hier beneden in de graphql weet die welke data hij moet tonen (iets zoals een _entry.twig)
// Altijd oproepen met data!
const BlogPost = ({ data, children }) => {  
  return (
    <Layout Title={data.mdx.frontmatter.title}>
      <p>My blog post contents will go here (eventually).</p>
      <p>{data.mdx.frontmatter.date}:</p>
      {children}
      <Link to="/blog">Go back</Link>
    </Layout>
  );
};

export default BlogPost;

export const data = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`