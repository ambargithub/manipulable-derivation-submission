/*Spring Force*/
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
