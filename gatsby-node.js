const { slugify } = require('./src/util/utilityFunctions')
const path = require('path')
const _ = require('lodash')

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

    const templates = {
        singlePost: path.resolve('src/templates/singlePost.js'),
        tagPosts: path.resolve('src/templates/tagPosts.js')
    }

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
                component: templates.singlePost,
                context: {
                    // passing slug for template to get post
                    slug: node.fields.slug
                }
            })
        })

        // create single tag page
        let tags = []
        _.each(post, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })

        tags.forEach(tag => {
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag
                }
            })
        })
    })
}
