/*Mozilla arrangement */
d3.select("#moz1").attr("y",10.5)


for(j=2;j<10;j++){ d3.select("#p"+j)
.style("visibility","hidden");}
 

d3.select("#r-eq1")
.style("visibility","hidden");

  d3.select("#slider-t_contd").on("input",function(event){
    let i = parseInt(d3.select(this).property("value"));
  
  d3.select("#p"+i)
    .style("visibility","");

    d3.select("#p"+(i+1))
    .style("visibility","hidden");

    if(i>=2){
      d3.select("#F-rect_disabled")
        .attr("visibility","");

        d3.select("#R-rect_disabled")
        .attr("visibility","");  
    }
    else{
      
    d3.select("#F-rect_disabled")
    .attr("visibility","hidden");
  
    d3.select("#R-rect_disabled")
    .attr("visibility","hidden");
  }

  if(i>=3){
    

      d3.select("#R-rect_disabled")
      .attr("visibility","");  
  }
  else{
 
  d3.select("#R-rect_disabled")
  .attr("visibility","hidden");
} 

if(i>=4){
    

  d3.select("#Red_disabled")
  .attr("visibility","");  
}
else{

d3.select("#Red_disabled")
.attr("visibility","hidden");
} 

if(i==5){
  d3.select("#r-eq").style("visibility","");
  d3.select("#R-rect").attr("visibility","");
  d3.select("#final_eq_rect").attr("visibility","")
}
else{
  d3.select("#r-eq").style("visibility","hidden");
  d3.select("#R-rect").attr("visibility","hidden");
  d3.select("#final_eq_rect").attr("visibility","hidden")
}
  })

  d3.select("#F-rect").on("mouseover",function(){
    d3.select("#f-rect")
      .attr("visibility","");

    d3.select("#text_secondlaw")
      .style("visibility","");
  })
  
  d3.select("#F-rect").on("mouseout",function(){
    d3.select("#f-rect")
      .attr("visibility","hidden");

    d3.select("#text_secondlaw")
      .style("visibility","hidden");
  
  })
  




d3.select("#F-rect_disabled").on("mouseover",function(){
  d3.select("#F-rect_disabled")
    .attr("visibility","");
})

d3.select("#F-rect_disabled").on("mouseout",function(){
  d3.select("#F-rect_disabled")
    .attr("visibility","hidden");
})

d3.select("#RR-rect_disabled").on("mouseover",function(){
  d3.select("#r-eq")
    .style("visibility","");

  d3.select("#r-eq1")
    .style("visibility","");

    d3.select("#R-rect_disabled-1")
    .attr("visibility","");

    d3.select("#R-rect_disabled-2")
    .attr("visibility","");
})

d3.select("#RR-rect_disabled").on("mouseout",function(){
  d3.select("#r-eq")
    .style("visibility","hidden");

  d3.select("#r-eq1")
    .style("visibility","hidden");

    d3.select("#R-rect_disabled-1")
    .attr("visibility","hidden");

    d3.select("#R-rect_disabled-2")
    .attr("visibility","hidden");
})
  

d3.select("#Red_disabledd").on("mouseover",function(){
  d3.select("#r-eq")
    .style("visibility","");

  d3.select("#r-eq1")
    .style("visibility","");

    d3.select("#R-rect_disabled-1")
    .attr("visibility","");

    d3.select("#R-rect_disabled-2")
    .attr("visibility","");
})

d3.select("#Red_disabledd").on("mouseout",function(){
  d3.select("#r-eq")
    .style("visibility","hidden");

  d3.select("#r-eq1")
    .style("visibility","hidden");

    d3.select("#R-rect_disabled-1")
    .attr("visibility","hidden");

    d3.select("#R-rect_disabled-2")
    .attr("visibility","hidden");
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
