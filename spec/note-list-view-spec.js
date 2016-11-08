var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log("Passed: " + assertionToCheck)
    }
  }
};

function testNoteListViewReturnsEmpty () {
    var noteList = new NoteList();
    var noteListView = new NoteListView();
    var expected = "You don't have any notes.";
    var actual = noteListView.renderAll(noteList);
    assert.isTrue(actual === expected);
    // if (noteListView.renderAll(noteList) !== expectedOutput) {
    //     throw new Error('Doesn\'t say no notes.')
    // } else {
    //     return "Passed: no notes"
    // }
}

function testNoteListViewReturnsOne() {
  var noteList = new NoteList();
  var noteListView = new NoteListView();
  noteList.addNote("Hello World");

  var actual = noteListView.renderAll(noteList);
  var expected = "<ul><li><div>Hello World</div></li></ul>";
  assert.isTrue(actual === expected);
}

function testNoteListViewReturnsMultiple() {
  var noteList = new NoteList();
  var noteListView = new NoteListView();
  noteList.addNote("Hello World");
  noteList.addNote("Goodbye World");
  var actual = noteListView.renderAll(noteList);
  console.log(actual)
  var expected = "<ul><li><div>Hello World</div></li><li><div>Goodbye World</div></li></ul>";

  assert.isTrue(actual === expected);
}

testNoteListViewReturnsEmpty();
testNoteListViewReturnsOne();
testNoteListViewReturnsMultiple();
