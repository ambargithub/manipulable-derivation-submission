
/*Drag-L*/ 
d3.select("#c-l").call(d3.drag()
.on("start",function(){
d3.select(this).attr("stroke-width",10)
d3.select("#l1").attr("visibility","")
d3.select("#lc-l").attr("visibility","")
d3.select("#l1-mov").attr("visibility","")
d3.select("#content-labels").attr("visibility","")
d3.select("#labels_drag_springforce").attr("visibility","hidden")
})
.on("drag",function(event){

let i =event.y;
let b1 = Math.round(event.y/100)
console.log(i)

if(i>139 & i<706){
d3.select(this)
  .attr("cy",(i+20));

d3.select("#s-l")
  .attr("width",110)
  .attr("height",(95-(0.15*(i-132))))
  .style("top",(-824-((139-i)/6.8) ) + "px");

d3.select("#force-l")
    .attr("width",10)
    .attr("height",0.16*(i - 142));

d3.select("#stretch-l")
    .attr("width",10)
    .attr("height",0.16*(i - 142));
  
d3.select("#l1-mov")
    .attr("y1",i)
    .attr("y2",i)
  
d3.select("#algebraicForce")
    .text("(" + (b1 -1) + ")")
    }

})
.on("end",function(){
d3.select(this).attr("stroke-width",0)
d3.select("#l1").attr("visibility","hidden")
d3.select("#lc-l").attr("visibility","hidden")
d3.select("#l1-mov").attr("visibility","hidden")

})
)

/*Text drag event*/ ////////////
d3.select("#algebraicForce").call(d3.drag()
  .on("start",function(event){
    
   })
  .on("drag",function(event){
  let v = Math.round(event.y/10);
  let t = (v-50)

  if(v>50 & v<150){
    
  d3.select(this)
    .text( "("+ (v -50) + ")");
    //.attr("x",event.x);
  
  d3.select("#c-l")
    .attr("cx", 10)
    .attr("height", 30);

  d3.select("#s-l")
    .attr("width", 10)
    .attr("height", 30);

  d3.select("#force-l")
    .attr("width", 10)
    .attr("height", 10);

  d3.select("#stretch-l")
    .attr("width", 10)
    .attr("height", 13);

  }
  })
  .on("end",function(event){
    c = Math.round(event.x/10);
    a = a+ (c - b);
    console.log(a);
  })
  
  
  )


    /*Progress bar*/
    d3.selectAll("#Image_8").on("click",function(){
      window.open("1_Idealization.html","_self" ); ;
    })
    
    d3.select("#Group_8593").on("click",function(){
      window.open("2_StringDynamism.html","_self" ); ;
    })
    d3.select("#Group_8586").on("click",function(){
      window.open("2_StringDynamism.html","_self" ); ;
    })
    
    d3.select("#Group_8587").on("click",function(){
    window.open("3_Discretization.html","_self" ); ;
    })
    
    d3.select("#Group_8588").on("click",function(){
        window.open("5_Zoom-m.html","_self" );})
    
    d3.select("#Group_8589").on("click",function(){
        window.open("10.1_PureMath.html","_self" );})















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

