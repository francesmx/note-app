(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView();
  }

  makeURLChangeShowNoteForCurrentPage();

  function makeURLChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  }

  function showNoteForCurrentPage() {
    showNote(getNoteIDFromUrl(window.location));
  }

  function getNoteIDFromUrl(location) {
    return location.hash.split("#notes/")[1];
  }

  function showNote(note_id) {
    var note = this.noteList.findNoteById(note_id);
    console.log(note);
    var singleNoteView = new SingleNoteView(note);
    document.getElementById("app").innerHTML = singleNoteView.renderNote();
  }

  NoteController.prototype.insertHTML = function() {
    var html = this.noteListView.renderAll(this.noteList)
    document.getElementById("app").innerHTML=html
  };

  exports.NoteController = NoteController;
})(this);
