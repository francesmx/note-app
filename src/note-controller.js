(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView();
  }

  NoteController.prototype.insertHTML = function() {
    var html = this.noteListView.renderAll(this.noteList)
    document.getElementById("app").innerHTML=html
  };

  exports.NoteController = NoteController;
})(this);
