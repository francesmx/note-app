(function (exports){

var self;

  function NoteController(noteList){
    self = this;
    self.noteList = noteList;
    self.noteListView = new NoteListView();
  }

  NoteController.prototype.insertHtml = function(){
    list = document.getElementById('app');
    list.innerHTML = this.noteListView.returnHtml(self.noteList);
  }

  submitNewNoteWhenButtonClicked();

  function submitNewNoteWhenButtonClicked(){
    document.getElementById("submit")
    .addEventListener("click", function(clickEvent) {
      clickEvent.preventDefault();
      var text = clickEvent.path[1][0].value;
      submitNote(text);
    });
  }

  function submitNote(text){
    self.noteList.addNote(text);
    self.insertHtml();
  }

  makeUrlChangeShowNoteForCurrentPage();

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  }

  function showNoteForCurrentPage(){
    showNote(getNoteFromUrl(window.location));
  }

  function getNoteFromUrl(winLocation) {
    return winLocation.hash.split("#notes/")[1];
  }

  function showNote(noteRef){
    var note = self.noteList.findNoteById(parseInt(noteRef));
    var singleNoteView = new SingleNoteView(note);
    document.getElementById("app").innerHTML = singleNoteView.createDiv();
  }

  exports.NoteController = NoteController;
})(this);
