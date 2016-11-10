var testDiv = document.createElement('div');
var t = document.createTextNode("hello");
testDiv.id = "app";
testDiv.appendChild(t);

var textArea = document.createElement('textarea');
var t = document.createTextNode("Some test text");
textArea.id = "text";
textArea.appendChild(t);

var submitBtn = document.createElement('button');
var t = document.createTextNode("Submit");
submitBtn.id = "submit";
submitBtn.type = "submit";
submitBtn.appendChild(t);

document.getElementById = function(element){
  switch(element) {
    case "app":
      return testDiv;
    case "submit":
      return submitBtn;
    case "text":
      return textArea;
  }
}
