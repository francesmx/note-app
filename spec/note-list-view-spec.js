var Note = require("./src/note-model").Note
var NoteList = require("./src/note-list-model").NoteList
var TestNoteView = require("./src/note-list-vew.js").TestNoteView

function testNoteView(){
  var t-NoteView = new TestNoteView();
  var note = new Note("Hello, here I am!!!");
  var testNoteList = new NoteList();
  testNoteList.addNote(note);
  //Do we need to do something to get it into "t-NoteView"???
  if(t-NoteView.returnHtml() != "<ul><li><div>Hello, here I am!!!</div></li></ul>"){
    throw new Error ("HTML list item was not created");
  } else {
    console.log("Success : " + testNoteList.returnNotes())
  }
}

testNoteView();


// "<ul><li><div>Favourite food: pesto</div></li></ul>"

// "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
