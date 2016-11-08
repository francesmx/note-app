(function(exports) {

  function NoteListView() {
  }

  NoteListView.prototype.renderAll = function(noteList) {
    return "You don't have any notes.";
  };


  exports.NoteListView = NoteListView;
  exports.renderAll = this.renderAll;

})(this);
