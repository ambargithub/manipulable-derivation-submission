d3.select("#circle").call(d3.drag()
    
  .on("start",function(event){
   d3.select(this)
    .attr("stroke","red"); 

    d3.select("#label_drag")
    .attr("visibility","hidden")
  })

  .on("drag",function(event){
        let i = event.y;
        console.log(i);
        
  if(i>218 & i<418){

    d3.select(this)
      .attr("cy",(i));

      var data =[[0, 50], [200, 0.31*(i-150)], [400, 50]];
        

    var lineGenerator = d3.line().curve(d3.curveNatural);

    var pathString = lineGenerator(data);
  
    d3.select('#dynamic_strings')
    .attr('d', pathString)
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width",1);

    }})
    
    .on("end",function(event){
      d3.select(this)
       .attr("stroke","black"); 

     })

     )


d3.select("#slider-3").on("input",function(){
  let j = parseInt(d3.select(this).property("value"));
  

  if(j==10){
      
    d3.select("#circle")
      .attr("cx",950);

    d3.select("#label_drag_line")
      .attr("x2",950);
    
      d3.select("#ds-r").attr("visibility","");
      d3.select("#ds-l").attr("visibility","hidden");
      d3.select("#ds-c").attr("visibility","hidden");}

  else if(j==0){
    d3.select("#label_drag_line")
    .attr("x2",313);

    d3.select("#circle")
    .attr("cx",312.5);

    d3.select("#ds-l").attr("visibility","");
        d3.select("#ds-r").attr("visibility","hidden");
        d3.select("#ds-c").attr("visibility","hidden");}
  
  else {
    d3.select("#circle")
    .attr("cx",625);

    d3.select("#label_drag_line")
    .attr("x2",643);

  
    d3.select("#ds-c").attr("visibility","");
    d3.select("#ds-l").attr("visibility","hidden");
    d3.select("#ds-r").attr("visibility","hidden");}

 

  d3.select("#circle").call(d3.drag()
    
  .on("start",function(event){
   d3.select(this)
    .attr("stroke","red"); 

    d3.select("#label_drag")
    .attr("visibility","hidden");

  })

  .on("drag",function(event){
        let i = event.y;
        console.log(i);
        
  if(i>218 & i<418){

    d3.select(this)
      .attr("cy",(i));

      if(j==5){var data = [[0, 50], [200, 0.31*(i-150)], [400, 50]];
      
        }
    
    
      else if(j==0){var data = [[0, 50], [100, 0.31*(i-321)+50], [200, 50],[300, 0.31*(321-i)+50], [400, 50]];
      }

    
      else{var data = [[0, 50], [100, 0.31*(321-i)+50], [200, 50],[300, 0.31*(i-321)+50], [400, 50]];
      
       }
  
        
        

    var lineGenerator = d3.line().curve(d3.curveNatural);

    var pathString = lineGenerator(data);
  
    d3.select('#dynamic_strings')
    .attr('d', pathString)
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width",1);

    }})
    
    .on("end",function(event){
      d3.select(this)
       .attr("stroke","black"); 
     })
    
    )})



/*Progress bar*/
d3.selectAll("#guit").on("click",function(){



  window.open("1_Idealization.html","_self" ); ;
})

d3.selectAll("#guit").on("mouseover",function(){

  d3.select("#label_progress_reality")
.attr("visibility","hidden");

})

d3.selectAll("#guit").on("mouseout",function(){

  d3.select("#label_progress_reality")
.attr("visibility","");

})


d3.select("#guitar-body")
      .attr("stroke-opacity",0)
      .attr("opacity",0);


d3.select("#slider-1").on("input",function(){

  d3.select("#label_revisit_reality")
  .attr("visibility","hidden");

  let i = parseInt(d3.select(this).property("value"));
  var o = (0 + 1.8*i)/100
  
  d3.select("#guitar-body")
      .attr("stroke-opacity",o)
      .attr("opacity",o);

  d3.selectAll("#strings_h").transition()
      .duration(400)
      .attr("opacity",o);


  d3.select("#bridge")
      .attr("fill-opacity",(100 - 2*i)/100);
  

d3.select("#stick")
      .attr("stroke-opacity",(100 - 2*i)/100);

  if(i==52){
      d3.select("#p2Reality")
        .style("color","black");
  }

})



/*String dynamism
d3.select("#slider-2").on("input",function(){
    let i = parseInt(d3.select(this).property("value"));
    console.log(i);
    var j = parseInt(d3.select("#slider-3").property("value"));
  console.log(j);
    if(j==0){
  var data = [[0, 50], [100, 50+i], [200, 50],[300, 50-i], [400, 50]];

  d3.select("#ds-1").attr("visibility","");
  d3.select("#ds1").attr("visibility","hidden");
  d3.select("#ds0").attr("visibility","hidden");}

  else if(j==10){
    var data = [[0, 50], [100, 50+i], [200, 50],[300, 50-i], [400, 50]];
  
    d3.select("#ds1").attr("visibility","");
    d3.select("#ds-1").attr("visibility","hidden");
    d3.select("#ds0").attr("visibility","hidden");}

  else{var data = [[0, 50], [200, 50+i], [400, 50]];
    d3.select("#ds0").attr("visibility","");
    d3.select("#ds-1").attr("visibility","hidden");
    d3.select("#ds1").attr("visibility","hidden");}


  
  var lineGenerator = d3.line()
      .curve(d3.curveNatural);
  var pathString = lineGenerator(data);
  
  d3.select('#dynamic_strings')
    .attr('d', pathString)
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width",1);
  
  })
     
  */