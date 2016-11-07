(function(exports) {

    function Note(string) {
      this.text = string;
    }

    Note.prototype.getText = function () {
      return this.text;
    };

    exports.Note = Note;
    exports.getText = this.getText;
})(this);
