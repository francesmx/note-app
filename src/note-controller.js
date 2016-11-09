// document.getElementById('app').innerHTML = "Howdy";
// console.log(document.getElementById('app').innerHTML);


(function (exports){
  function NoteController(){
    this.noteList = new NoteList();
  }

  NoteController.prototype.insertHtml = function(){
    list = document.getElementById('app');
    list.innerHTML = noteListView.returnHtml(noteController.noteList);
  }

  exports.NoteController = NoteController;
  // exports.insertHtml = this.insertHtml;
})(this);

// var nc = new NoteController();
// nc.insertHtml();

// var note = new Note("Favourite drink: seltzer");
// var testNoteList = new NoteList();
// testNoteList.addNote(note);
// var testNoteListView = new NoteListView();
// var actualValue = testNoteListView.returnHtml(testNoteList);
