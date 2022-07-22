const array = ["Radio-techno Construction Environmental Distorition", "Insertion into Landscape History", "Scale", "Anti-architecture Spaces", "Well-to-do Neighbourhood", "Goldrush Gold and its Geometry", "Architectural Pedagogy", "Inflatables, Contrasting Steel and Glass Pavillion ", "Smoke and Mirrors", "Politics of Space", "Meditative Fabrics", "Six-Track Audio Accompaniment", "Interior as Disruptive Cocoonic Architecures", "Reframed Yellow Orbics", "Echo-Chamber", "Consciousness of Time", "Labour in Silicon Valley", "Contemporary Ensalvement to Capital", "Agitation of the Body in Motion", "Financial Fairness", "Dodgy-Dealings", "On-Demand Economy", "Body as Office","Embodied Labour", "Need your Body", "Durational", "Key-Workers", "Digital Alure of Work", "Iconic Colonial Site", "Precarious Finance", "Social Capital", "Utopian Unlimited Time and Resources"];


//Set empty array
const array2 = [];


function Conversation() {
  //Pick an array choice
  let arrayChoice = array[Math.floor(Math.random() * array.length)];

    //array2.push(arrayChoice);
    //document.getElementById("brief").innerHTML = (arrayChoice);
    //document.getElementById("brief2").innerHTML = (array2);

  if (array2.length == array.length) 
  {
    //end conversation
    document.getElementById("brief2").innerHTML = "Multifaceted Diaspora";
    //clear array2
    array2.splice(0, array.length);
    document.getElementById("brief").innerHTML = '';
    document.getElementById("brief2").style.color = "#eedf54";

    //document.getElementById("brief3").innerHTML = 'The array sliced has: ' + array2;
  } else if (array2.length == 0){
      //for the first time the function is called.
      //print the result
      document.getElementById("brief").innerHTML = arrayChoice;
      //append the choice to the array2 
      array2.push(arrayChoice);
      //document.getElementById("brief").innerHTML = '';
      document.getElementById("brief2").innerHTML = '';

  } else if (array2.length < array.length) {

      while (array2.includes(arrayChoice)) {

          arrayChoice = array[Math.floor(Math.random() * array.length)];
      }
      document.getElementById("brief").innerHTML = arrayChoice;
      array2.push(arrayChoice);
  }
  /*else if (array2.length < array.length) {
             //
             for (let x of array2) {
                 if (array2[x].compare(arrayChoice)) {
                     while (array2[x].compare(arrayChoice)) {
                         arrayChoice = array[Math.floor(Math.random() * array.length)];
                     }
                 } else {
                     document.getElementById("brief").innerHTML = arrayChoice;
                     array2.push(arrayChoice);
                 }
             }
         } */
}