/*Progress bar*/
window.onscroll = function() {widd()};
function widd(){
  var elm = document.getElementById("text");
  var y = elm.scrollTop;
  console.log(y);
  d3.select("#rect")
  .attr("width",1.3*y);
}

/*Reality-Guitar*/
d3.select("#slider-1").on("input",function(){
    let i = parseInt(d3.select(this).property("value"));
    var o = (90 - 1.8*i)/100
    var p = (0 + 3*i)/100
    d3.select("#guitar-body")
    .attr("stroke-opacity",o)
    .attr("opacity",o);
  
    d3.selectAll("#strings_h").transition()
    .duration(400)
    .attr("stroke","black");
  
    d3.selectAll("#strings_v").transition()
    .duration(400)
    .attr("opacity",p);
  })


  /*Idealized graph*/
  d3.select("#slider-2").on("input",function(){
    let i = parseInt(d3.select(this).property("value"));
    console.log(i);
    var j = parseInt(d3.select("#slider-3").property("value"));
  console.log(j);
    if(j==0 || j==10){
  var data = [[0, 50], [100, 50+i], [200, 50],[300, 50-i], [400, 50]];}
  else{var data = [[0, 50], [200, 50+i], [400, 50]];}
  
  var lineGenerator = d3.line()
      .curve(d3.curveNatural);
  var pathString = lineGenerator(data);
  
  d3.select('#dynamic_strings')
      .attr('d', pathString)
    .attr("fill","white")
    .attr("stroke","black")
    .attr("stroke-width",1);})
  
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




/*Arbit-m*/
d3.select("#arbit-slider").on("input",function(event){
let i = parseInt(d3.select(this).property("value"));
   
if(i==1){d3.select("#arbit-m1").attr("visibility","");}
  else{d3.select("#arbit-m1").attr("visibility","hidden");}
if(i==2){d3.select("#arbit-m2").attr("visibility","");}
  else{d3.select("#arbit-m2").attr("visibility","hidden");}
if(i==3){d3.select("#arbit-m3").attr("visibility","");}
  else{d3.select("#arbit-m3").attr("visibility","hidden");}
if(i==4){d3.select("#arbit-m4").attr("visibility","");}
  else{d3.select("#arbit-m4").attr("visibility","hidden");}
if(i==5){d3.select("#arbit-m5").attr("visibility","");}
  else{d3.select("#arbit-m5").attr("visibility","hidden");}
if(i==6){d3.select("#arbit-m6").attr("visibility","");}
  else{d3.select("#arbit-m6").attr("visibility","hidden");}
if(i==7){d3.select("#arbit-m7").attr("visibility","");}
  else{d3.select("#arbit-m7").attr("visibility","hidden");}
if(i==8){d3.select("#arbit-m8").attr("visibility","");}
  else{d3.select("#arbit-m8").attr("visibility","hidden");}
if(i==9){d3.select("#arbit-m9").attr("visibility","");}
  else{d3.select("#arbit-m9").attr("visibility","hidden");}
if(i==10){d3.select("#arbit-m10").attr("visibility","");}
  else{d3.select("#arbit-m10").attr("visibility","hidden");}
if(i==11){d3.select("#arbit-m11").attr("visibility","");}
  else{d3.select("#arbit-m11").attr("visibility","hidden");}
if(i==12){d3.select("#arbit-m12").attr("visibility","");}
  else{d3.select("#arbit-m12").attr("visibility","hidden");}

})

/*Zoom*/

d3.select("#zoom_into").call(d3.zoom().on("zoom",function(){
  d3.select(this).transition(1000)
  .attr("width",100)
  .attr("height",100);

  d3.select("#zoom-m1").transition(1000)
  .attr("stroke-opacity",0.1)
  .attr("fill-opacity",0.1);

  d3.select("#coordinate-1")
    .attr("visibility","")

d3.select("#cm1").on("mouseover",function(){
  d3.select(this)
    .attr("fill","blue");

  d3.select("#m1")
    .attr("visibility","");
})

d3.select("#cm1").on("mouseout",function(){
  d3.select(this)
    .attr("fill","grey");

  d3.select("#m1")
    .attr("visibility","hidden");
})

d3.select("#cm2").on("mouseover",function(){
  d3.select(this)
    .attr("fill","blue");

  d3.select("#m2")
    .attr("visibility","");
})

d3.select("#cm2").on("mouseout",function(){
  d3.select(this)
    .attr("fill","grey");

  d3.select("#m2")
    .attr("visibility","hidden");
})

d3.select("#cm3").on("mouseover",function(){
  d3.select(this)
    .attr("fill","blue");

  d3.select("#m3")
    .attr("visibility","");
})

d3.select("#cm3").on("mouseout",function(){
  d3.select(this)
    .attr("fill","grey");

  d3.select("#m3")
    .attr("visibility","hidden");
})
  
}))


/*Force on a string*/
d3.select("#mov-cc").call(d3.drag().on("drag",function(event){
  console.log(event.x);
  let t = event.x;
  if(t>1210 & t<1850){
    d3.select(this)
    .attr("cx",event.x);

  d3.select("#springg")
    .attr("width",(event.x*0.3-135))
    .attr("height",30);

  d3.select("#force")
    .attr("width",(event.x*0.25-300))
    .attr("height",10);

  d3.select("#strech")
    .attr("width",(event.x*0.25-300))
    .attr("height",13);
  
  d3.select("#gstrech")
    .attr("x2", (event.x +50))
    .attr("y2",1349 +(5*event.x/100));}
  
  /*d3.select("#dline")
    .attr("x1",event.x)
    .attr("x2",event.x);}*/

}))

/*Coordinates with moving curve*/
d3.select("#slider-t").on("input",function(){
  let i = parseInt(d3.select(this).property("value"));
  console.log(i);

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
    .attr("opacity",i/300);

  d3.select("#orig")
    .attr("opacity",i/1200);
  })