(function(exports) {
  function NoteList(){
    this.notes = [];
  }

  NoteList.prototype.addNote = function(note){
    this.notes.push(note);
    note.addId(this.notes.length)
  }

  NoteList.prototype.returnNotes = function(){
    return this.notes;
  };

  exports.NoteList = NoteList;
  exports.returnNotes = this.returnNotes;
  exports.addNote = this.addNote;
})(this);
