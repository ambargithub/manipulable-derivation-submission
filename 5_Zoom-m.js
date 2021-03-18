/*Zoom-m*/

d3.select("#zoom_into").call(d3.zoom().on("zoom",function(){
    d3.select(this).transition(1000)
    .attr("width",100)
    .attr("height",100);
  
    d3.select("#zoom-m1").transition(1000)
    .attr("stroke-opacity",0.1)
    .attr("fill-opacity",0.1);
  
    d3.select("#coordinate-1")
      .attr("visibility","")
  
  d3.select("#cm1").on("mouseover",function(){
    d3.select(this)
      .attr("fill","blue");
  
    d3.select("#m1")
      .attr("visibility","");
  })
  
  d3.select("#cm1").on("mouseout",function(){
    d3.select(this)
      .attr("fill","grey");
  
    d3.select("#m1")
      .attr("visibility","hidden");
  })
  
  d3.select("#cm2").on("mouseover",function(){
    d3.select(this)
      .attr("fill","blue");
  
    d3.select("#m2")
      .attr("visibility","");
  })
  
  d3.select("#cm2").on("mouseout",function(){
    d3.select(this)
      .attr("fill","grey");
  
    d3.select("#m2")
      .attr("visibility","hidden");
  })
  
  d3.select("#cm3").on("mouseover",function(){
    d3.select(this)
      .attr("fill","blue");
  
    d3.select("#m3")
      .attr("visibility","");
  })
  
  d3.select("#cm3").on("mouseout",function(){
    d3.select(this)
      .attr("fill","grey");
  
    d3.select("#m3")
      .attr("visibility","hidden");
  })
    
  }))
  