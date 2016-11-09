function testNoteListViewReturnsEmpty () {
    var noteList = new NoteList();
    var noteListView = new NoteListView();
    var expected = "You don't have any notes.";
    var actual = noteListView.renderAll(noteList);
    assert.isTrue(actual === expected);
}

function testNoteListViewReturnsOne() {
  var noteList = new NoteList();
  var noteListView = new NoteListView();
  noteList.addNote("Hello World");

  var note = noteList.returnNotes()[0];
  note.id = 1;

  var actual = noteListView.renderAll(noteList);
  var expected = '<ul><li><a href="#notes/1"><div>Hello World</div></a></li></ul>';
  assert.isTrue(actual === expected);
}

function testNoteListViewReturnsMultiple() {
  var noteList = new NoteList();
  var noteListView = new NoteListView();
  noteList.addNote("Hello World");
  noteList.addNote("Goodbye World");

  var note = noteList.returnNotes()[0];
  note.id = 1;

  var note = noteList.returnNotes()[1];
  note.id = 2;

  var actual = noteListView.renderAll(noteList);
  var expected = '<ul><li><a href="#notes/1"><div>Hello World</div></a></li><li><a href="#notes/2"><div>Goodbye World</div></a></li></ul>';

  assert.isTrue(actual === expected);
}

function testOnlyReturnsFirst20Chars() {
  var noteList = new NoteList();
  var noteListView = new NoteListView();
  noteList.addNote("Hello oh my I could go on for ages and ages I just keep on typing!");
  var note = noteList.returnNotes()[0];
  note.id = 1;
  var actual = noteListView.renderAll(noteList);
  var expected = '<ul><li><a href="#notes/1"><div>Hello oh my I could ...</div></a></li></ul>'

  assert.isTrue(actual === expected);
}

testNoteListViewReturnsEmpty();
testNoteListViewReturnsOne();
testNoteListViewReturnsMultiple();
testOnlyReturnsFirst20Chars();
