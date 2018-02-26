import * as d3 from 'd3'
import graph from '../mock/graph'

console.log(graph)
// draggen im raster: https://jsfiddle.net/6g9howo7/11/



let nodes_data = graph.nodes.map(node => {
    console.log(node.y)
    //node.fx = node.x*50 + 700
    node.x = node.x*50 + 700 // 20fache
    node.xx = node.x*50 + 700 // 20fache
    //node.fy = node.y*20 + 300  // 20fache
    node.y = node.y*20 + 300  // 20fache
    node.yy = node.y*20 + 300  // 20fache
    return node
})

    const xx = [
    {"id": 0, "label": "A", y: 200, x: 200},
    {"id": 1, "label": "A", y: 400, x: 200},
    {"id": 2, "label": "A", y: 300, x: 400},

    {"id": 3, "label": "B", y: 100, x: 600},
    {"id": 4, "label": "B", y: 500, x: 600},

    {"id": 5, "label": "C", y: 300, x: 800},
    {"id": 6, "label": "C", y: 200, x: 1000},
    {"id": 7, "label": "C", y: 400, x: 1000}
]

nodes_data = nodes_data.map(node => {
    ////node.fy = node.f
    return node
})

//Create links data
let links_data = graph.links

    const yy =  [
    {"source": 0, "target": 1, id: 1},
    {"source": 1, "target": 2, id: 2},
    {"source": 2, "target": 0, id: 3},

    {"source": 2, "target": 3, id: 4},
    {"source": 2, "target": 4, id: 5},
    {"source": 5, "target": 3, id: 6},
    {"source": 5, "target": 4, id: 7},

    {"source": 5, "target": 6, id: 8},
    {"source": 7, "target": 5, id: 9},
    {"source": 6, "target": 7, id: 10}
]

//Characters
// sex is for different node colors
/*nodes_data =  [
    {"name": "Lillian", "sex": "F", fx: 100, fy: 100},
    {"name": "Gordon", "sex": "M", fx: 150, fy: 150},
    {"name": "Sylvester", "sex": "M", fx: 200, fy: 200},
    {"name": "Mary", "sex": "F", fx: 250, fy: 250},
    {"name": "Helen", "sex": "F", fx: 300, fy: 300},
    {"name": "Jamie", "sex": "M", fx: 350, fy: 350},
    {"name": "Jessie", "sex": "F", fx: 400, fy: 400},
    {"name": "Ashton", "sex": "M", fx: 450, fy: 450},
    {"name": "Duncan", "sex": "M", fx: 500, fy: 30},
    {"name": "Evette", "sex": "F", fx: 550, fy: 120},
    {"name": "Mauer", "sex": "M", fx: 600, fy: 170},
    {"name": "Fray", "sex": "F", fx: 650, fy: 220},
    {"name": "Duke", "sex": "M", fx: 700, fy: 270},
    {"name": "Baron", "sex": "M", fx: 750, fy: 320},
    {"name": "Infante", "sex": "M", fx: 800, fy: 370},
    {"name": "Percy", "sex": "M", fx: 850, fy: 420},
    {"name": "Cynthia", "sex": "F", fx: 900, fy: 470}
]*/

/*
nodes_data =  [
    {"name": "Lillian", "sex": "F", x: 100, y: 100},
    {"name": "Gordon", "sex": "M", x: 150, y: 150},
    {"name": "Sylvester", "sex": "M", x: 200, y: 200},
    {"name": "Mary", "sex": "F", x: 250, y: 250},
    {"name": "Helen", "sex": "F", x: 300, y: 300},
    {"name": "Jamie", "sex": "M", x: 350, y: 350},
    {"name": "Jessie", "sex": "F", x: 400, y: 400},
    {"name": "Ashton", "sex": "M", x: 450, y: 450},
    {"name": "Duncan", "sex": "M", x: 500, y: 30},
    {"name": "Evette", "sex": "F", x: 550, y: 120},
    {"name": "Mauer", "sex": "M", x: 600, y: 170},
    {"name": "Fray", "sex": "F", x: 650, y: 220},
    {"name": "Duke", "sex": "M", x: 700, y: 270},
    {"name": "Baron", "sex": "M", x: 750, y: 320},
    {"name": "Infante", "sex": "M", x: 800, y: 370},
    {"name": "Percy", "sex": "M", x: 850, y: 420},
    {"name": "Cynthia", "sex": "F", x: 900, y: 470}
]*/

