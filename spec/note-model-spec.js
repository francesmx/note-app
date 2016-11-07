function testNoteTakesText(string) {
  var note = new Note(string);
  assert.isTrue(note.text === string);
}

testNoteTakesText('I really dislike JavaScript!');

// look at exports thing so we can access the test variables from node??
