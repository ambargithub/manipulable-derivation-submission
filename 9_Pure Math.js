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