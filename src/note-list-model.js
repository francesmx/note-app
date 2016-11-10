(function(exports) {
  function NoteList(){
    this.notes = [];
  }

  NoteList.prototype.addNote = function(text){
    var note = new Note(text);
    this.notes.push(note);
    note.addId(this.notes.length)
  }

  NoteList.prototype.findNoteById = function(id) {
    for (var i = 0; i<this.notes.length;i++){
      if (this.notes[i].id === id) {
        return this.notes[i];
      }
    }
  }

  NoteList.prototype.returnNotes = function(){
    return this.notes;
  };

  exports.NoteList = NoteList;
  // exports.returnNotes = this.returnNotes;
  // exports.addNote = this.addNote;
})(this);
