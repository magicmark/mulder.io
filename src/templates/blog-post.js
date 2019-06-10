/** @jsx jsx */
import { graphql } from 'gatsby';
import { jsx, css } from '@emotion/core';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import typography from '../util/typography';

export default ({ data, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <h1 css={typography.h1}>{post.frontmatter.title}</h1>
            <p css={typography.content}>{post.frontmatter.date}</p>
            <div
                dangerouslySetInnerHTML={{ __html: post.html }}
                css={css`
                    p,
                    ol,
                    ul,
                    pre {
                        ${typography.content}
                    }
                    h1 {
                        ${typography.h1}
                    }
                    h2 {
                        ${typography.h2}
                    }
                    h3 {
                        ${typography.h3}
                    }
                    h4 {
                        ${typography.h4}
                    }
                    h5 {
                        ${typography.h5}
                    }
                    h6 {
                        ${typography.h6}
                    }
                `}
            />
            <hr />
            <Bio />
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;
