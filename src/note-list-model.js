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

  NoteList.prototype.getAllNotes = function () {
    return this.notes;
  };

  exports.NoteList = NoteList;
  exports.addNote = this.addNote;
})(this);
