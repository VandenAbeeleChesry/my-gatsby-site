// Hier verzamelen we alle herbuikbare componenten
import * as React from 'react';

// Link werkt als een a-tag ~ building-block component
import { Link, useStaticQuery, graphql } from 'gatsby';

// Importeren css
import { container, navLink, navList, headerTitle, text, titleText } from './layout.module.css'

// Children is content binnen de opgeroepen layout
const Layout = ({Title, children, PageTitle}) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                title
                }
            }
        }
    `);

    // console.log(data.site.siteMetadata.title);
    
    return (
        <div className={container}>  
            <p className={`${text} ${titleText}`}>{data.site.siteMetadata.title}</p>
            <nav>
                <ul className={navList}>
                    <li>
                        <Link to="/" className={navLink}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={navLink}>About</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={navLink}>Blog</Link>
                    </li>
                </ul>
            </nav>
            <header>
                <h1 className={headerTitle}>{Title}</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

// Stap 3: Exporteren
export default Layout;
