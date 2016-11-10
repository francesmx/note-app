(function(exports) {

    // var noteId = 0

    function Note(text){
      this.text = text;
      this.id = 0;
    };

    Note.prototype.returnText = function (){
      return this.text;
    };

    Note.prototype.addId = function (id) {
      this.id = id;
    };

    exports.Note = Note;
    // exports.returnText = this.returnText;
})(this);
