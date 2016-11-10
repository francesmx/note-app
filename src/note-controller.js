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

  makeUrlChangeShowNoteForCurrentPage();

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  }

  function showNoteForCurrentPage(){
    showNote(getNoteFromUrl(window.location));
  }

  function getNoteFromUrl(winLocation) {
    return winLocation.hash.split("#notes/")[1];
  }

  function showNote(noteRef){
    var note = this.noteList.findNoteById(parseInt(noteRef));
    console.log(note);
    console.log(noteRef);
    var singleNoteView = new SingleNoteView(note);
    document.getElementById('app').innerHTML = singleNoteView.createDiv();
  }

  exports.NoteController = NoteController;
})(this);
