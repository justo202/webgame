// Make the DIV element draggable:

var originalHeight, originalWidth
var done = 0; //variable that's determines how many are done


var images = document.getElementsByClassName("church-img dragme");
var destinations = document.getElementsByClassName("destination");



  var random = Math.floor(Math.random() * 3);
  dragElement(images[random],random);



function dragElement(elmnt,index) {
  elmnt.style.visibility = "visible";
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var startposx, startposy;
  var move = true;
var destinationx = destinations[index].getBoundingClientRect();
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      startposx = elmnt.offsetLeft; //get the position of an element
      startposy = elmnt.offsetTop;

      elmnt.onmousedown = dragMouseDown;

  }
  function reduceSize(element)
  {
    element.style.width = "100px";
    element.style.height = "100px";
  }
  function dragMouseDown(e) {
    if(move)
    {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:

      pos3 = e.clientX;
      pos4 = e.clientY;
      originalHeight = elmnt.style.height;
      originalWidth = elmnt.style.width;
      reduceSize(elmnt); //reduces images size
      elmnt.style.top = (pos4-elmnt.width/2) + "px"; //centers the image
      elmnt.style.left = (pos3-elmnt.height/2) + "px";
      document.onmouseup = closeDragElement;
      // cll a function whenever the cursor moves:

      document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();


    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
  var coordinates = elmnt.getBoundingClientRect();


    if ((coordinates.top > destinationx.top) && (coordinates.top < destinationx.bottom) && (coordinates.left > destinationx.left) && (coordinates.left < destinationx.right))
    {
      move = false;
      elmnt.style.cursor = "pointer";
      elmnt.style.top = destinationx.top+"px";
      elmnt.style.left = destinationx.left+"px";
      done++;
      if(done < 3)
      {
        var random = Math.floor(Math.random() * 3);
        while(images[random].style.visibility == "visible")
        {
          random = Math.floor(Math.random() * 3);

        }
        dragElement(images[random],random);
      }
    }
    else {
      elmnt.style.width = originalWidth; //returns to original size
      elmnt.style.height = originalHeight;
      elmnt.style.top = startposy+"px";
      elmnt.style.left = startposx+"px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
}
