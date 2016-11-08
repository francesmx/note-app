var NoteList = require("./src/note-list-model").NoteList

function testNoteListModel(){
  var testNoteList = new NoteList();
  testNoteList.addNote("My favourite language is JavaScript");
  if(testNoteList.returnNotes() != "My favourite language is JavaScript"){
    throw new Error ("Note is not there");
  } else {
    console.log("Success : " + testNoteList.returnNotes())
  }
}

testNoteListModel();
