function testNoteListView() {
  var noteList = new NoteList();
  noteList.createNote("hi there");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul><li><div>hi there</div></li></ul>");
}

testNoteListView();
