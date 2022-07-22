const array = ["Radio-techno", "Provocations", "Scale", "Anti-architecture", "Well-to-do Neighbourhood", "Gold Geometry", "Architectural Pedagogy", "Inflatable", "Steel", "Smoke and Mirrors", "Pavillion", "Politics of Space", "Interior", "Meditative", "Six-Track Audio", "Cocoon", "Reframe", "Echo-Chamber", "Conscious of Time", "Disjointed", "Labour in Silicon Valley", "Disrupted", "Contemporary Ensalvement to Capital", "Supplemented", "Agitation", "Fairness", "Dodgy-Dealings", "On-Demand Economy", "Body as Office","Embodied Labour", "Need your Body", "Durational", "Key-Workers", "Alure", "Iconic", "Precarious", "Social Capital"];


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