//Relationships
//type: A for Ally, E for Enemy - color of the links
/*links_data = [
    {"source": "Sylvester", "target": "Gordon", "type":"A" },
    {"source": "Sylvester", "target": "Lillian", "type":"A" },
    {"source": "Sylvester", "target": "Mary", "type":"A"},
    {"source": "Sylvester", "target": "Jamie", "type":"A"},
    {"source": "Sylvester", "target": "Jessie", "type":"A"},
    {"source": "Sylvester", "target": "Helen", "type":"A"},
    {"source": "Helen", "target": "Gordon", "type":"A"},
    {"source": "Mary", "target": "Lillian", "type":"A"},
    {"source": "Ashton", "target": "Mary", "type":"A"},
    {"source": "Duncan", "target": "Jamie", "type":"A"},
    {"source": "Gordon", "target": "Jessie", "type":"A"},
    {"source": "Sylvester", "target": "Fray", "type":"E"},
    {"source": "Fray", "target": "Mauer", "type":"A"},
    {"source": "Fray", "target": "Cynthia", "type":"A"},
    {"source": "Fray", "target": "Percy", "type":"A"},
    {"source": "Percy", "target": "Cynthia", "type":"A"},
    {"source": "Infante", "target": "Duke", "type":"A"},
    {"source": "Duke", "target": "Gordon", "type":"A"},
    {"source": "Duke", "target": "Sylvester", "type":"A"},
    {"source": "Baron", "target": "Duke", "type":"A"},
    {"source": "Baron", "target": "Sylvester", "type":"E"},
    {"source": "Evette", "target": "Sylvester", "type":"E"},
    {"source": "Cynthia", "target": "Sylvester", "type":"E"},
    {"source": "Cynthia", "target": "Jamie", "type":"E"},
    {"source": "Mauer", "target": "Jessie", "type":"E"}
]*/

let svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

//add zoom capabilities
var zoom_handler = d3.zoom()
    .on("zoom", zoom_actions);

zoom_handler(svg);

function zoom_actions(){
    g.attr("transform", d3.event.transform)
}

//add encompassing group for the zoom
var g = svg.append("g")
    .attr("class", "everything");

//set up the simulation
//nodes only for now
let simulation = d3.forceSimulation()
    .nodes(nodes_data);

//add forces
//we're going to add a charge to each node
//also going to add a centering force
simulation
.force("charge_force", d3.forceManyBody())          // nodes stoßen sich ab
.force("center_force", d3.forceCenter(width / 2, height / 2)); // nodes starten in der mitte


//Create the link force
//We need the id accessor to use named sources and targets
let link_force =  d3.forceLink(links_data)
    //.id(function(d) { return d.id; }) // link.id braucht funktion um id attribut von nodes zu wissen
    //.distance(50)   // default 30 - length of the links
    .strength(1)

//simulation.force("links",link_force)

function splitting_force() {
    for (var i = 0, n = nodes_data.length; i < n; ++i) {
        curr_node = nodes_data[i];
        curr_node.x = curr_node.xx
        curr_node.y = curr_node.yy
        // do things here to change the position and velocity of curr_node
        // position is curr_node.x, curr_node.y
        // velocity is curr_node.vx, curr_node.vy
    }
}
//Function to choose what color circle we have
//Let's return blue for males and red for females
function circleColour(d){
    if(d.type === "A"){
        return "blue";
    } else if(d.type === "B") {
        return "black";
    } else {
        // type === C
        return "red"
    }
}

//draw circles for the nodes
let node = g
    .append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes_data)
    .enter()
    .append("circle")
    .attr("r", 15)
    .attr("fill", circleColour)
//.append


//node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
// TODO warum nicht 'node' der funktion übergeben + return?
// The complete tickActions function
function tickActions() {
    //update circle positions each tick of the simulation
    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

    //update link positions
    //simply tells one end of the line to follow one node around
    //and the other end of the line to follow the other node around
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

}
simulation.on("tick", tickActions );




//Function to choose the line colour and thickness
//If the link type is "A" return green
//If the link type is "E" return red
function linkColour(d){
    //console.log(d);
    if(d.type === "A"){
        return "green";
    } else {
        return "red";
    }
}
//draw lines for the links
let link = g
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links_data)
    .enter().append("line")
    .attr("stroke-width", 2)
    .style("stroke", 'green');      //function linkColor()


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

function drag_start(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function drag_drag(d) {
    //console.log(`${d.x}:${d.y}`)
    //console.log(`${d.fx}:${d.fy}`)
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function drag_end(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

let drag_handler = d3.drag()
    .on("start", drag_start)
    .on("drag", drag_drag)
    .on("end", drag_end);


//apply the drag_handler to our nodes
drag_handler(node);