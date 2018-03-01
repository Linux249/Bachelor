export default function getNeighbors(node, links) {
    //console.log(node)
    return links.reduce((neighbors, link) => {
            //console.log(link)
            //if (link.target === node) {
            //console.log("target")
            //console.log(node)
            //console.log(link.target)
            //link.source.value = link.value
            //neighbors.push(link.source)
            //neighbors.push(nodes.find(n => n.id === link.source.id))
            //neighbors.push(link.source.id)
            //} else
            if (link.source === node) {
                link.target.value = link.value
                //console.log("source")
                //neighbors.push(nodes.find(n => n.id === link.target.id))
                //neighbors.push(link.target.id)
                neighbors.push(link.target)
            }
            return neighbors
        },
        []
    )
}