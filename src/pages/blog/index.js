import * as React from 'react';
import Layout from '../../components/layout';
import { text } from '../../components/layout.module.css';

import { graphql, Link } from 'gatsby';

// Title document
import Seo from '../seo';
export const Head = () => <Seo title="Blog Page" />;

const BlogPage = ({ data }) => {
  // console.log(data);

  return (
    <Layout Title="Blog">
      <p className={text}>Welkom op de blog pagina. Hier vind je alle bogs.</p>
      {
        // We maken een loop (map) en we zeggen dat elke item (node) is ~ meestal is dat bij query onder "all"
        // Alles moet ook een key hebben zoals (vue!)
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link to={`/blog/${node.frontmatter.slug}`}>Read more</Link>
          </article>
        ))
      }
    </Layout>
  );
};

export default BlogPage;

// Alles binnen frontmatter is de content binnen de ---
// Alles binnen excerpt is de content van de blog ~ hier tonen we een preview maar op de index wil de content van de blog met de html in verwerkt daarom spreken we children aan of je kan dit gewoon weg laten vallen
export const data = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
            date(formatString: "MMMM D, YYYY")
            slug
            title
        }
      }
    }
  }
`;
