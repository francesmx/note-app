function testNoteListInstantiation() {
  var noteList = new NoteList();
  var note = new Note("hi there");
  noteList.addNote(note);
  assert.isTrue(noteList.getNoteText(0) === note.getText());
}

testNoteListInstantiation();

function testGetAllNotes() {
  var noteList = new NoteList();
  var note = new Note("morning James");
  var note2 = new Note("morning Frances");
  noteList.addNote(note);
  noteList.addNote(note2);
  assert.isTrue(typeof noteList.getAllNotes().isArray );
}

testGetAllNotes();

function createAndStoreNote(){
  var noteList = new NoteList();
  noteList.createNote("Javascript is better than Ruby.");
  !emptyArray.isItEmpty(noteList.notes);
}

createAndStoreNote();
