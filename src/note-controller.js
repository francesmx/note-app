(function (exports){
  function NoteController(noteList){
    this.noteList = noteList;
    this.noteListView = new NoteListView();
  }

  NoteController.prototype.insertHtml = function(){
    list = document.getElementById('app');
    list.innerHTML = this.noteListView.returnHtml(this.noteList);
  }

  submitNewNoteWhenButtonClicked();

  function submitNewNoteWhenButtonClicked(){
    document.getElementById("submit")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      var text = clickEvent.path[1][0].value;
      // submitNote(text);
    });
  }

  // function submitNote(text){
  //   this.noteList.addNote(text);
  // }

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
    var singleNoteView = new SingleNoteView(note);
    document.getElementById("app").innerHTML = singleNoteView.createDiv();
  }

  exports.NoteController = NoteController;
})(this);
