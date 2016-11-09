function testSingleNoteViewReturnsNote() {
  note = new Note("Favourite food: Nando's")
  var singleNoteView = new SingleNoteView(note)

  var expected = "<div>Favourite food: Nando's</div>"
  var actual = singleNoteView.renderNote();

  assert.isTrue(actual === expected)
}

testSingleNoteViewReturnsNote();
