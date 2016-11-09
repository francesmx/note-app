function testNoteReturnsText() {
  var note = new Note("Hello World");

  if (note.returnText() !== "Hello World") {
    throw new Error("Note is not returning text");
  }
  else { console.log("Passed: " + note.returnText()) }
};

function testNoteHasId() {
  var note = new Note("Hello World");

  actual = note.id
  expected = 1

  assert.isTrue(actual === expected)
}

testNoteReturnsText();
testNoteHasId();
