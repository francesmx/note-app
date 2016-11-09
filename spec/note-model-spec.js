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
  expected = 2

  assert.isTrue(actual === expected)
}

function testNoteIdIsIncremented() {
  var note = new Note("Hello World");
  var note2 = new Note("Hello Universe");

  actual = note2.id
  expected = 4

  assert.isTrue(actual === expected)
}

testNoteReturnsText();
testNoteHasId();
testNoteIdIsIncremented();
