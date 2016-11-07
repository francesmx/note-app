var note = require("./src/note-model");

function testNoteTakesText(string) {
  var note = new Note();
  assert.isTrue(note.text === string);
}

testNoteTakesText('I really dislike JavaScript!');
