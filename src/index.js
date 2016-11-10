// var Note = require("./src/note-model").Note
// var NoteList = require("./src/note-list-model").NoteList
// var NoteListView = require("./src/note-list-view.js").NoteListView
// var NoteController = require("./src/note-controller.js").NoteController

var noteList = new NoteList();
noteList.addNote("Favourite drink: seltzer");
noteList.addNote("Favourite food: pizza");
noteList.addNote("Favourite language: RUBY!!!");

noteController = new NoteController(noteList);

// console.log(noteController.noteList);
noteController.insertHtml();

// note1 = new Note("Happy days is the new JS standard")
// singleNote = new SingleNoteView(note1)
// singleNote.viewSingleNote();
