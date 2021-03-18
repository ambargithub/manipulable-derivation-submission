/*Progress bar*/
window.onscroll = function() {widd()};
function widd(){
  var elm = document.getElementById("text");
  var y = elm.scrollTop;
  console.log(y);
  d3.select("#rect")
  .attr("width",1.3*y);
}


  
  









 





