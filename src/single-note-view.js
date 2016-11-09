(function(exports){
  function SingleNoteView(note){
    this.note = note;
  }

  SingleNoteView.prototype.viewSingleNote = function(){
    singleNote = document.getElementById('singleNote');
    note = this.createDiv();
    singleNote.innerHTML = note;
  }

  SingleNoteView.prototype.createDiv = function(){
    var noteRec = this.note.returnText();
    return ("<div>" + noteRec + "</div>")
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
