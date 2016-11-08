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

function testNoteListViewReturnsHTML() {
  var noteList = new NoteList();
  var noteListView = new NoteListView();
  noteList.addNote("Hello World");

  var actual = noteListView.renderAll(noteList);
  var expected = "<ul><li><div>Hello World</div></li></ul>";
  console.log(actual)
  assert.isTrue(actual === expected);
}

testNoteListViewReturnsEmpty();
testNoteListViewReturnsHTML();
