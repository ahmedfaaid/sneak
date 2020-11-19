const fetch = require('node-fetch')
const { DateTime } = require('luxon')
const { createRemoteFileNode } = require('gatsby-source-filesystem')

exports.sourceNodes = async (
    { actions, createNodeId, createContentDigest },
    configOptions
) => {
    const { createNode } = actions
    delete configOptions.plugins

    const apiUrl = `https://api.thesneakerdatabase.com`
    const now = DateTime.local().toISODate()

    const response = await fetch(
        `${apiUrl}/v1/sneakers?limit=50&releaseDate=gte:${now}`
    )
    const data = await response.json()
    const { results } = data

    results.forEach(res => {
        const nodeContent = JSON.stringify(res)

        const nodeMeta = {
            ...res,
            image: res.media.imageUrl,
            id: createNodeId(`tsdb-${res.id}`),
            internal: {
                type: `TSDB`,
                content: nodeContent,
                contentDigest: createContentDigest(res)
            }
        }

        const node = Object.assign({}, res, nodeMeta)
        createNode(node)
    })
}

exports.onCreateNode = async ({
    actions,
    node,
    createNodeId,
    cache,
    store,
    reporter
}) => {
    const { createNode } = actions

    if (node.internal.type === 'TSDB') {
        let imageNode

        try {
            const { id } = await createRemoteFileNode({
                url: node.media.imageUrl,
                parentNodeId: node.id,
                createNode,
                createNodeId,
                cache,
                store
            })

            imageNode = id
        } catch (err) {
            reporter.log(
                `gatsby-source-tsdb: There was an error creating the image node`
            )
        }

        node.image___NODE = imageNode
    }
}
