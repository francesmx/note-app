(function(exports) {
  function NoteList() {
    this.notes = []
  }

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this.notes.push(note);
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes;
  };

  NoteList.prototype.findNoteById = function(id) {

    function hasId(value) {
      return value.id === id;
    }

    return note = this.notes.find(hasId);
  }

  exports.NoteList = NoteList;
  exports.addNote = this.addNote;
  exports.returnNotes = this.returnNotes;
})(this);
