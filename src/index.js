var Note = require("./src/note-model").Note
var NoteList = require("./src/note-list-model").NoteList
var NoteListView = require("./src/note-list-view.js").NoteListView
var NoteController = require("./src/note-controller.js").NoteController

var noteController = new NoteController();

var note = new Note("Favourite drink: seltzer");
noteController.noteList.addNote(note);
var noteListView = new NoteListView();
noteListView.returnHtml(noteController.noteList);

noteController.insertHtml();


// var nc = new NoteController();
// nc.insertHtml();
