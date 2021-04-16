//xi+1
d3.select("#xi_1").on("mouseover",function(){

    d3.select(this)
        .style("color","red");
    
    d3.select("#svg_xi_1")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#xi_1").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_xi_1")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//xi_1
d3.select("#xi__1").on("mouseover",function(){

    d3.select(this)
    .style("color","red");

    d3.select("#svg_xi")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#xi__1").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_xi")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//dx
d3.select("#dx_1").on("mouseover",function(){

    d3.select(this)
    .style("color","red");

    d3.select("#svg_dx_1")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#dx_1").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_dx_1")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//xi-1
d3.select("#xi_minus1").on("mouseover",function(){

    d3.select(this)
    .style("color","red");

    d3.select("#svg_xi_minus1")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#xi_minus1").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_xi_minus1")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//xi_2
d3.select("#xi_2").on("mouseover",function(){

    d3.select(this)
    .style("color","red");

    d3.select("#svg_xi")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#xi_2").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_xi")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

//dx
d3.select("#dx_2").on("mouseover",function(){

    d3.select(this)
    .style("color","red");

    d3.select("#svg_dx_2")
    .attr("stroke","red")})
    .attr("stroke-width",0.2)
    
d3.select("#dx_2").on("mouseout",function(){

    d3.select(this)
    .style("color","black");

    d3.select("#svg_dx_2")
    .attr("stroke","black")
    .attr("stroke-width",0.2) })

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
