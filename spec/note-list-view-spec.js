// var Note = require("./src/note-model").Note
// var NoteList = require("./src/note-list-model").NoteList
// var NoteListView = require("./src/note-list-view.js").NoteListView

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
  var note = new Note("Hello, here I am waiting patiently!!!");
  var note2 = new Note("And here I'll stay for as long as it takes!!!");
  var testNoteList = new NoteList();
  testNoteList.addNote(note);
  testNoteList.addNote(note2);
  var testNoteListView = new NoteListView();
  var actualValue = testNoteListView.returnHtml(testNoteList);
  if(actualValue != "<ul><li><div>Hello, here I am wai...</div></li><li><div>And here I'll stay f...</div></li></ul>"){
    throw new Error ("HTML list item was not correctly created : " + actualValue );
  } else {
    console.log("Success - The HTML was correctly generated : " + actualValue );
  }
}

function testNoteListView20chars(){
  var note = new Note("This is a long string with more than 20 characters");
  var testNoteList = new NoteList();
  testNoteList.addNote(note)
  var testNoteListView = new NoteListView();
  var actualValue = testNoteListView.returnHtml(testNoteList);
  if(actualValue != "<ul><li><div>This is a long strin...</div></li></ul>"){
    throw new Error ("Sad days :( The string was not shortened : " + actualValue );
  } else {
    console.log("Happy days - the string was shortened : " + actualValue );
  }
}

NoItemsTestNoteView();
testNoteView();
testTwoNoteView();
testNoteListView20chars();
