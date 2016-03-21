var buttons = [
  "Neutral Atttack",
"Forward Tilt",
"Up Tilt","Down Tilt","Forward Smash","Up Smash",'Down Smash',"Neutral Air","Forward Air","Back Air","Up Air","Down Air","Up B","Down B","Side B","Neutral B","Forward Throw","Back Throw","Up Throw","Down Throw"]
buttons.forEach(function(a,b){
  var element = $(document.createElement("a"))
  element
    .text(a)
    .attr("href","#dropdown" + (b+1))
    .appendTo("ul")

});
