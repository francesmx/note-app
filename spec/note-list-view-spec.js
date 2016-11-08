function testNoteListViewReturnsHTML () {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    var expectedOutput = "You don't have any notes."
    if (noteListView.renderAll() !== expectedOutput) {
        throw new Error('Doesn\'t say no notes.')
    } else {
        return "Passed: no notes"
    }
}
testNoteListViewReturnsHTML();