function testNoteListInstantiation() {
  var noteList = new NoteList();
  var note = new Note("hi there");
  noteList.addNote(note);
  assert.isTrue(noteList.getNoteText(0) === note.getText());
}

testNoteListInstantiation();
