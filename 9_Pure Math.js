
/*Pure Math */
d3.select("#ques").on("mouseover",function(){
    d3.select("#diff")
      .attr("visibility","");
  })

  d3.select("#ques").on("mouseout",function(){
    d3.select("#diff")
      .attr("visibility","hidden");
  })

  d3.select("#circle1").on("mouseover",function(){
    d3.select("#equation1")
      .attr("visibility","");
  })

  d3.select("#circle1").on("mouseout",function(){
    d3.select("#equation1")
      .attr("visibility","hidden");
  })


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