/*Discretization*/
d3.select("#slider-4").on("input",function(){
    let i = parseInt(d3.select(this).property("value"));
    var t = d3.select("#str"+i)
    .attr("visibility","hidden");
    var u = d3.select("#str"+(i+1))
    .attr("visibility","");
    console.log(t);
  })

/*Zoomed-SVG*/
d3.select("#zoom-spring-1").on("mouseover",function(){
    d3.select(this)
    .attr("fill","red");
    
    d3.select("#spring")
    .attr("transform","rotate(0)")
    .attr("visibility","")
    
  })

  d3.select("#zoom-spring-1").on("mouseout",function(){
    d3.select(this)
    .attr("fill","none");
  
    d3.select("#spring")
    .attr("visibility","hidden")
    .attr("fill","black");
  })
  
  d3.select("#zoom-spring-2").on("mouseover",function(){
    d3.select(this)
    .attr("fill","red");
  
    d3.select("#spring")
    .attr("transform","rotate(20)")
    .attr("visibility","");
  })
  
  d3.select ("#zoom-spring-2").on("mouseout",function(){
    d3.select(this)
    .attr("fill","none");
  
    d3.select("#spring")
    .attr("visibility","hidden");
  })
  
  d3.select("#zoom-spring-3").on("mouseover",function(){
    d3.select(this)
    .attr("fill","red");
    
    d3.select("#spring")
    .attr("transform","rotate(50)")
    .attr("visibility","")
    
  })
  
  d3.select("#zoom-spring-3").on("mouseout",function(){
    d3.select(this)
    .attr("fill","none");
  
    d3.select("#spring")
    .attr("visibility","hidden")
    .attr("fill","black");
  })
  
  d3.select("#zoom-spring-4").on("mouseover",function(){
    d3.select(this)
    .attr("fill","red");
    
    d3.select("#spring")
    .attr("transform","rotate(80)")
    .attr("visibility","")
    
  })
  
  d3.select("#zoom-spring-4").on("mouseout",function(){
    d3.select(this)
    .attr("fill","none");
  
    d3.select("#spring")
    .attr("visibility","hidden")
    .attr("fill","black");
  })
  
  