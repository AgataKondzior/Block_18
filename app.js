$(document).ready(function(){
    
    $('#filters').on('click', '.on-sale', function(event) {      
        $('[data-category = "on-sale"]').toggleClass('highlight-sale');
    });

    $('#filters').on('click', '.featured', function() {
        $('[data-category= "featured"]').toggleClass('highlight-featured');
      
    });
    

    $('button').on('click', function() {
        var discount =$(this).parent('[data-category]').data('discount');
        var message = $('<div id="message">Call 111-222-333 for a $' + discount + ' discount</div>');
       
         $(this).parent('[data-category]').append(message);
         $(this).closest('.book').remove();
    });  
    
});
      


    
      




    

 
 


