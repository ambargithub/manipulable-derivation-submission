/*Rotation*/ 
d3.select("#b-rotate").on("click",function(){
  d3.select("#s-force").transition(1000)
    .attr("transform","rotate(-38)");

  d3.select("#lc-l").transition(1000)
    .attr("transform","rotate(38)")
    .attr("visibility","");
  
  d3.select("#lc-r").transition(1000)
    .attr("transform","rotate(38)")
    .attr("visibility","");

  d3.select("#lc-c").transition(1000)
    .attr("transform","rotate(38)")
    .attr("visibility","");


    d3.select("#s-l").transition(1000)
    .style("transform","rotate(0deg)")
    .style("transform","translate(-15px,68px)");

    d3.select("#s-r").transition(1000)
    .style("transform","rotate(0deg)")
    .style("transform","translate(35px,-15px)");

  d3.select("#l1")
  .attr("transform","rotate(38)")
  .attr("visibility","");

  d3.select("#content-masses").transition(1000)
  .attr("transform","rotate(38)")
  .attr("visibility","");

  d3.select("#content-labels").transition(1000)
  .attr("transform","rotate(38)")
  .attr("visibility","hidden");

  d3.select("#content-labels_before-r")
    .attr("visibility","hidden");

  d3.select("#p2-force")
    .style("color","black");
})

/*Drag-R*/ ///////////////////////
d3.select("#c-r").call(d3.drag()
.on("start",function(){
d3.select(this).attr("fill","black")
})
.on("drag",function(event){

let i =event.x;
console.log(i);

if(i>1450 & i<2000){
  d3.select(this)
    .attr("transform","rotate(38)")
    .attr("cx",(i+600))
    .attr("cy",(35));
  
  d3.select("#s-r")
    .attr("width",0.2*(i-940))
    .attr("height",20);

  d3.select("#force-r")
    .attr("width",0.18*(i-1450))
    .attr("height",10);

  d3.select("#stretch-r")
    .attr("width",0.18*(i-1450))
    .attr("height",13);

  d3.select("#content-labels")
    .attr("visibility","")


}



})
.on("end",function(){
d3.select(this).attr("fill","#545353")
})
)





/*Text drag event*/ ////////////
d3.select("#algebraicForce").call(d3.drag()
  .on("start",function(event){
    b = Math.round(event.x/10);
    
   })
  .on("drag",function(event){
  let v = Math.round(event.x/10);
  console.log(v);
  let t = (v-50)

  if(v>50 & v<150){
    
  d3.select(this)
    .text( "("+ (v -50) + ")");
    //.attr("x",event.x);
  
  d3.select("#c-r")
    .attr("cx", (1015.5 + (5*(v))))
    .attr("height", 30);

  d3.select("#s-r")
    .attr("width", (240 + 1*((v))))
    .attr("height", 30);

  d3.select("#force-r")
    .attr("width", (-40+1.2*(v)))
    .attr("height", 10);

  d3.select("#stretch-r")
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

/*Drag-L*/ 
d3.select("#c-l").call(d3.drag()
.on("start",function(){
d3.select(this).attr("fill","black")
})
.on("drag",function(event){

let i =event.x;
console.log(i);

d3.select(this)
  .attr("transform","rotate(38)")
  .attr("cx",(i+50))
  .attr("cy",(30));

d3.select("#s-l")
  .attr("width",-0.3*(110-i))
  .attr("height",20);

d3.select("#force-l")
    .attr("width",0.18*(i-1450))
    .attr("height",10);

d3.select("#stretch-l")
    .attr("width",0.18*(i-1450))
    .attr("height",13);

})
.on("end",function(){
d3.select(this).attr("fill","#545353")
})
)



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















/*Spring Force*
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
    .text("("+(v-120)+")");
  
  }})

)*/

