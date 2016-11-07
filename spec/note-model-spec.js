var Note = require("./src/note-model");

function testNoteInstantiatesWithText(string) {
  var note = new Note(string);
  assert.isTrue(note.text === string);
}

testNoteInstantiatesWithText('I really dislike JavaScript!');

function testNoteReadTextMethod(string) {
  var note = new Note(string);
  assert.isTrue(note.getText() === string);
}

testNoteReadTextMethod("I really don't know what I'm doing");
