import * as d3 from 'd3'
import graph from '../mock/graph'
import './stlye.css'

// draggen im raster: https://jsfiddle.net/6g9howo7/11/

let nodes, links

let sendButton = document.getElementById('send');
sendButton.addEventListener('click', () => {
    console.log("hello")

    let data = nodes.map((node) => {
        let obj = {
            x: node.fx,
            y: node.fy,
            modified: node.modified,
            index: node.index
        }
        return obj
    })
    sendData(data)
})

let loadButton = document.getElementById('load');
loadButton.addEventListener('click', () => {
    console.log("load")
    getData()
})



// save graph to api
/*fetch("http://localhost:8000/api/v1/dataFromFile", {
    method: "POST",
    headers: {
        'content-type': 'application/json'
    },
    mode: 'no-cors',
    body: JSON.stringify(graph)
}).then(res => res.json()).then(resData => console.log({resData}))*/

function getData () {
    fetch("http://localhost:8000/api/v1/dataFromFile", {
        method: "GET",
        mode: 'cors'
    })
        .then(res => res.json())
        .then(resData => run(resData))
}

function sendData(data) {


    fetch("http://localhost:8000/api/v1/dataFromFile", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(resData => console.log(resData))
}


function refreshData() {
    // TODO loading

    //
    fetch('', {})
}

let width = window.innerWidth
let height = window.innerHeight

let svg = d3.select('svg')
svg.attr('width', width).attr('height', height)//.attr("viewport", '250 250 20 20')

/*nodes = [
{

    'image name': 'vincent-van-gogh_sower-1888-1',
    'color': 'magenta',
    'y': -11.679933,
    'x': -1.2364955,
    'fixed': true,
    'size': 5
}, {
    'image name':
        'william-turner_the-bass-rock-for-the-provincial-antiquities-of-scotland',
    'color': 'yellow',
    'y': -4.3107944,
    'x': 5.371901,
    'fixed': true,
    'size': 5
}, {
    'image name':
        'rembrandt_the-descent-from-the-cross-by-torchlight-1654',
    'color': 'lime',
    'y': 5.8075552,
    'x': -1.6942906,
    'fixed': true,
    'size': 5
}, {
    'image name':
        'claude-monet_cliff-at-grainval-near-fecamp',
    'color': 'cyan',
    'y': -10.629107,
    'x': -2.3567722,
    'fixed': true,
    'size': 5
}, {
    'image name':
        'vincent-van-gogh_cypresses-1889-2',
    'color': 'magenta',
    'y': 2.8836176,
    'x': -1.6800337,
    'fixed': true,
    'size': 5
}]
*/

function run(data) {

    nodes = data.nodes
    links = data.links

    nodes = nodes.map(node => {
        //console.log(node)
        //node.fx = node.x*50 + 700
        //node.x = node.x*50 + 700 // 20fache
        node.modified = false
        node.fx = node.x*width/25 + width/2 // 20fache
        node.fy = node.y*height/25 + height/2  // 20fache

        //node.y = node.y*20 + 300  // 20fache
        //node.fy = node.y*20 + 300  // 20fache
        return node
    })
    /*
    links = [
        {
            'source': 0,
            'target': 1,
            'value': 3.0
        },
        {
            'source': 0,
            'target': 2,
            'value': 3.0
        }, {
            'source': 2,
            'target': 3,
            'value': 3.0
        },
        {'source': 3, 'target': 4, 'value': 3.0}]
    */
    console.log(links)
    /*
    .map(link => {
        console.log(link)
            const li = {
                index: link.index,
                source: link.source.index,
                target: link.target.index
            }
            console.log(li)
            return li
        }
    )
     */

    function getNeighbors(node) {
        //console.log(node)
        return links.reduce((neighbors, link) => {
                //console.log(link)
                if (link.target === node) {
                    //console.log("target")
                    //console.log(node)
                    //console.log(link.target)
                    link.source.value = link.value
                    neighbors.push(link.source)
                    //neighbors.push(nodes.find(n => n.id === link.source.id))
                    //neighbors.push(link.source.id)
                } else if (link.source === node) {
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

//add zoom capabilities
    let zoom_handler = d3.zoom()
        .on("zoom", zoom_actions);

    zoom_handler(svg);

    function zoom_actions(){
        g.attr("transform", d3.event.transform)
    }

//add encompassing group for the zoom
    let g = svg.append("g")
        .attr("class", "everything");

//set up the simulation
//nodes only for now
    let simulation = d3.forceSimulation()
        .nodes(nodes);

//add forces
//we're going to add a charge to each node
//also going to add a centering force
    simulation
        .force("charge_force", d3.forceManyBody())          // nodes stoßen sich ab
        .force("center_force", d3.forceCenter(width / 2, height / 2)); // nodes starten in der mitte


//Create the link force
//We need the id accessor to use named sources and targets
    let link_force =  d3.forceLink(links)
        .id(function(d) { return d.index; }) // link.id braucht funktion um id attribut von nodes zu wissen
        //.distance(50)   // default 30 - length of the links
        .strength(0)

    simulation.force("links",link_force)


    function getNodeColor(node, neighbors) {
        //console.log({node, neighbors})
        if (Array.isArray(neighbors)) {
            //console.log("neighbors")
            //console.log(neighbors)
            //console.log(node)
            const t = neighbors.find(n => {
                //console.log("n: "+ n.index)
                //console.log("node: " + node.index)
                return (n.index === node.index)
                //console.log("Green")
            })
            if(t) return 'green'

        } else if(node.color) return node.color
        return 'gray'
    }


//draw circles for the nodes
    let nodeElements = g
        .append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 15)
        .attr("fill", getNodeColor)
//.append


//draw lines for the links
    let linkElements = g
        .append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", 2)
        .style("stroke", '#c8c8c8');      //function linkColor()


//node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
// TODO warum nicht 'node' der funktion übergeben + return?
// The complete tickActions function
    function tickActions() {
        //update circle positions each tick of the simulation
        nodeElements
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

        //update link positions
        //simply tells one end of the line to follow one node around
        //and the other end of the line to follow the other node around
        linkElements
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

    }
    simulation.on("tick", tickActions );



// aktuell lässt sich die positionierung beibehalten wenn alle forces ausgeschaltet sind
// scheinbar geht auch fx

//create drag handler with d3.drag()
//only interested in "drag" event listener, not "start" or "end"
    /*let drag_handler = d3.drag()
        .on("drag", function(d) {
            d3.select(this)
                .attr("cx", d.x = d3.event.x  )
                .attr("cy", d.y = d3.event.y  );
        });*/

    let neighbors

    let dragDrop = d3.drag()
        .on('start', function (node) {
            neighbors = getNeighbors(node)
            console.log("in drag")
            console.log(neighbors)
            nodeElements.attr('fill',  function (node) { return getNodeColor(node, neighbors) })
            //node.fx = node.x
            //node.fy = node.y
            node.startX = node.fx
            node.startY = node.fy
            //console.log(node)
        }).on('drag', function (node) {
            //simulation.alphaTarget(0.7).restart()
            simulation.restart()
            // distance
            //const dX =  d3.event.x - node.startX
            //const dY = d3.event.y - node.startY
            //console.log({dX, dY})
            neighbors.map(n => {
                //console.log(n.value)
                // weighted
                //const dXw = dX/n.value
                //const dYw = dY/n.value
                //console.log({dXw, dYw})
                if(!n.modified) n.modified = true
                n.fx += d3.event.dx/n.value
                n.fy += d3.event.dy/n.value
            })

            //neighbors[0].fx = d3.event.x +10
            //neighbors[0].fy = d3.event.y +10

            //console.log(d3.event.dx)
            if(!node.modified) node.modified = true
            node.fx = d3.event.x
            node.fy = d3.event.y
        }).on('end', function (node) {
            nodeElements.attr('fill', function (node) { return getNodeColor(node) })
            if (!d3.event.active) {
                simulation.alphaTarget(0)
            }
            //node.fx = d3.event.x
            //node.fy = d3.event.y
        })


//apply the drag_handler to our nodes
    dragDrop(nodeElements);
}