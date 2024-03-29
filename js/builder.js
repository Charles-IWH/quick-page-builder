$(function() {

// Add single full width heading
$( "#1-column-heading" ).click(function() {
  $( "#content-section" ).append( "<div class='row'><div class='col-md-12'><h4 contenteditable='true'>Heading</h4></div></div>" )
});

// Add single full width paragraph
$( "#1-column-text" ).click(function() {
  $( "#content-section" ).append( "<div class='row'><div class='col-md-12'><p contenteditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis arcu. Nam iaculis nulla fermentum orci sagittis, vitae sollicitudin erat iaculis. Sed vestibulum fringilla suscipit. Nam quis feugiat dui. Nam id elit sit amet ex sodales tristique quis eget magna. Ut at metus aliquet, egestas urna eu, congue leo.</p></div></div>" )
});

// Add two equal columns of text with headings
$( "#2-column-text" ).click(function() {
  $( "#content-section" ).append( "<div class='row'><div class='col-md-6'><h4 contenteditable='true'>Heading</h4><p contenteditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis arcu. Nam iaculis nulla fermentum orci sagittis, vitae sollicitudin erat iaculis. Sed vestibulum fringilla suscipit. Nam quis feugiat dui. Nam id elit sit amet ex sodales tristique quis eget magna. Ut at metus aliquet, egestas urna eu, congue leo.</p></div><div class='col-md-6'><h4 contenteditable='true'>Heading</h4><p contenteditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis arcu. Nam iaculis nulla fermentum orci sagittis, vitae sollicitudin erat iaculis. Sed vestibulum fringilla suscipit. Nam quis feugiat dui. Nam id elit sit amet ex sodales tristique quis eget magna. Ut at metus aliquet, egestas urna eu, congue leo.</p></div></div>" )
});

// Add two equal columns with text on the left and an image on the right
$( "#2-column-text-image" ).click(function() {
  $( "#content-section" ).append( "<div class=row><div class=col-md-6><h4 contenteditable='true'>Heading</h4><p contenteditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis arcu. Nam iaculis nulla fermentum orci sagittis, vitae sollicitudin erat iaculis. Sed vestibulum fringilla suscipit. Nam quis feugiat dui. Nam id elit sit amet ex sodales tristique quis eget magna. Ut at metus aliquet, egestas urna eu, congue leo.</div><div class=col-md-6><img class='img-fluid center-img mb-2' src=https://via.placeholder.com/600></div></div>" )
});


// Add two equal columns with an image on the left and text on the right
$( "#2-column-image-text" ).click(function() {
  $( "#content-section" ).append( "<div class=row><div class=col-md-6><img class='img-fluid center-img mb-2' src=https://via.placeholder.com/600></div><div class=col-md-6><h4 contenteditable='true'>Heading</h4><p contenteditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis arcu. Nam iaculis nulla fermentum orci sagittis, vitae sollicitudin erat iaculis. Sed vestibulum fringilla suscipit. Nam quis feugiat dui. Nam id elit sit amet ex sodales tristique quis eget magna. Ut at metus aliquet, egestas urna eu, congue leo.</div></div>" )
});

// Add three qual width columns with an image heading and text
$( "#3-column-image-text" ).click(function() {
  $( "#content-section").append("<div class='row'><div class='col-md-4'><img class='img-fluid center-img mb-2' src=https://via.placeholder.com/600><h4 contenteditable='true'>Heading</h4><p contenteditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis arcu. Nam iaculis nulla fermentum orci sagittis, vitae sollicitudin erat iaculis. Sed vestibulum fringilla suscipit. Nam quis feugiat dui. Nam id elit sit amet ex sodales tristique quis eget magna. Ut at metus aliquet, egestas urna eu, congue leo.</p></div><div class='col-md-4'><img class='img-fluid center-img mb-2' src=https://via.placeholder.com/600><h4 contenteditable='true'>Heading</h4><p contenteditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis arcu. Nam iaculis nulla fermentum orci sagittis, vitae sollicitudin erat iaculis. Sed vestibulum fringilla suscipit. Nam quis feugiat dui. Nam id elit sit amet ex sodales tristique quis eget magna. Ut at metus aliquet, egestas urna eu, congue leo.</p></div><div class='col-md-4'><img class='img-fluid center-img mb-2' src=https://via.placeholder.com/600><h4 contenteditable='true'>Heading</h4><p contenteditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget iaculis arcu. Nam iaculis nulla fermentum orci sagittis, vitae sollicitudin erat iaculis. Sed vestibulum fringilla suscipit. Nam quis feugiat dui. Nam id elit sit amet ex sodales tristique quis eget magna. Ut at metus aliquet, egestas urna eu, congue leo.</p></div></div>")
});

// Strip html from pasted content
$('#content-section').on('blur', '[contenteditable]', function()  {
    $(this).html($(this).text());
});

// Change the source of an image on click
$("#content-section").on("click",".img-fluid", function(){
  $("#imgSource").modal("show");
  image = this;
  $("#submit-image").click(function() {
    $(image).attr('src', $('#image-source').val());
    $("#imgSource").modal("hide");
    $('#image-source').val('');
    image.val('');
  });
});

// Copy HTML to clipboard
$( "#get-code" ).click(function() {
  var htmlString=$("#content-section").html();
  htmlString = htmlString.replace(/contenteditable="true"/g,'');
  var dummy = $('<input>').val(htmlString).appendTo('body').select();
  document.execCommand('copy');
});

// Reload page to reset
$( "#clear" ).click(function() {
  $( "#content-section" ).empty();
});

});
