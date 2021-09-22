/*Mozilla coordinates */
d3.selectAll("#verticesTriangle")
  .attr("x",460)

d3.selectAll("#Fminus1_final_text1")
  .attr("x",635)

  d3.selectAll("#Fminus1_final_text2")
  .attr("x",650)

/*Coordinates with moving curve - Triangle*/
d3.select("#sliderCurve").on("input",function(){
    let i = parseInt(d3.select(this).property("value"));
    console.log(i);
  
  d3.select("#triangle_s-l")
    .attr("height",(1.3*i)/2)
    .style("top",(-205-((i)/1.5) ) + "px");
  
  
  
  var data = [[465, 300-i], [585, 300], [704, 300+i]];
  
  var lineGenerator = d3.line()
      .curve(d3.curveNatural);
  var pathString = lineGenerator(data);
  
  d3.select('#variable_strings')
      .attr('d', pathString)
      .attr("fill","white")
      .attr("stroke","black")
      .attr("stroke-width",2);
    
  
    d3.select("#c1")
      .attr("cy",300-i);
    d3.select("#c2")
      .attr("cy",300);
    d3.select("#c3")
      .attr("cy",300+i);
  
    d3.select("#l1")
      .attr("y2",300-i);
    d3.select("#l2")
      .attr("y2",300);
    d3.select("#l3")
      .attr("y2",300+i);
  
      d3.select("#t1")
      .attr("y",280-i);
    d3.select("#t2")
      .attr("y",280);
    d3.select("#t3")
      .attr("y",280+i);
  
  
      d3.select("#t11")
      .attr("y",380-i);
    d3.select("#t12")
      .attr("y",380);
    d3.select("#t13")
      .attr("y",380+i);
    
    d3.select("#triangle")
      .attr("opacity",i/150);
  
    d3.select("#orig")
      .attr("opacity",i/1200);
  
    d3.selectAll("#verticesTriangle")
      .attr("opacity",1.2*i/100);

  
    
      if(i>0){
        d3.select("#t_yinitial")
        .attr("visibility","hidden");

        d3.select("#Fminus1_initial")
        .attr("visibility","hidden");

      d3.select("#Fminus1_initial_arrow")
        .attr("visibility","hidden");

      d3.select("#Fplus1_initial")
        .attr("visibility","hidden");

      d3.select("#Fplus1_initial_arrow")
        .attr("visibility","hidden");


      }
      else{
        d3.select("#t_yinitial")
        .attr("visibility","");

        d3.select("#Fminus1_initial")
        .attr("visibility","");

      d3.select("#Fminus1_initial_arrow")
        .attr("visibility","");

        d3.select("#Fminus1_final")
        .attr("visibility","hidden");

      d3.select("#Fminus1_final_arrow")
        .attr("visibility","hidden");

      d3.select("#Fplus1_initial")
        .attr("visibility","");

      d3.select("#Fplus1_initial_arrow")
        .attr("visibility","");

        d3.select("#Fplus1_final")
        .attr("visibility","hidden");

      d3.select("#Fplus1_final_arrow")
        .attr("visibility","hidden");


      }

      if(i==76){
      d3.select("#t_yfinal")
      .attr("visibility","");

      d3.select("#p2-moving")
        .style("color","black");


      d3.select("#Fminus1_final")
        .attr("visibility","");

      d3.select("#Fminus1_final_arrow")
        .attr("visibility","");

      d3.select("#Fplus1_final")
        .attr("visibility","");

      d3.select("#Fplus1_final_arrow")
        .attr("visibility","");

        d3.selectAll("#Fminus1_final_text1")
        .attr("visibility","");

        d3.selectAll("#Fminus1_final_text2")
        .attr("visibility","");


    }
    else{
      d3.select("#t_yfinal")
      .attr("visibility","hidden");

      d3.selectAll("#Fminus1_final_text1")
      .attr("visibility","hidden");

      d3.selectAll("#Fminus1_final_text2")
      .attr("visibility","hidden");

    }
    
      
    })
  

    /*Force notation Fi-1(xi)*/
    d3.select("#Fminus1_initial_text").on("mouseover",function(event){
      d3.select(this)
        .style("color","red");

      d3.select("#Fminus1_initial")
        .attr("stroke","red");

      d3.select("#Fminus1_initial_arrow")
        .attr("stroke","red");

      d3.select("#Fminus1_final")
        .attr("stroke","red");

      d3.select("#Fminus1_final_arrow")
        .attr("stroke","red");
    })

    d3.select("#Fminus1_initial_text").on("mouseout",function(event){
      d3.select(this)
        .style("color","black");

      d3.select("#Fminus1_initial")
        .attr("stroke","black");

      d3.select("#Fminus1_initial_arrow")
        .attr("stroke","black");

      d3.select("#Fminus1_final")
        .attr("stroke","black");

      d3.select("#Fminus1_final_arrow")
        .attr("stroke","black");

    })


    d3.select("#Fminus1_end_text").on("mouseover",function(event){
      d3.select(this)
        .style("color","red");

      d3.select("#Fminus1_initial")
        .attr("stroke","red");

      d3.select("#Fminus1_initial_arrow")
        .attr("stroke","red");

      d3.select("#Fminus1_final")
        .attr("stroke","red");

      d3.select("#Fminus1_final_arrow")
        .attr("stroke","red");
    })

    d3.select("#Fminus1_end_text").on("mouseout",function(event){
      d3.select(this)
        .style("color","black");

      d3.select("#Fminus1_initial")
        .attr("stroke","black");

      d3.select("#Fminus1_initial_arrow")
        .attr("stroke","black");

      d3.select("#Fminus1_final")
        .attr("stroke","black");

      d3.select("#Fminus1_final_arrow")
        .attr("stroke","black");

    })



        /*Force notation Fi+1(xi)*/
    d3.select("#Fplus1_initial_text").on("mouseover",function(event){
      d3.select(this)
        .style("color","red");

      d3.select("#Fplus1_initial")
        .attr("stroke","red");

      d3.select("#Fplus1_initial_arrow")
        .attr("stroke","red");

      d3.select("#Fplus1_final")
        .attr("stroke","red");

      d3.select("#Fplus1_final_arrow")
        .attr("stroke","red");
    })

    d3.select("#Fplus1_initial_text").on("mouseout",function(event){
      d3.select(this)
        .style("color","black");

      d3.select("#Fplus1_initial")
        .attr("stroke","black");

      d3.select("#Fplus1_initial_arrow")
        .attr("stroke","black");

      d3.select("#Fplus1_final")
        .attr("stroke","black");

      d3.select("#Fplus1_final_arrow")
        .attr("stroke","black");

    })


    d3.select("#Fplus1_end_text").on("mouseover",function(event){
      d3.select(this)
        .style("color","red");

      d3.select("#Fplus1_initial")
        .attr("stroke","red");

      d3.select("#Fplus1_initial_arrow")
        .attr("stroke","red");

      d3.select("#Fplus1_final")
        .attr("stroke","red");

      d3.select("#Fplus1_final_arrow")
        .attr("stroke","red");
    })

    d3.select("#Fplus1_end_text").on("mouseout",function(event){
      d3.select(this)
        .style("color","black");

      d3.select("#Fplus1_initial")
        .attr("stroke","black");

      d3.select("#Fplus1_initial_arrow")
        .attr("stroke","black");

      d3.select("#Fplus1_final")
        .attr("stroke","black");

      d3.select("#Fplus1_final_arrow")
        .attr("stroke","black");

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
