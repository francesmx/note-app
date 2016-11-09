// var Note = require("./src/note-model").Note
// var NoteList = require("./src/note-list-model").NoteList
// var NoteListView = require("./src/note-list-view.js").NoteListView
// var NoteController = require("./src/note-controller.js").NoteController

noteController = new NoteController();
note = new Note("Favourite drink: seltzer");
noteController.noteList.addNote(note);
note = new Note("Favourite food: pizza");
noteController.noteList.addNote(note);
note = new Note("Favourite language: RUBY!!!");
noteController.noteList.addNote(note);
noteListView = new NoteListView();
noteListView.returnHtml(noteController.noteList);
console.log(noteController.noteList);
noteController.insertHtml();

note1 = new Note("Happy days is the new JS standard")
singleNote = new SingleNoteView(note1)
singleNote.viewSingleNote();
