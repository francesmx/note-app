var noteList = new NoteList();
noteList.addNote("Favourite drink: seltzer");
noteList.addNote("Favourite food: pizza");
noteList.addNote("Favourite language: RUBY!!!");

var noteController = new NoteController(noteList);
noteController.insertHtml();
