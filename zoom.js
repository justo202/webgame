
var zoomed = false
var map = document.getElementById("map-id");
var parent = document.getElementById("map-parent");
var destination = document.getElementsByClassName("destination");



let pos = { top: 0, left: 0, x: 0, y: 0 };
const mouseDownHandler = function(e) {

  if(!imgmove)
  {

    parent.style.cursor = 'grabbing';
    parent.style.userSelect = 'none';
      pos = {
          // The current scroll
          left: parent.scrollLeft,
          top: parent.scrollTop,
          // Get the current mouse position
          x: e.pageX,
          y: e.pageY,
      };

      parent.addEventListener('mousemove', mouseMoveHandler);
      parent.addEventListener('mouseup', mouseUpHandler);
  }
};
const mouseMoveHandler = function(e) {
    // How far the mouse has been moved

    const dx = e.pageX - pos.x;
    const dy = e.pageY - pos.y;
    // Scroll the element
    parent.scrollTop = pos.top - dy;
    parent.scrollLeft = pos.left - dx;

};
const mouseUpHandler = function() {
    parent.style.cursor = 'grab';
    parent.style.removeProperty('user-select');

    parent.removeEventListener('mousemove', mouseMoveHandler);
  parent.removeEventListener('mouseup', mouseUpHandler);
};





map.ondblclick = function(e)
{
if(!zoomed)
{
  map.style.backgroundSize = "1420px 1220px";
  map.style.width = "1420px";
  map.style.height = "1220px";

  destination[0].style.top = "380px";
  destination[0].style.left = "1300px";

   parent.addEventListener('mousedown', mouseDownHandler);

  zoomed = true;
}
else {
  map.style.width = "100%";
  map.style.height = "100%";
  map.style.backgroundSize = "1100px 1070px";
  zoomed = false;
  parent.style.cursor = 'initial';
  parent.removeEventListener('mousedown', mouseDownHandler);
}

}
