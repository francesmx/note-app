// document.getElementById('app').innerHTML = "Howdy";
// console.log(document.getElementById('app').innerHTML);


(function (exports){
  function NoteController(){
    this.noteList = new NoteList();
  }

  NoteController.prototype.insertHtml = function(){
    document.getElementById('app').innerHTML = "<ul><li><div>Hello, here I am!!!</div></li></ul>";
  }

  exports.NoteController = NoteController
})(this);

// var nc = new NoteController();
// nc.insertHtml();

// var note = new Note("Favourite drink: seltzer");
// var testNoteList = new NoteList();
// testNoteList.addNote(note);
// var testNoteListView = new NoteListView();
// var actualValue = testNoteListView.returnHtml(testNoteList);
