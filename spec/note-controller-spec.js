
function testNoteInstantiatesWithList() {
  var list = new NoteList();
  list.createNote('Hello')
  var controller = new NoteController(list)
  assert.isTrue(controller.noteList === list)
}

testNoteInstantiatesWithList();


function testInnerHTML() {
  var list = new NoteList()
  list.createNote('Hello')
  var controller = new NoteController(list)
  var appDiv = document.createElement('div', {id: 'app'});
     document.getElementById = function() {
       return appDiv;
     }
  var html = controller.generateHTML();
  document.getElementById("app").innerHTML = html
  assert.isTrue(appDiv.innerHTML === html)
}

testInnerHTML()
