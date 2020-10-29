// Make the DIV element draggable:

var originalHeight, originalWidth
var done = 0; //variable that's determines how many are done


var images = document.getElementsByClassName("church-img dragme");
var destinations = document.getElementsByClassName("destination");
var churchNames = [
  'Antakalnio Šv. apaštalų Petro ir Povilo bažnyčia',
  'Antakalnio Viešpaties Jėzaus bažnyčia',
  'Lukiškių Šv. apaštalų Pilypo ir Jokūbo bažnyčia',
  'Šv. arkangelo Mykolo bažnyčia',
  'Šv. arkangelo Rapolo bažnyčia',
  'Šv. Dvasios bažnyčia',
  'Šv. Jono Krikštytojo ir šv. apaštalo evangelisto Jono bažnyčia',
  'Šv. Jurgio bažnyčia',
  'Šv. Kazimiero bažnyčia',
  'Šv. Kotrynos Aleksandrietės bažnyčia',
  'Šv. Pranciškaus Asyžiečio ir šv. Bernardino Sieniečio bažnyčia',
  'Šv. Teresės Avilietės bažnyčia',
  'Šv. Ignoto bažnyčia',
  'Švč. Jėzaus Širdies bažnyčia',
  'Švč. Mergelės Marijos Ėmimo į dangų bažnyčia',
  'Švč. Mergelės Marijos Ramintojos bažnyčia',
  'Švč. Trejybės bažnyčia',
  'Trinapolio Švč. Trejybės bažnyčia',
  'Užupio Šv. Baltramiejaus bažnyčia',
  'Verkių Šv. Kryžiaus Atradimo bažnyčia',
  'Viešpaties Žengimo į dangų bažnyčia',
  'Vilniaus Šv. Kryžiaus bažnyčia',
  'Visų Šventųjų bažnyčia'
];



var imagedetails = [];
var i;
for(i = 0;i<23;i++) //initalise array that stores all the required information for the image
{
  var image = {
    destination: destinations[i].getBoundingClientRect(),
    img: images[i],
    name: churchNames[i]
  }
  imagedetails.push(image); //pushes details on the array

}

for(let n = 0; n < 23;n++)
{

  destinations[n].addEventListener("click",function()
{
  var imgNumb = n+1;
  var variable = n;
  document.getElementById("modalTitle").innerHTML = churchNames[variable];
  document.getElementById("modalImg").src = "img/" + imgNumb + ".png";
});
}




  var random = Math.floor(Math.random() * 23); //generates random number
  dragElement(imagedetails[random].img,random); //starts the function



function dragElement(elmnt,index) {
  window.onresize = function() //makes element always be in the correct spot
  {
    elmnt.style.width = document.getElementById("hide").offsetWidth+ "px"; //returns to original size
    elmnt.style.height = document.getElementById("hide").offsetHeight + "px";
    elmnt.style.top = document.getElementById("hide").offsetTop + "px";
    elmnt.style.left = document.getElementById("hide").offsetLeft + "px";

  };
  document.getElementById("imgheader").onclick = function()
  {
    var imgNumb = index + 1;
    document.getElementById("modalTitle").innerHTML = imagedetails[index].name;
    document.getElementById("modalImg").src = "img/" + imgNumb + ".png";

  };
  elmnt.style.visibility = "visible"; //makes element vissible
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var startposx, startposy;
  var move = true; //allows it to move
  var wrong = 0;
var destinationx = imagedetails[index].destination;



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
    element.style.width = "45px";
    element.style.height = "auto";
  }
  function dragMouseDown(e) {
    if(move)
    {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:

      pos3 = e.pageX;
      pos4 = e.pageY;
      originalHeight = elmnt.style.height;
      originalWidth = elmnt.style.width;
      reduceSize(elmnt); //reduces images size
      elmnt.style.top = (pos4-elmnt.height/2) + "px"; //centers the image
      elmnt.style.left = (pos3-elmnt.width/2) + "px";
      document.onmouseup = closeDragElement;
      // cll a function whenever the cursor moves:

      document.onmousemove = elementDrag;
    }
    else
    {
        var imgNumb = index+1;
        document.getElementById("modalTitle").innerHTML = imagedetails[index].name;
        document.getElementById("modalImg").src = "img/" + imgNumb + ".png";
        elmnt.dataset.target = "#modal";
      var myModal = new coreui.Modal(document.getElementById('myModal'), {
        keyboard: true
        })

      myModal.show();

    }
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();


    // calculate the new cursor position:
      pos1 = pos3 - e.pageX;
      pos2 = pos4 - e.pageY;
      pos3 = e.pageX;
      pos4 = e.pageY;


    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }


  function CheckifHover(x,y)
  {
    var l;
    for(l = 0;l< 23;l++)
    {
      if ((y > imagedetails[l].destination.top) && (y < imagedetails[l].destination.bottom) && (x > imagedetails[l].destination.left) && (x < imagedetails[l].destination.right))
      {
        wrong++;
        document.getElementById("findText").innerHTML = "Neteisingai! Čia stovi: " + imagedetails[l].name;
        document.getElementById("findText").style.animation = "incorect 2s 1";

        var elm = document.getElementById("findText");
        var newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
      }
    }

  }
  function closeDragElement() {
    // stop moving when mouse button is released:
  //var coordinates = elmnt.getBoundingClientRect();


    if ((wrong == 2)||((event.pageY > destinationx.top) && (event.pageY < destinationx.bottom) && (event.pageX > destinationx.left) && (event.pageX < destinationx.right)))
    {

      move = false;
      elmnt.style.cursor = "pointer";
      elmnt.style.top = destinationx.top+"px";
      elmnt.style.left = destinationx.left+"px";
      done++;



      if(done < 23)
      {

        var random = Math.floor(Math.random() * 23);
        while(images[random].style.visibility == "visible")
        {
          random = Math.floor(Math.random() * 23);

        }
        document.getElementById("findText").innerHTML = "Rask šią bažnyčią";

        dragElement(images[random],random);
      }
    }
    else {


      CheckifHover(event.clientX,event.clientY);
      elmnt.style.width = document.getElementById("hide").offsetWidth+ "px"; //returns to original size
      elmnt.style.height = document.getElementById("hide").offsetHeight + "px";
      elmnt.style.top = document.getElementById("hide").offsetTop + "px";
      elmnt.style.left = document.getElementById("hide").offsetLeft + "px";

    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

}
