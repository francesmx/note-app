(function(exports) {

    function NoteController(noteList) {
      this.noteList = noteList;
      this.noteListView = new NoteListView(this.noteList);
    }

    NoteController.prototype.generateHTML = function () {
      return this.noteListView.getHTML();
    };

    exports.NoteController = NoteController;

})(this);
