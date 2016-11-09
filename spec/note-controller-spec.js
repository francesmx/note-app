function testNoteControllerWorks() {
  var noteList = new NoteList();
  noteList.addNote("Good Morning");
  var noteController = new NoteController(noteList);

  var element = document.createElement('div');
  element.id = "app";

  document.getElementById = function() {
    return element;
  }

  var modifiedElement = document.getElementById("app")
  noteController.insertHTML();

  var expectedHTML = "<ul><li><div>Good Morning</div></li></ul>";

  assert.isTrue(modifiedElement.innerHTML === expectedHTML);

}

testNoteControllerWorks();
