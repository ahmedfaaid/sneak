require('dotenv').config()
module.exports = {
    siteMetadata: {
        title: `Sneakersseur`,
        description: `Read all the latest sneaker news and reviews.`,
        author: `Ahmed Alhassan`,
        siteUrl: `https://sneakersseur.netlify.com`,
        image: `./src/images/sneakersseur-logo.png`,
        siteLanguage: `en-CA`,
        siteLocale: `en-ca`,
        twitter: `@sneakersseur`,
        instagram: `@sneakersseur`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `reviews`,
        //         path: `${__dirname}/src/pages/reviews`
        //     }
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `news`,
                path: `${__dirname}/src/pages/news`
            }
        },
        {
            resolve: `gatsby-source-instagram`,
            options: {
                username: `sneakersseur`
            }
        },
        {
            resolve: `gatsby-plugin-mailchimp`,
            options: {
                endpoint: process.env.MAILCHIMP_POST
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`
                // icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-postcss`
    ]
}
