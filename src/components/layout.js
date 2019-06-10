/** @jsx jsx */
import emotionReset from 'emotion-reset';
import { jsx, Global, css } from '@emotion/core';

import { Link } from 'gatsby';
import facepaint from 'facepaint';
import { background, link, linkVisited, text } from '../util/colors';
import typography from '../util/typography';

const mq = facepaint([
    '@media(min-width: 420px)',
    '@media(min-width: 960px)',
    '@media(min-width: 1120px)',
]);

const bs = typography.baseSpacing;

const marginTB = [bs(1), bs(2), bs(2.5)];
const marginRL = [bs(1), bs(3), 'auto'];

const Header = ({ location, title }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    if (location.pathname === rootPath) {
        return (
            <header>
                <h1 css={typography.h1}>
                    <Link
                        to={`/`}
                        css={css`
                            color: ${text};
                            :visited {
                                color: ${text};
                            }
                        `}
                    >
                        {title}
                    </Link>
                </h1>
            </header>
        );
    } else {
        return (
            <header>
                <h3 css={typography.h3}>
                    <Link to={`/`}>{title}</Link>
                </h3>
            </header>
        );
    }
};

export default ({ location, title, children }) => (
    <div>
        <Global
            styles={css`
                ${emotionReset};
                body {
                    background-color: ${background};
                    font-family: Helvetica, sans-serif;
                    ${typography.body};
                    ${mq({
                        marginLeft: marginRL,
                        marginRight: marginRL,
                        marginTop: marginTB,
                        marginBottom: marginTB,
                    })};
                    max-width: 900px;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-family: 'Alegreya Sans', sans-serif;
                    a {
                        text-decoration: none;
                        :visited {
                            color: ${link};
                        }
                    }
                }
                a {
                    color: ${link};
                    :visited {
                        color: ${linkVisited};
                    }
                }
                strong,
                b {
                    font-weight: bold;
                }
                em,
                italic {
                    font-style: italic;
                }
                ul {
                    list-style-type: disc;
                    margin-left: ${bs()};
                }
                hr {
                    margin-top: ${bs(2)};
                    margin-bottom: ${bs(2)};
                    border-top: 1px dashed ${link};
                }
            `}
        />
        <Header location={location} title={title} />
        <main>{children}</main>
    </div>
);
