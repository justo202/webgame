
var zoomed = false
var map = document.getElementById("map-id");
var parent = document.getElementById("map-parent");
var destination = document.getElementsByClassName("destination");
map.ondblclick = function(e)
{
if(!zoomed)
{
  map.style.backgroundSize = "1420px 1220px";
  map.style.width = "1420px";
  map.style.height = "1220px";

  destination[0].style.top = "380px";
  destination[0].style.left = "1300px";



  zoomed = true;

}
else {
  map.style.width = "100%";
  map.style.height = "100%";
  map.style.backgroundSize = "1100px 1070px";
  zoomed = false;
}

}
