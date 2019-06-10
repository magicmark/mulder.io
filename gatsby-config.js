module.exports = {
    siteMetadata: {
        title: `Matt Mulder`,
        author: `Matt Mulder`,
        description: `Hey there! 👋 I'm a software engineer based in San Francisco. I'm currently working on frontend infrastructure at @YelpEngineering.`,
        siteUrl: `https://www.mulder.io/`,
        social: {
            twitter: `mxmul`,
        },
        blogEnabled: false,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-52386144-1`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Matt Mulder`,
                short_name: `mulder.io`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#283aa0`,
                display: `minimal-ui`,
                icon: `content/assets/think.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Alegreya Sans`,
                        subsets: [`latin`],
                        variants: [`700`],
                    },
                ],
            },
        },
    ],
};
