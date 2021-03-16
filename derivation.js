/*Progress bar*/
window.onscroll = function() {widd()};
function widd(){
  var elm = document.getElementById("text");
  var y = elm.scrollTop;
  console.log(y);
  d3.select("#rect")
  .attr("width",1.3*y);
}


  
  
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
d3.select("#arbit_slider").on("input",function(event){
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
var a = 0;
//Circle drag
d3.select("#mov-cc").call(d3.drag()


.on("drag",function(event){
  console.log(event.x);
  let v = Math.round(event.x/10);
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

  d3.select("#stretch")
    .attr("width",(event.x*0.25-300))
    .attr("height",13);
  
  d3.select("#gstrech")
    .attr("x2", 150 +(0.2*event.x))
    .attr("y2", -150+(0.1*event.x ));
  
  d3.select("#algebraicForce")
    .text(10+(v-130)+")");
  
  }})

)

/*Text drag event*/
d3.select("#algebraicForce").call(d3.drag()
  .on("start",function(event){
    b = Math.round(event.x/10);
    
   })
  .on("drag",function(event){
  let v = Math.round(event.x/10);
  console.log(v);
  let t = (v+a-50)

  if(v>50 & v<150){
    
  d3.select(this)
    .text( (v) -50 + ")");
    //.attr("x",event.x);
  
  d3.select("#mov-cc")
    .attr("cx", (1015.5 + (5*(v))))
    .attr("height", 30);

  d3.select("#springg")
    .attr("width", (240 + 1*((v))))
    .attr("height", 30);

  d3.select("#force")
    .attr("width", (-40+1.2*(v)))
    .attr("height", 10);

  d3.select("#stretch")
    .attr("width", (-40+1.2*(v)))
    .attr("height", 13);

  d3.select("#gstretch")
    .attr("x2", 250 +(2*v ))
    .attr("y2",-50+(1*v ));}
  })
  .on("end",function(event){
    c = Math.round(event.x/10);
    a = a+ (c - b);
    console.log(a);
  })
  
  
  )
 

/*Coordinates with moving curve*/
d3.select("#sliderCurve").on("input",function(){
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

  d3.selectAll("#verticesTriangle")
    .attr("opacity",1.2*i/100);
  })


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