var Note = require("./src/note-controller").NoteController
var NoteList = require("./src/note-list-model").NoteList
var Note = require("./src/note-model").Note

function testNoteController(){
  var noteController = new NoteController();
  var note = new Note("Favourite drink: seltzer");
  noteController.noteList.addNote(note);
  noteListView.returnHtml(noteController.noteList);
  noteController.insertHtml();
  var expectedValue = "<div>Favourite drink: seltzer</div>";
  var elementDiv = document.getElementById('app');
  var elementLi = elementDiv.getElementsByTagName('li');
  var listItem = elementLi[0].innerHTML;
  if(listItem != expectedValue){
    throw new Error ("Note is not there" + listItem);
  } else {
    console.log("Success happy days!" + listItem);
  }
}

testNoteController();

function testMultipleNoteController(){
  var noteController = new NoteController();
  var note = new Note("Favourite drink: seltzer");
  noteController.noteList.addNote(note);
  var note = new Note("Favourite food: pizza");
  noteController.noteList.addNote(note);
  noteListView.returnHtml(noteController.noteList);
  noteController.insertHtml();
  var expectedValue = "<div>Favourite food: pizza</div>";
  var elementDiv = document.getElementById('app');
  var elementLi = elementDiv.getElementsByTagName('li');
  var listItem = elementLi[1].innerHTML;
  if(listItem != expectedValue){
    throw new Error ("Note is not there" + listItem);
  } else {
    console.log("Success happy days!" + listItem);
  }
}

testMultipleNoteController();
