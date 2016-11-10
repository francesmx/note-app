// var Note = require("./src/note-model").Note

function testNoteModel(){
  var testNote= new Note("My favourite language is JavaScript");
  if (testNote.returnText() != "My favourite language is JavaScript") {
    throw new Error ("Text is not there");
  } else {
    console.log("Success : " + testNote.returnText());
  }
}

function testNoteModelId(){
  var notelist = new NoteList();
  notelist.addNote("My favourite language is JavaScript");
  if (notelist.notes[0].id != 1) {
    throw new Error ("ID is wrong" + notelist.notes[0].id);
  } else {
    console.log("Success : " + notelist.notes[0].id);
  }
}

testNoteModel();
testNoteModelId();

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
