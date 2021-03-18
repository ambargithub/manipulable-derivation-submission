  /*Slider-Total Force*/
  d3.select("#slider-tforce").on("input",function(event){
    let i = parseInt(d3.select(this).property("value"));
    /*console.log(i);*/
  
    if(i>=0){
      d3.select("#lhs")
      .text("i + " + (i));
  
      d3.select("#rhs2")
      .text("i + " + (i));
    
      d3.select("#rhs1")
      .text("i + " + (i-1));
    
      d3.select("#rhs3")
      .text("i + " + (i+1));
    }
  
    if(i<0){
  d3.select("#lhs")
      .text("i  " + (i));
  
      d3.select("#rhs2")
      .text("i  " + (i));
    
      d3.select("#rhs1")
      .text("i  " + (i -1));
    
      d3.select("#rhs3")
      .text("i  " + (i+1));}
  
  
  
  /*Figure+text*/
  
      
  d3.select("#m"+ i)
      .attr("visibility","");
  
      d3.select("#m"+(i-2))
      .attr("visibility","hidden");
  
      d3.select("#m"+(i+2))
      .attr("visibility","hidden");
  
      d3.select("#t"+ i)
      .attr("visibility","");
  
      d3.select("#t"+(i-2))
      .attr("visibility","hidden");
  
      d3.select("#t"+(i+2))
      .attr("visibility","hidden");
      
      
      console.log( i);
    })
  