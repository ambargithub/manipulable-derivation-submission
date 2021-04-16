for(j=2;j<10;j++){ d3.select("#p"+j)
.style("visibility","hidden");}
 
d3.select("#r-eq")
.style("visibility","hidden");

d3.select("#r-eq1")
.style("visibility","hidden");

  d3.select("#slider-t").on("input",function(event){
    let i = parseInt(d3.select(this).property("value"));
  
  d3.select("#p"+i)
    .style("visibility","");

    d3.select("#p"+(i+1))
    .style("visibility","hidden");

    if(i>=2){
      d3.select("#F-rect")
        .attr("visibility","");

        d3.select("#R-rect")
        .attr("visibility","");  
    }
    else{
      
    d3.select("#F-rect")
    .attr("visibility","hidden");
  
    d3.select("#R-rect")
    .attr("visibility","hidden");
  }

  if(i>=3){
    

      d3.select("#R-rect")
      .attr("visibility","");  
  }
  else{
 
  d3.select("#R-rect")
  .attr("visibility","hidden");
} 

if(i>=4){
    

  d3.select("#Red")
  .attr("visibility","");  
}
else{

d3.select("#Red")
.attr("visibility","hidden");
} 
  })

d3.select("#F-rect").on("mouseover",function(){
  d3.select("#f-rect")
    .attr("visibility","");
})

d3.select("#F-rect").on("mouseout",function(){
  d3.select("#f-rect")
    .attr("visibility","hidden");
})

d3.select("#RR-rect").on("mouseover",function(){
  d3.select("#r-eq")
    .style("visibility","");

  d3.select("#r-eq1")
    .style("visibility","");

    d3.select("#R-rect-1")
    .attr("visibility","");

    d3.select("#R-rect-2")
    .attr("visibility","");
})

d3.select("#RR-rect").on("mouseout",function(){
  d3.select("#r-eq")
    .style("visibility","hidden");

  d3.select("#r-eq1")
    .style("visibility","hidden");

    d3.select("#R-rect-1")
    .attr("visibility","hidden");

    d3.select("#R-rect-2")
    .attr("visibility","hidden");
})
  

d3.select("#Redd").on("mouseover",function(){
  d3.select("#r-eq")
    .style("visibility","");

  d3.select("#r-eq1")
    .style("visibility","");

    d3.select("#R-rect-1")
    .attr("visibility","");

    d3.select("#R-rect-2")
    .attr("visibility","");
})

d3.select("#Redd").on("mouseout",function(){
  d3.select("#r-eq")
    .style("visibility","hidden");

  d3.select("#r-eq1")
    .style("visibility","hidden");

    d3.select("#R-rect-1")
    .attr("visibility","hidden");

    d3.select("#R-rect-2")
    .attr("visibility","hidden");
})

 /*Progress bar*/
 d3.selectAll("#guit").on("click",function(){
  window.open("1_Idealization.html","_self" ); ;
})

d3.select("#dyna").on("click",function(){
  window.open("2_StringDynamism.html","_self" ); ;
})

d3.select("#disc").on("click",function(){
  window.open("3_Discretization.html","_self" ); })

d3.select("#geo").on("click",function(){
    window.open("5_Zoom-m.html","_self" );})
