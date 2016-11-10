// var NoteList = require("./src/note-list-model").NoteList
// var Note = require("./src/note-model").Note

function testNoteListModel(){
  var testNoteList = new NoteList();
  // var note = new Note("My favourite language is JavaScript");
  testNoteList.addNote("My favourite language is JavaScript");
  if(((testNoteList.returnNotes())[0]).returnText() != "My favourite language is JavaScript"){
    throw new Error ("Note is not there");
  } else {
    console.log("Success : " + (testNoteList.returnNotes()[0]).returnText())
  }
}

testNoteListModel();
