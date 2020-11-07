  var change = true;

function myFunction(x,y) {

  if (x.matches && change) { // If media query matches
    var destinations = document.getElementsByClassName("destination");

    for(let x = 0; x < destinations.length;x++)
    {
      var rect = destinations[x].getBoundingClientRect();
      var xx = rect.left-140 - window.pageXOffset;; //172 is the difference in width between the images
      var yy = rect.top-3 - window.pageXOffset;;
      destinations[x].style.left = xx + "px";
      //destinations[x].style.top = yy + "px";

    }
    change = false;
  }

  if( window.matchMedia("(min-width: 1029px)").matches && !change)
  {
    var destinations = document.getElementsByClassName("destination");

    for(let x = 0; x < destinations.length;x++)
    {
      var rect = destinations[x].getBoundingClientRect();
      var xx = rect.left+140 - window.pageXOffset;; //172 is the difference in width between the images
      var yy = rect.top+3 - window.pageXOffset;;
      destinations[x].style.left = xx + "px";
    //  destinations[x].style.top = yy + "px";

    }
    change = true;

  }

}

var x = window.matchMedia("(max-width: 1028px)");
var y = window.matchMedia("(min-width: 1029px)");
myFunction(x,y); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
