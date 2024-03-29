/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx } from '@emotion/core';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import typography from '../util/typography';

const BlogPostSummary = ({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return (
        <div css={typography.content}>
            <h3 css={typography.h3}>
                <Link to={node.fields.slug}>{title}</Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
                dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                }}
            />
        </div>
    );
};

export default ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    useEffect(() => {
        console.log(
            '%cbonjour habibi ✨',
            'font-family: cursive; color: violet; font-size: 2rem;'
        );
    }, []);

    return (
        <Layout location={location} title={siteTitle}>
            <SEO />
            {data.site.siteMetadata.blogEnabled ? (
                <React.Fragment>
                    {posts.map(({ node }) => (
                        <BlogPostSummary node={node} key={node.fields.slug} />
                    ))}
                    <hr />
                </React.Fragment>
            ) : null}
            <Bio />
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`;
