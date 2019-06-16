/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import typography from '../util/typography';

const bs = typography.baseSpacing;

const socialMediaData = [
    {
        name: 'twitter.com/mxmul',
        href: 'https://twitter.com/mxmul',
    },
    {
        name: 'linkedin.com/in/mxmul',
        href: 'https://linkedin.com/in/mxmul',
    },
    {
        name: 'github.com/mxmul',
        href: 'https://github.com/mxmul',
    },
];

const SocialMediaLinks = ({ data }) => (
    <ul>
        {data.map(({ name, href }) => (
            <li
                key={name}
                css={css`
                    margin-bottom: ${bs(0.25)};
                `}
            >
                <a href={href}>{name}</a>
            </li>
        ))}
    </ul>
);

export default () => (
    <StaticQuery
        query={bioQuery}
        render={data => (
            <div
                css={css`
                    display: flex;
                    flex-wrap: wrap;
                `}
            >
                <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt="Matt Mulder"
                    css={css`
                        border-radius: 100%;
                        width: 100px;
                        margin-right: ${bs()};
                        margin-bottom: ${bs()};
                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
                        flex: 0 0 auto;
                    `}
                />
                <div
                    css={css`
                        ${typography.content};
                        flex: 1;
                    `}
                >
                    <h2 css={typography.h4}>
                        Hey there!{' '}
                        <span role="img" aria-label="Waving Hand">
                            👋
                        </span>
                    </h2>
                    <p css={typography.content}>
                        I'm a software engineer based in San Francisco. I'm
                        currently working on frontend infrastructure at{' '}
                        <a href="https://twitter.com/YelpEngineering">
                            @YelpEngineering
                        </a>
                        .
                    </p>
                    <p css={typography.content}>
                        Please enjoy my social media links:
                    </p>

                    <SocialMediaLinks data={socialMediaData} />
                </div>
            </div>
        )}
    ></StaticQuery>
);

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
            childImageSharp {
                fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;
