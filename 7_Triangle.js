/*Coordinates with moving curve - Triangle*/
d3.select("#sliderCurve").on("input",function(){
    let i = parseInt(d3.select(this).property("value"));
    console.log(i);
  
  var data = [[465, 300-i], [585, 300], [704, 300+i]];
  
  var lineGenerator = d3.line()
      .curve(d3.curveNatural);
  var pathString = lineGenerator(data);
  
  d3.select('#variable_strings')
      .attr('d', pathString)
      .attr("fill","white")
      .attr("stroke","black")
      .attr("stroke-width",2);
    
  
    d3.select("#c1")
      .attr("cy",300-i);
    d3.select("#c2")
      .attr("cy",300);
    d3.select("#c3")
      .attr("cy",300+i);
  
    d3.select("#l1")
      .attr("y2",300-i);
    d3.select("#l2")
      .attr("y2",300);
    d3.select("#l3")
      .attr("y2",300+i);
  
      d3.select("#t1")
      .attr("y",280-i);
    d3.select("#t2")
      .attr("y",280);
    d3.select("#t3")
      .attr("y",280+i);
  
  
      d3.select("#t11")
      .attr("y",380-i);
    d3.select("#t12")
      .attr("y",380);
    d3.select("#t13")
      .attr("y",380+i);
    
    d3.select("#triangle")
      .attr("opacity",i/300);
  
    d3.select("#orig")
      .attr("opacity",i/1200);
  
    d3.selectAll("#verticesTriangle")
      .attr("opacity",1.2*i/100);
    })
  