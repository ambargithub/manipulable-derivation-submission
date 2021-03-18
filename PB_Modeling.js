/*Progress bar*/
window.onscroll = function() {widd()};
function widd(){
  var elm = document.getElementById("text");
  var y = elm.scrollTop;
  console.log(y);
  if(y<1392){
    d3.select("#rect")
    .attr("width",1.3*y);
  }
  else if(y>=1392 & y<2490){
    d3.select("#rect")
    .attr("width",(720+ 0.8*y));
  }

  else{
    d3.select("#rect")
    .attr("width",(1980+ 0.3*y));
  }
  
}

d3.select("#bod").on("click",function(event){
  console.log(event.x);
})

  
  









 





