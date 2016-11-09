(function(exports) {
  function NoteList() {
    this.notes = []
    this.noteID = 1
  }

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text, this.noteID);
    this.noteID++;
    this.notes.push(note);
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes;
  };

  exports.NoteList = NoteList;
  exports.addNote = this.addNote;
  exports.returnNotes = this.returnNotes;
})(this);
