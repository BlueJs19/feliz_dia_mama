$(document).ready(function () {

    $('.envlope-wrapper').click(function () {

        setTimeout(function () {

            $('.envlope-wrapper, .reset').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
            $('.envlope-wrapper, .reset').fadeOut(800, function () {

                $('.envlope-wrapper .heart, .envlope-wrapper .text, .envlope-wrapper .front').hide();
                $('.reset').hide();

                
                $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
                $('#card').animate({ 'opacity': 1 }, {
                    duration: 1000, step: function (now, fx) {
                        var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                        $(this).css('transform', 'scale(' + scale + ')');
                    }
                }); 
            });
        }, 7000); 
    });
});
