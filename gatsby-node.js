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
    const singlePost = path.resolve('src/templates/singlePost.js')

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

        const post = res.data.allMarkdownRemark.edges

        post.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: singlePost,
                context: {
                    // passing slug for template to get post
                    slug: node.fields.slug
                }
            })
        })
    })
}
