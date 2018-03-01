import * as d3 from 'd3'
import graph from './mock/graphSmall'
import './stlye.css'
import getNodeColor from './util/getNodeColor'
import getNeighbors from './util/getNeighbors'

// draggen im raster: https://jsfiddle.net/6g9howo7/11/
// fix dragged + img: http://bl.ocks.org/norrs/2883411


let nodes = [],
    links = []

let nodeElements
let linkElements

/*let sendButton = document.getElementById('send');
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
})*/

/*let loadButton = document.getElementById('load');
loadButton.addEventListener('click', () => {
    console.log("load clicked")
    getData()
})*/

let refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', () => {
    console.log("refresh clicked")
    refreshData()
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

/*function getData () {
    fetch("http://localhost:8000/api/v1/dataFromFile", {
        method: "GET",
        mode: 'cors'
    })
        .then(res => res.json())
        .then(resData => run(resData))
}*/

/*function sendData(data) {
    fetch("http://localhost:8000/api/v1/dataFromFile", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        //mode: 'cors',
        body: JSON.stringify(data)
    })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(resData => console.log(resData))
}*/


function refreshData() {
    // TODO loading
    refreshButton.innerText = "loading"
    let data = nodes.map((node) => {
        let obj = {
            x: node.fx,
            y: node.fy,
            modified: node.modified,
            dragged: node.dragged,
            index: node.index,
            sx: node.sx,
            sy: node.sy
        }
        //if(obj.x !== node.sx && !obj.modified) {
            ///console.log(obj)
            //console.log(node)
        //}
        return obj
    })
    //
    fetch('http://localhost:8000/api/v1/dataFromFile', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
    })
        .then(res => {

            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            run(data)
            refreshButton.innerText = "Refresh"
        })
}

let width = window.innerWidth
let height = window.innerHeight

let scaleX = 40
let scaleY = 40

let svg = d3.select('svg')
svg
    .attr('width', width)
    .attr('height', height)
    .attr("viewBox", `${-width/2/scaleX} ${-height/2/scaleY} ${width/scaleX} ${height/scaleY}`)

function zoom_actions(){
    g.attr("transform", d3.event.transform)
}

//add zoom capabilities
let zoom_handler = d3.zoom()
    .on("zoom", zoom_actions)

zoom_handler(svg);

svg.on('dblclick.zoom', null)  // disable zoom behavior

//add encompassing group for the zoom
let g = svg.append("g")
    .attr("class", "everything");


function run(data) {
    if(nodes.length) {
        g.remove()
        g = svg.append("g")
            .attr("class", "everything");
    }

    //if(linkElements) linkElements.remove()

    nodes = data.nodes
    links = data.links


    
    nodes = nodes.map(node => {
        //console.log(node)
        //node.fx = node.x*50 + 700
        //node.x = node.x*50 + 700 // 20fache
        node.modified = false
        node.dragged = false
        node.sx = node.x
        node.sy = node.y
        node.fx = node.x//*width/25 //+ width/2 // 20fache
        //node.x = node.x*width/25 + width/2 // 20fache
        node.fy = node.y//*height/25 // + height/2  // 20fache

        //node.y = node.y*height/25 + height/2  // 20fache

        //node.y = node.y*20 + 300  // 20fache
        //node.fy = node.y*20 + 300  // 20fache
        return node
    })

    let simulation = d3.forceSimulation().nodes(nodes);





//set up the simulation
//nodes only for now


//add forces
//we're going to add a charge to each node
//also going to add a centering force
    //simulation
        //.force("charge_force", d3.forceManyBody())          // nodes stoßen sich ab
        //.force("center_force", d3.forceCenter(width / 2, height / 2)); // nodes starten in der mitte


//Create the link force
//We need the id accessor to use named sources and targets
    let link_force =  d3.forceLink(links)
        .id(function(d) { return d.index; }) // link.id braucht funktion um id attribut von nodes zu wissen
        //.distance(50)   // default 30 - length of the links
        .strength(0)

    simulation.force("links",link_force)



//draw lines for the links
    linkElements = g
        .append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", 0.02)
        .style("stroke", '#c8c8c8');      //function linkColor()

//draw circles for the nodes
    nodeElements = g
        .append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 0.25)
        .attr("fill", getNodeColor)
        .attr("stroke", "#cecece")
        .attr("stroke-width", 0.02)


//.append




//node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
// TODO warum nicht 'node' der funktion übergeben + return?
// The complete tickActions function
    function tickActions() {

        //update link positions
        //simply tells one end of the line to follow one node around
        //and the other end of the line to follow the other node around
        linkElements
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        //update circle positions each tick of the simulation
        nodeElements
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });

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
            neighbors = getNeighbors(node, links)
            console.log("in drag")
            console.log(neighbors)
            nodeElements.attr('fill',  function (n) { return getNodeColor(n, neighbors, node) })

            //node.fx = node.x
            //node.fy = node.y
            node.dragged = true
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
                simulation.restart()
            }
            //node.fx = d3.event.x
            //node.fy = d3.event.y
        })


//apply the drag_handler to our nodes
    dragDrop(nodeElements);

    nodeElements.on("dblclick",function(node){
        //console.log("dbclick")
        neighbors = getNeighbors(node, links)

        neighbors.map(n => {
            //console.log(n.value)
            // weighted
            //const dXw = dX/n.value
            //const dYw = dY/n.value
            //console.log({dXw, dYw})
            if(n.modified) n.modified = false
            if(n.dragged) n.dragged = false
            n.fx = n.sx
            n.fy = n.sy
        })

        if(node.dragged) node.dragged = false
        if(node.modified) node.modified = false
        node.fx = node.sx
        node.fy = node.sy
        simulation.restart()
    });
}



run(graph)