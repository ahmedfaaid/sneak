const { slugify } = require('./src/util/utilityFunctions')
const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const singleReview = path.resolve('src/templates/singleReview.js')
    const singleNews = path.resolve('src/templates/singleNews.js')

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if (res.errors) return Promise.reject(res.errors)

        const reviews = res.data.allMarkdownRemark.edges
        const news = res.data.allMarkdownRemark.edges

        reviews.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: singleReview,
                context: {
                    // passing slug for template to get post
                    slug: node.fields.slug
                }
            })
        })

        news.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: singleNews,
                context: {
                    // passing slug for template to get post
                    slug: node.fields.slug
                }
            })
        })
    })
}
