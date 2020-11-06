
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


//Enlarges the icons and changes their position to be based on the new map
function zoomIcons()
{


  for(var i = 0; i < destination.length;i++)
  {
    destination[i].style.width = "50px";
    destination[i].style.height = "50px";

  }

  destination[0].style.top = "450px";//1
  destination[0].style.left = "1360px";
  destination[1].style.top = "230px";//2
  destination[1].style.left = "1450px";
  destination[2].style.top = "570px";//3
  destination[2].style.left = "650px";
  destination[3].style.top = "855px";//4
  destination[3].style.left = "1060px";
  destination[4].style.top = "515px";//5
  destination[4].style.left = "790px";
  destination[5].style.top = "910px";//6
  destination[5].style.left = "910px";
  destination[6].style.top = "855px";//7
  destination[6].style.left = "990px";
  destination[7].style.top = "690px";//8
  destination[7].style.left = "870px";
  destination[8].style.top = "1040px";//9
  destination[8].style.left = "1010px";
  destination[9].style.top = "897px";//10
  destination[9].style.left = "862px";
  destination[10].style.top = "846px";//11
  destination[10].style.left = "1130px";
  destination[11].style.top = "1120px";//12
  destination[11].style.left = "1042px";
  destination[12].style.top = "855px";//13
  destination[12].style.left = "880px";
  destination[13].style.top = "1105px";//14
  destination[13].style.left = "1200px";
  destination[14].style.top = "980px";//15
  destination[14].style.left = "830px";
  destination[15].style.top = "990px";//16
  destination[15].style.left = "1040px";
  destination[16].style.top = "1100px";//17
  destination[16].style.left = "980px";
  destination[17].style.top = "10px";//18
  destination[17].style.left = "1280px";
  destination[18].style.top = "905px";//19
  destination[18].style.left = "1260px";
  destination[19].style.top = "10px";//20
  destination[19].style.left = "930px";
  destination[20].style.top = "1055px";//21
  destination[20].style.left = "1170px";
  destination[21].style.top = "795px";//22
  destination[21].style.left = "935px";
  destination[22].style.top = "1110px";//23
  destination[22].style.left = "900px";
}
function zoomOutIcons()
{
  for(var i = 0; i < destination.length;i++)
  {
    destination[i].style.width = "35px";
    destination[i].style.height = "35px";
  }

  destination[0].style.top = "320px";//1
  destination[0].style.left = "895px";
  destination[1].style.top = "170px";//2
  destination[1].style.left = "960px";
  destination[2].style.top = "410px";//3
  destination[2].style.left = "425px";
  destination[3].style.top = "610px";//4
  destination[3].style.left = "700px";
  destination[4].style.top = "365px";//5
  destination[4].style.left = "525px";
  destination[5].style.top = "650px";//6
  destination[5].style.left = "600px";
  destination[6].style.top = "610px";//7
  destination[6].style.left = "655px";
  destination[7].style.top = "495px";//8
  destination[7].style.left = "575px";
  destination[8].style.top = "735px";//9
  destination[8].style.left = "665px";
  destination[9].style.top = "640px";//10
  destination[9].style.left = "555px";
  destination[10].style.top = "605px";//11
  destination[10].style.left = "745px";
  destination[11].style.top = "805px";//12
  destination[11].style.left = "687px";
  destination[12].style.top = "610px";//13
  destination[12].style.left = "580px";
  destination[13].style.top = "800px";//14
  destination[13].style.left = "790px";
  destination[14].style.top = "698px";//15
  destination[14].style.left = "550px";
  destination[15].style.top = "700px";//16
  destination[15].style.left = "690px";
  destination[16].style.top = "790px";//17
  destination[16].style.left = "650px";
  destination[17].style.top = "15px";//18
  destination[17].style.left = "830px";
  destination[18].style.top = "645px";//19
  destination[18].style.left = "825px";
  destination[19].style.top = "15px";//20
  destination[19].style.left = "605px";
  destination[20].style.top = "760px";//21
  destination[20].style.left = "765px";
  destination[21].style.top = "570px";//22
  destination[21].style.left = "620px";
  destination[22].style.top = "778px";//23
  destination[22].style.left = "600px";



}


map.ondblclick = function(e)
{
if(!zoomed)
{


  var cordX = e.pageX - map.offsetLeft;
  var cordY = e.pageY - map.offsetTop;
  map.style.backgroundSize = "1520px 1320px";
  map.style.width = "1520px";
  map.style.height = "1320px";
  zoomIcons();



   parent.addEventListener('mousedown', mouseDownHandler);

  zoomed = true;
}
else {

  map.style.width = "1000px";
  map.style.height = "905px";
  map.style.backgroundSize = "1000px 950px";
  zoomOutIcons();
  zoomed = false;
  parent.style.cursor = 'initial';
  parent.removeEventListener('mousedown', mouseDownHandler);
}

}
