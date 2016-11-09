// var NoteList = require("./src/note-list-model").NoteList
// var Note = require("./src/note-model").Note
// var SingleNoteView = require("./src/note-model").SingleNoteView

function testNoteSingleView(){

  var note = new Note("Favourite drink: seltzer");
  var singleNote = new SingleNoteView();
  singleNote.viewSingleNote(note);
  var expectedValue = "<div>Favourite drink: seltzer</div>";
  var elementDiv = document.getElementById('singleNote');
  var elementLi = elementDiv.getElementsByTagName('li');
  var listItem = elementLi[0].innerHTML;
  if(listItem != expectedValue){
    throw new Error ("Single note is not there" + listItem);
  } else {
    console.log("Success happy days - single note is there!" + listItem);
  }
}

testNoteSingleView();
