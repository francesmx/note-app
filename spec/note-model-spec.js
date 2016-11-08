var Note = require("./src/note-model").Note

function testNoteModel(){
  var testNote= new Note("My favourite language is JavaScript");
  if (testNote.returnText() != "My favourite language is JavaScript") {
    throw new Error ("Text is not there");
  } else {
    console.log("Success : " + testNote.returnText());
  }
}

testNoteModel();


// var assert = {
//   isTrue: function(assertionToCheck){
//     if(!assertionToCheck){
//       throw new Error("Assertion failed: " + assertionToCheck + " is NOT truthy");
//     } else {
//       console.log("Assertion passed: " + assertionToCheck + " IS truthy");
//     }
//   }
// }
//
// function testNoteModel(){
//   var testNote = new Note("My favourite language is not js.");
//   assert.isTrue(testNote.returnText() === "My favourite language is not js.");
// }
//
// testNoteModel();
