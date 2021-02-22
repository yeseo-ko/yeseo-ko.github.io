$(document).ready(function () {

    $('.gnb li a' , '.gototop').click(function(event)
    {
        $.scrollTo(this.hash || 0, 800); 
        event.preventDefault();
    }
    );

});