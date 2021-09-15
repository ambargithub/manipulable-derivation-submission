/*Zoom-m*/
d3.select("#zoom_rect").call(d3.zoom().on("zoom",function(){

  d3.select("#zoom-design")
    .attr("visibility","156")

    d3.select("#zoom_into").transition(1000)
    .attr("width",156)
    .attr("height",256)
    .attr("opacity",1);
  
    d3.select("#zoom-m1").transition(1000)
    .attr("stroke-opacity",0.1)
    .attr("fill-opacity",0.1);

    d3.select("#threemasspoints").transition(1000)
    .attr("stroke-opacity",1)
    .attr("fill-opacity",1);

    d3.select(this).transition(1000)
    .attr("stroke-opacity",0.5)
    .attr("fill-opacity",0.5);
  
    d3.select("#coordinate-1")
      .attr("visibility","")
  
  d3.select("#cm1").on("mouseover",function(){
    d3.select(this)
      .attr("fill","#004B7E");
  
    d3.select("#m1")
      .attr("visibility","");
  })
  
  d3.select("#cm1").on("mouseout",function(){
    d3.select(this)
      .attr("fill","#1D9B22");
  
    d3.select("#m1")
      .attr("visibility","hidden");
  })
  
  d3.select("#cm2").on("mouseover",function(){
    d3.select(this)
      .attr("fill","#004B7E");
  
    d3.select("#m2")
      .attr("visibility","");
  })
  
  d3.select("#cm2").on("mouseout",function(){
    d3.select(this)
      .attr("fill","#1D9B22");
  
    d3.select("#m2")
      .attr("visibility","hidden");
  })
  
  d3.select("#cm3").on("mouseover",function(){
    d3.select(this)
      .attr("fill","#004B7E");
  
    d3.select("#m3")
      .attr("visibility","");
  })
  
  d3.select("#cm3").on("mouseout",function(){
    d3.select(this)
      .attr("fill","#1D9B22");
  
    d3.select("#m3")
      .attr("visibility","hidden");
  })
  d3.select("#p2_Zoom").style("color","black"); 
  d3.select("#p1_Zoom")
    .style("color","#85C1D8")
    .style("background-color","transparent"); 
  }))

d3.select("#zoom_rect").on("click",function(){

    d3.select("#zoom-design")
      .attr("visibility","156")
  
      d3.select("#zoom_into").transition(1000)
      .attr("width",156)
      .attr("height",256)
      .attr("opacity",1);
    
      d3.select("#zoom-m1").transition(1000)
      .attr("stroke-opacity",0.1)
      .attr("fill-opacity",0.1);

      d3.select("#threemasspoints").transition(1000)
      .attr("stroke-opacity",1)
      .attr("fill-opacity",1);

      d3.select(this).transition(1000)
      .attr("stroke-opacity",0.5)
      .attr("fill-opacity",0.5);
    
      d3.select("#coordinate-1")
        .attr("visibility","")
    
    d3.select("#cm1").on("mouseover",function(){
      d3.select(this)
        .attr("fill","#004B7E");
    
      d3.select("#m1")
        .attr("visibility","");
    })
    
    d3.select("#cm1").on("mouseout",function(){
      d3.select(this)
        .attr("fill","#1D9B22");
    
      d3.select("#m1")
        .attr("visibility","hidden");
    })
    
    d3.select("#cm2").on("mouseover",function(){
      d3.select(this)
        .attr("fill","#004B7E");
    
      d3.select("#m2")
        .attr("visibility","");
    })
    
    d3.select("#cm2").on("mouseout",function(){
      d3.select(this)
        .attr("fill","#1D9B22");
    
      d3.select("#m2")
        .attr("visibility","hidden");
    })
    
    d3.select("#cm3").on("mouseover",function(){
      d3.select(this)
        .attr("fill","#004B7E");
    
      d3.select("#m3")
        .attr("visibility","");
    })
    
    d3.select("#cm3").on("mouseout",function(){
      d3.select(this)
        .attr("fill","#1D9B22");
    
      d3.select("#m3")
        .attr("visibility","hidden");
    })
    d3.select("#p2_Zoom").style("color","black"); 
    d3.select("#p1_Zoom")
      .style("color","#85C1D8")
      .style("background-color","transparent"); 
    })
  

    /*Progress bar*/
    d3.selectAll("#Image_8").on("click",function(){
      window.open("0.7_Reality.html","_self" ); ;
    })
    
    d3.select("#Group_8593").on("click",function(){
      window.open("1_Idealization.html","_self" ); ;
    })
    d3.select("#Group_8586").on("click",function(){
      window.open("1_Idealization.html","_self" ); ;
    })
    
    
    d3.select("#Group_8587").on("click",function(){
    window.open("3_Discretization.html","_self" ); ;
    })
    
    d3.select("#Group_8588").on("click",function(){
        window.open("5_Zoom-m.html","_self" );})
    
    d3.select("#Group_8589").on("click",function(){
        window.open("10.1_PureMath.html","_self" );})
  