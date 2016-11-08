(function(exports) {
  function NoteListView(){
  }

  NoteListView.prototype.returnHtml = function(noteList){
    if (noteList.returnNotes().length === 0) {
      return "There is nothing in the list"
    } else {
      var liListItems = this.addListItemTags(noteList.returnNotes());
      var ulList = this.addSurroundingListTags(liListItems);
      return ulList;
    }

  }

  NoteListView.prototype.addListItemTags = function(noteListAll){
    var liList = noteListAll.map(function(eachnote){
        return ("<li><div>" + eachnote.returnText() + "</div></li>");
      });
      console.log("addListItemTags called! : " + liList);
    return liList;
  }

  NoteListView.prototype.addSurroundingListTags = function(){
    console.log("addSurroundingListTags called! : ");
  }

  exports.NoteListView = NoteListView;
  exports.returnHtml = this.returnHtml;
})(this);
