
var newNote = function(text){
  $.post( "/notes", {description: text }, function(response){
    $("<li>").text(response.description)
    .attr("id", response.id)
    .append("<input type='checkbox'>")
    .append("<span>x</span")
    .appendTo("ul");
  });

};

$("form").on("submit", function(e){
  e.preventDefault();
  var noteText = $("input").val();
  newNote(noteText);
  this.reset();
});

var displayNotes = function(){
   $.getJSON("/notes", function(response){
    $.each(response, function(index, item){
      var checkedString = '';
      if ( item.completed === true){
        checkedString = 'checked';
      }
      $("<li>").text(item.description)
      .attr("id", item.id)
      .attr("class", function(){
        if(item.completed === true){
        return "completed";
        }
      })
      .append('<input type="checkbox" ' + checkedString + '/>')
      .appendTo("ul");
    });
    $("<span>x</span>").appendTo("li");
  });
};


$("body").on("change", "input[type=checkbox]", function(){
  var id = $(this)[0].parentElement.id;
  $(this).parent().toggleClass("completed");
  var list = $(this).parent().attr('class');
  var completedClass = function(){
    if(list == "completed"){
      return true;
    } else {
      return false;
    }
  };
  $.ajax({
    type: 'PUT',
    url: 'notes/ '+ id +'',
    data: {completed: completedClass() }
  });

});

$('body').on('click', 'span', function() {
  var id = $(this)[0].parentElement.id;
  $(this)[0].parentElement.remove();
  $.ajax({
    type: 'DELETE',
    url: 'notes/ '+ id +'',
  });
  console.log($(this));
});

displayNotes();

//if button is checked, completed = true , text decoration linethrough 