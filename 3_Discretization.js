/*Call-back -String dynamism*/ 
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

  /*Straight line conditions*/ 
  if(302<i & i<334){
    d3.select("#st_line").attr("visibility","");
    d3.select("#hori_line").attr("visibility","hidden");
    d3.select("#slider-4").style("visibility","");

  }  
  
  else{
    d3.select("#st_line").attr("visibility","hidden");
    d3.select("#hori_line").attr("visibility","hidden");
    d3.select("#slider-4").style("visibility","hidden");

 
  }


  /*Slider visibility - both curves */

  if(490<i){
    d3.select("#slider-4-r").style("visibility","");
  }  

  else{
    d3.select("#slider-4-r").style("visibility","hidden");

  }

  if(i<80){
    d3.select("#slider-4-s").style("visibility","");
  }  

  else{
    d3.select("#slider-4-s").style("visibility","hidden");

  }




  if(i>84 & i<570){

    d3.select(this)
      .attr("cy",(i/1.25 + 45));

      var data = [[5, 160], [137.5, 0.31*(i-321)+160], [275, 160],[412.5, 0.31*(321-i)+160], [545, 160]];
        

    var lineGenerator = d3.line().curve(d3.curveNatural);

    var pathString = lineGenerator(data);
  
    d3.select('#dynamic_strings')
    .attr('d', pathString)
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width",8);











    }})
    
    .on("end",function(event){
      d3.select(this)
       .attr("stroke","black"); 

       /*var timer = d3.timer(function(elapsed) {
        console.log(elapsed);}
        );*/
     })

     )


/*Discretization*/
d3.select("#slider-4").on("input",function(){

    let i = parseInt(d3.select(this).property("value"));

    if(i>0){
      d3.select("#dynamic_dis").attr("visibility","hidden");
      d3.select("#circle").attr("visibility","hidden");
      d3.select("#hori_line").attr("visibility","hidden");
      d3.select("#slider-4-r").style("visibility","hidden");
      d3.select("#slider-4-s").style("visibility","hidden");
      d3.select("#reverse_curve").attr("visibility","hidden");

    }
    else{d3.select("#dynamic_dis").attr("visibility","");
    d3.select("#circle").attr("visibility","");
    d3.select("#hori_line").attr("visibility","hidden");
}

if(i>4){
  d3.select("#label_discrete").attr("visibility","");

}
else{d3.select("#label_discrete").attr("visibility","hidden");
}


    var t = d3.selectAll("#str"+i)
    .attr("visibility","hidden");
    var u = d3.selectAll("#str"+(i+1))
    .attr("visibility","");
    console.log(t);
  })

  d3.select("#slider-4-s").on("input",function(){

    let i = parseInt(d3.select(this).property("value"));

    if(i>0){
      d3.select("#curve").attr("visibility","");
      d3.select("#dynamic_dis").attr("visibility","hidden");
      d3.select("#circle").attr("visibility","hidden");
      d3.select("#hori_line").attr("visibility","hidden");
    }
    else{d3.select("#dynamic_dis").attr("visibility","");
    d3.select("#curve").attr("visibility","hidden");
    d3.select("#circle").attr("visibility","");
    d3.select("#hori_line").attr("visibility","hidden");
}

if(i>6){
  d3.select("#label_discrete").attr("visibility","");

}
else{d3.select("#label_discrete").attr("visibility","hidden");
}

    var t = d3.selectAll("#str"+i)
    .attr("visibility","hidden");
    var u = d3.selectAll("#str"+(i+1))
    .attr("visibility","");
    console.log(t);
  })

  d3.select("#slider-4-r").on("input",function(){

    let i = parseInt(d3.select(this).property("value"));

    if(i>0){
      d3.select("#reverse_curve").attr("visibility","");
      d3.select("#dynamic_dis").attr("visibility","hidden");
      d3.select("#circle").attr("visibility","hidden");
      d3.select("#hori_line").attr("visibility","hidden");
    }
    else{
    d3.select("#reverse_curve").attr("visibility","hidden");  
    d3.select("#dynamic_dis").attr("visibility","");
    d3.select("#circle").attr("visibility","");
    d3.select("#hori_line").attr("visibility","hidden");
}
if(i>6){
  d3.select("#label_discrete").attr("visibility","");

}
else{d3.select("#label_discrete").attr("visibility","hidden");
}

    var t = d3.selectAll("#str"+i)
    .attr("visibility","hidden");
    var u = d3.selectAll("#str"+(i+1))
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
  
  /*Progress bar*/
d3.selectAll("#guit").on("click",function(){
  window.open("1_Idealization.html","_self" ); ;
})

d3.select("#dyna").on("click",function(){
  window.open("2_StringDynamism.html","_self" ); ;
})
  