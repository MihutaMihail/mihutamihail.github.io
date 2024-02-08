// Smooth scrolling and offset for navbar links
$(document).ready(function() {
    // Get all anchor <a> elements + add click event handler
    $("a").on('click', function(event) {
        /*
        * Check if <a> element has a 'hash' (URL fragment identifier)
        * The 'hash' contains the part of the URL that follows the '#' symbol
        */
        if (this.hash !== "") {
            event.preventDefault();
            
            // Animate scrolling animation
            $('html, body').animate({
                // Set 'scrollTop' property to desired value
                scrollTop: $(this.hash).offset().top - 50
            }, 200);
        }
    });
});