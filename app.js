$(document).ready(function(){
    
    $('#filters').on('click', '.on-sale', function() {
    $('.tour').filter('.on-sale').addClass('highlight-sale');
  });

  $('#filters').on('click', '.featured', function() {
    $('.tour').filter('.featured').addClass('highlight-featured');
      
  });
    

    $('button').on('click', function() {
        var discount = $(this).closest('.tour').data('discount');
        var message = $('<div id="message">Call 111-222-333 for a $' + discount + ' discount</div>');
    $(this).closest('.tour').append(message);
    $(this).closest('.book').remove();
      
  });  
    
})
      




    

 
 


