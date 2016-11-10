// document.getElementById('app').innerHTML = "Howdy";
// console.log(document.getElementById('app').innerHTML);


(function (exports){
  function NoteController(noteList){
    this.noteList = noteList;
    this.noteListView = new NoteListView();
  }

  NoteController.prototype.insertHtml = function(){
    list = document.getElementById('app');
    list.innerHTML = this.noteListView.returnHtml(this.noteList);
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
