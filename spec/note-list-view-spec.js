var Note = require("./src/note-model").Note
var NoteList = require("./src/note-list-model").NoteList
var NoteListView = require("./src/note-list-view.js").NoteListView

function NoItemsTestNoteView(){
  var testNoteListView = new NoteListView();
  var testNoteList = new NoteList();
  var actualValue = testNoteListView.returnHtml(testNoteList);
  if(actualValue != "There is nothing in the list"){
    throw new Error("An error should be returned")
  } else {
    console.log("Success - The correct message was returned : \"" + actualValue + "\"");
  }
}

function testNoteView(){
  var note = new Note("Hello, here I am!!!");
  var testNoteList = new NoteList();
  testNoteList.addNote(note);
  var testNoteListView = new NoteListView();
  var actualValue = testNoteListView.returnHtml(testNoteList);
  if(actualValue != "<ul><li><div>Hello, here I am!!!</div></li></ul>"){
    throw new Error ("HTML list item was not correctly created : " + actualValue );
  } else {
    console.log("Success - The HTML was correctly generated : " + actualValue );
  }
}

function testTwoNoteView(){
  var note = new Note("Hello, here I am!!!");
  var note2 = new Note("And here I'll stay!!!");
  var testNoteList = new NoteList();
  testNoteList.addNote(note);
  testNoteList.addNote(note2);
  var testNoteListView = new NoteListView();
  var actualValue = testNoteListView.returnHtml(testNoteList);
  if(actualValue != "<ul><li><div>Hello, here I am!!!</div></li><li><div>And here I'll stay!!!</div></li></ul>"){
    throw new Error ("HTML list item was not correctly created : " + actualValue );
  } else {
    console.log("Success - The HTML was correctly generated : " + actualValue );
  }
}
NoItemsTestNoteView();
testNoteView();
testTwoNoteView();
