
var newNote = function(text){
  $.post( "/notes", {description: text }, function(response){
    console.log(response);
  });
};

$("form").on("submit", function(e){
  e.preventDefault();
  var noteText = $("input").val();
  // console.log(noteText);
  newNote(noteText);
});

var displayNotes = function(){
  $.getJSON("/notes", function(response){
    console.log(response);
  });
};
