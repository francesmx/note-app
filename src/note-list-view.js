(function(exports) {
  function NoteListView(){
  }

  NoteListView.prototype.returnHtml = function(noteList){
    if (noteList.returnNotes().length === 0) {
      return "There is nothing in the list"
    } else {
      var liListItems = this.addListItemTags(noteList.notes);
      var ulList = this.addSurroundingListTags(liListItems);
      return ulList;
    }
  }

  NoteListView.prototype.addListItemTags = function(noteListAll){
    var liList = noteListAll.map(function(eachnote){
      var shortText = eachnote.returnText();
        if (shortText.length > 20){
          shortText = shortText.substring(0,20) + "...";
        }
        return ('<li><div><a href="#notes/' + eachnote.id + '">' + shortText + '</a></div></li>');
      });
    return liList.join("");
  }

  NoteListView.prototype.addSurroundingListTags = function(liListItems){
      return ("<ul>" + liListItems + "</ul>")
  }

  exports.NoteListView = NoteListView;
  // exports.returnHtml = this.returnHtml;
})(this);
