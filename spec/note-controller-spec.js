function testNoteController(){
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer");
  var noteController = new NoteController(noteList);
  noteController.insertHtml();
  var expectedValue = '<div><a href="#notes/1">Favourite drink: sel...</a></div>';
  var elementDiv = document.getElementById('app');
  var elementLi = elementDiv.getElementsByTagName('li');
  var listItem = elementLi[0].innerHTML;
  if(listItem != expectedValue){
    throw new Error ("Note is not there - single" + listItem);
  } else {
    console.log("Success happy days on single note!" + listItem);
  }
}

testNoteController();

function testMultipleNoteController(){
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer");
  noteList.addNote("Favourite food: pizza");
  var noteController = new NoteController(noteList);
  noteController.insertHtml();
  var expectedValue = '<div><a href="#notes/2">Favourite food: pizz...</a></div>';
  var elementDiv = document.getElementById('app');
  var elementLi = elementDiv.getElementsByTagName('li');
  var listItem = elementLi[1].innerHTML;
  if(listItem != expectedValue){
    throw new Error ("Note is not there - multiple" + listItem);
  } else {
    console.log("Success happy days on multiple notes!" + listItem);
  }
}

testMultipleNoteController();

function testShowsFullNoteText(){
  var noteList = new NoteList();
  noteList.addNote("I wonder if this will work");
  var noteController = new NoteController(noteList);
  noteController.insertHtml();
  window.location.hash = "#notes/1";
  var elementDiv = document.getElementById("app");
  var expectedValue = '<div>I wonder if this will work</div>';

  if(elementDiv.innerHTML === expectedValue){
    console.log("Woohoo shows full note text" + elementDiv.innerHTML);
  } else {
    throw new Error ("Poo. Doesn't show full note text" + elementDiv.innerHTML);
  }
}

testShowsFullNoteText();

function testSubmitsNote() {

  // btn = document.getElementById("submit");
  // // I need to put something in the text area
  // submitBtn.click();
  //
  // var elementDiv = document.getElementById('app');
  // if(elementDiv.innerHTML === textArea.value){
  //   console.log("It submits a new note." + elementDiv.innerHTML);
  // } else {
  //   throw new Error ("Poo. It does not submit a new note." + elementDiv.innerHTML);
  // }
}

testSubmitsNote();
