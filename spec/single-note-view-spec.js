// var NoteList = require("./src/note-list-model").NoteList
// var Note = require("./src/note-model").Note
// var SingleNoteView = require("./src/note-model").SingleNoteView

function testNoteSingleView(){

  var note = new Note("Favourite drink: seltzer");
  var singleNote = new SingleNoteView(note);
  singleNote.viewSingleNote();
  var expectedValue = "<div>Favourite drink: seltzer</div>";
  var singleNoteDiv = document.getElementById('app').innerHTML;
  if(singleNoteDiv != expectedValue){
    throw new Error ("Single note is not there " + singleNoteDiv);
  } else {
    console.log("Success happy days - single note is there!" + singleNoteDiv);
  }
}

testNoteSingleView();
