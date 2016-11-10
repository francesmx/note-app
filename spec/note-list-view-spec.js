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
  var testNoteList = new NoteList();
  testNoteList.addNote("Hello, here I am!!!");
  var testNoteListView = new NoteListView();
  var actualValue = testNoteListView.returnHtml(testNoteList);
  if(actualValue != '<ul><li><div><a href="#notes/1">Hello, here I am!!!</a></div></li></ul>'){
    throw new Error ("HTML list item was not correctly created : " + actualValue );
  } else {
    console.log("Success - The HTML was correctly generated : " + actualValue );
  }
}

function testTwoNoteView(){
  var testNoteList = new NoteList();
  testNoteList.addNote("Hello, here I am waiting patiently!!!");
  testNoteList.addNote("And here I'll stay for as long as it takes!!!");
  var testNoteListView = new NoteListView();
  var actualValue = testNoteListView.returnHtml(testNoteList);
  if(actualValue != '<ul><li><div><a href="#notes/1">Hello, here I am wai...</a></div></li><li><div><a href="#notes/2">And here I\'ll stay f...</a></div></li></ul>'){
    throw new Error ("HTML list item was not correctly created : " + actualValue );
  } else {
    console.log("Success - The HTML was correctly generated : " + actualValue );
  }
}

function testNoteListView20chars(){
  var testNoteList = new NoteList();
  testNoteList.addNote("This is a long string with more than 20 characters")
  var testNoteListView = new NoteListView();
  var actualValue = testNoteListView.returnHtml(testNoteList);
  if(actualValue != '<ul><li><div><a href="#notes/1">This is a long strin...</a></div></li></ul>'){
    throw new Error ("Sad days :( The string was not shortened : " + actualValue );
  } else {
    console.log("Happy days - the string was shortened : " + actualValue );
  }
}

NoItemsTestNoteView();
testNoteView();
testTwoNoteView();
testNoteListView20chars();
