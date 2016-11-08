(function(exports) {

  function NoteListView() {
  }

  NoteListView.prototype.renderAll = function(noteList) {
    if (noteList.returnNotes().length === 0){
        return "You don't have any notes.";
    } else {
        console.log(noteList.returnNotes()[0].returnText());
        // for (var i = noteList.returnNotes().length - 1,)
        return "<ul><li><div>" + noteList.returnNotes()[0].returnText() + "</div></li></ul>";
    }
  };


  exports.NoteListView = NoteListView;
  exports.renderAll = this.renderAll;

})(this);
