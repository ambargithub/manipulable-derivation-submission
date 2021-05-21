/*Zoom-m*/

d3.select("#zoom_into").call(d3.zoom().on("zoom",function(){

    d3.select(this).transition(1000)
    .attr("width",156)
    .attr("height",256)
    .attr("opacity",1);
  
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
      .attr("fill","#545353");
  
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
      .attr("fill","#545353");
  
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
      .attr("fill","#545353");
  
    d3.select("#m3")
      .attr("visibility","hidden");
  })
  d3.select("#p2_Zoom").style("color","black"); 
  d3.select("#p1_Zoom").style("color","white"); 
  }))
  

    /*Progress bar*/
  d3.selectAll("#guit").on("click",function(){
    window.open("1_Idealization.html","_self" ); ;
  })
  
  d3.select("#dyna").on("click",function(){
    window.open("2_StringDynamism.html","_self" ); ;
  })

  d3.select("#disc").on("click",function(){
    window.open("3_Discretization.html","_self" ); ;
  })
  