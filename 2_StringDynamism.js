/*String dynamism*/
d3.select("#slider-2").on("input",function(){
    let i = parseInt(d3.select(this).property("value"));
    console.log(i);
    var j = parseInt(d3.select("#slider-3").property("value"));
  console.log(j);
    if(j==0 || j==10){
  var data = [[0, 50], [100, 50+i], [200, 50],[300, 50-i], [400, 50]];}
  else{var data = [[0, 50], [200, 50+i], [400, 50]];}
  
  var lineGenerator = d3.line()
      .curve(d3.curveNatural);
  var pathString = lineGenerator(data);
  
  d3.select('#dynamic_strings')
      .attr('d', pathString)
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width",1);})