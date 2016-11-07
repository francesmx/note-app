(function(exports) {

  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.addNote = function (note) {
    this.notes.push(note);
  };

  NoteList.prototype.getNoteText = function (index) {
    return this.notes[index].getText();
  };

  exports.NoteList = NoteList;
  exports.addNote = this.addNote;
})(this);
