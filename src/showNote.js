

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage(){
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(winLocation) {
    return winLocation.hash.split("#")[1];
  }

  function showNote(noteRef){
    document.getElementById('app').innerHTML = "This is a test note as you can tell."
  }
