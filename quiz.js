// Calulations
// 0      *
// 1     ***
// 2    *****
// 3   *******
// 4  *********
// 5 ***********
// 6*************

// starting at pos 0 in console line

// linePosition:        6  5  4  3  2  1  0
// characterCount      13 11  9  7  5  3  1
// spacceWidthFromEdge  0  1  2  3  4  5  6

// the height value determines the width of tree
// 1H = 1W  
// 2H = 3W  
// 3H = 5W
// 4H = 7W
// 5H = 9W
// 6H = 11W
// 7H = 13W

// (2 * height ) - 1 = width of characters in the line
// total characters per line = width + spaces needed
// spaces need from edge = ( width - total characters )/ 2

// varible declarations
var button = document.getElementById("buildIt");
var resetButton = document.getElementById("resetIt");
// console.log("in the JS file check button value", button );

//function to capture the input and build tree object for resuability
//and pass into imput checking function
function captureInput(clickevent) {
var pineTree = {
    pineHeight: document.getElementById("heightValue").value, 
    pineStyle: document.getElementById("charItem").value
    }; 
    // console.log("pinetreeobject",pineTree);
    checkInput(pineTree);
}
//function for checking inputs entered  have values in forms & alert 
//if not entered correctly if this passes, 
//call build tree function *guidance from http://eloquentjavascript.net/
function checkInput(checkTree) {
  if ((isNaN(checkTree.pineHeight) === true) || (checkTree.pineStyle === "")) {
    alert("Enter a number and any character other than a space or blank")
  } else {
    // console.log("checkInput Height",checkTree.pineHeight);
    // console.log("checkInput Character",checkTree.pineStyle);     
    pineORama(checkTree);
  }
}
//function for building pine o ramma
//pass in from the tree object the height as your count and then
//calualte the width of the spaces and the with of the characters passed
function pineORama(buildTree) {
  //define the width of the tree and create the string to hold the line items
  var pineWidth = (2 * buildTree.pineHeight) - 1;
  var pineLine = "";
  // console.log("pine width base", pineWidth); 
  // console.log("height in pineOrama", buildTree.pineHeight );
  // console.log("character in pineOrama", buildTree.pineStyle);
  //loop to count up to the height of tree 
  //and clear the string each pass
  for (i = 1; i <= buildTree.pineHeight; i++) {
      pineLine = "";
      //next loop counts up to hight entered less one and i
      //inserts the " " in the varible string, tested with "X" 
      //instead of space to see the loops
      for (j = 1; j <= buildTree.pineHeight - i ; j++){
          pineLine += " ";
          // console.log("2nd loop value entered", pineLine );
      }
      //next loop counts and insert string of the characters picked 
      //into varable to be displayed
      for (k = 1; k <= (2 * i ) - 1; k++){
        pineLine += buildTree.pineStyle;
        // console.log("3rd loop value entered", pineLine );      
      }
      //log the contents of string varible to the console
      console.log(pineLine);
  }
}

//reset the text boxes on the page and clear the console
function reSetForm(clickEvent){
  document.getElementById("heightValue").value ="";
  document.getElementById("charItem").value ="";
  console.clear();
 }

//call the function on button click
button.addEventListener("click", captureInput);

//added reset button and function from converter exercise
resetButton.addEventListener("click", reSetForm);
