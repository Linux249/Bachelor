import * as d3 from "d3";

export default function getNodeColor(node, neighbors, draggedNode) {
    let color = d3.rgb(node.color)
    //return color
    //painting dragged node
    if(draggedNode && draggedNode.index && draggedNode.index === node.index ) return color

    // painting neighbours
    else if (Array.isArray(neighbors) && neighbors.find(n => n.index === node.index)) return color

    //nodes not dragged while dragging
    else if(draggedNode && draggedNode.index) {
        console.log(draggedNode)
        color.opacity = 0.2
        //color.darker(1)
        return color
    }

    // default
    else return color
}