
/*Slider properties*/ 
$("#slider11").roundSlider({
    circleShape: "custom-quarter",
    radius: 480,
    width: 5,
    startAngle: 45,
    handleSize: "+14",
    handleShape: "square",
    handleSize: "34,12",
    value: 0,
    sliderType: "min-range",
    showTooltip: false,
    lineCap: "round"
});

/*Discrete initializations*/ 
d3.select("#curve")
.attr("visibility","hidden")
d3.select("#reverse_curve")
.attr("visibility","hidden")
d3.select("#st_line")
.attr("visibility","hidden")
 

 $("#slider11").on("update", function (e) {
   let i =e.value;

   console.log(i);
   var p = (100-i)*13/100


   d3.select("#labels_drag_summary")
   .attr("visibility","hidden");

/*if(i==100){
    d3.select("#guitar-body")
    .attr("stroke-opacity",0.99)
    .attr("opacity",0.99);

    d3.selectAll("#text_reality")
    .attr("visibility","");

 
}*/

if (i==0){
   d3.select("#text_0")
      .style("visibility","")
}

else{
      d3.select("#text_0")
      .style("visibility","hidden")
  
   }




if(  i<20 & i>0){ 
   

d3.select("#text_first")
   .style("visibility","visible");


}

   else{
      d3.select("#text_first")
         .style("visibility","hidden");

   }





/*Idealization */
if(i<40 & i>20){
   d3.select("#text_geo")
   .style("visibility","visible");

}

else{
   d3.select("#text_geo")
   .style("visibility","hidden");

}


/*Discretization*/
if(i<60 & i>40){
   d3.select("#text_dis")
   .style("visibility","visible");

}

else{
   d3.select("#text_dis")
   .style("visibility","hidden");

}


/*Geometric Structure*/


if(i<80 & i>60){
   d3.select("#text_ideal")
   .style("visibility","visible");
}

else{
   d3.select("#text_ideal")
   .style("visibility","hidden");



}


/*Maths*/

if(i>80){
   d3.select("#text_reality")
   .style("visibility","visible");



}

else{
   d3.select("#text_reality")
   .style("visibility","hidden");


}

})


