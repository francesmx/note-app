function testNoteListView() {
  var noteList = new NoteList();
  noteList.createNote("hi there");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul><li><div>hi there</div></li></ul>");
}

testNoteListView();

function testNoteListViewWithNoNotes() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul></ul>");
}
testNoteListViewWithNoNotes()


function testNoteListViewWithManyNotes() {
  var noteList = new NoteList();
  noteList.createNote("hi there");
  noteList.createNote("again?");
  noteList.createNote("hello");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul><li><div>hi there</div></li><li><div>again?</div></li><li><div>hello</div></li></ul>");
}
testNoteListViewWithManyNotes()
