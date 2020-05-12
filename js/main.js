// connect add skill button 
// with an item typed in the field
// click of add skill button will create a new <div> via DOM to house the skill
// with a click of the "remove" button the item will go away




$('form').submit(function(evt) {
    var newLi = $('input').val();
    var newRow = (`<li><button class="remove">X</button>${newLi}</li>`);
    $('#list').append(newRow);
    evt.preventDefault();
 
    $('.remove').on('click', function(){
        $(this).parent().remove();
      
    });
});

