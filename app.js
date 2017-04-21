$(document).ready(function(){
    
    $('#filters').on('click', '.on-sale', function() {
    $('[data-discount]').toggleClass('highlight-sale');
  });

  $('#filters').on('click', '.featured', function() {
     $('[data-discount]').toggleClass('highlight-featured');
      
  });
    

    $('button').on('click', function() {
        var discount = $(this).closest('.tour').data('discount');
        var message = $('<div id="message">Call 111-222-333 for a $' + discount + ' discount</div>');
    $(this).closest('.tour').append(message);
    $(this).closest('.book').remove();
      
  });  
    
})
      




    

 
 


