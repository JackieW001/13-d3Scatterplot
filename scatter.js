var svg = document.getElementById("svg");

var info = [1,1,1,2,3,0,9,4,3,0,0,2,5,3,6]

var yourefired = function(e){
    var cont = d3.select("svg");
    var circles = cont.selectAll("circle").data(info).enter();

    // circles
    circles.append("circle")
	.attr("cy", function(d) { return 400 - d*50; })
	.attr("cx", function(d,i) { return i*40 + 100; })
	.attr("r", 10)
	.attr("fill", "powderblue")

    //text
    var text = cont.selectAll("text").data(info).enter();
    text.append("text")
	.attr("y", function(d) { return 400 - d*50; })
	.attr("x", function(d,i) { return i*40 + 80; })
	.text(function(d) {return d;})
    text.append("text")
	.attr("y", 450)
	.attr("x", function(d, i) {return i*40 + 95; })
	.text(function(d,i) {return i;})
    
    //lines
    var lines = cont.selectAll("line").data(info).enter();
    lines.append("line")
	.attr("x1", function(d,i) { return i*40 + 100; })
	.attr("y1", 0)
	.attr("x2", function(d,i) { return i*40 + 100; })
	.attr("y2", 450)
	.attr("stroke", "lightgrey")
    lines.append("line")
	.attr("x1", 100)
	.attr("y1", 400)
	.attr("x2", 660)
	.attr("y2", 400)
	.attr("stroke", "grey")

}
yourefired();
