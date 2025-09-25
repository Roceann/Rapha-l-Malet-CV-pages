$(document).ready(function() {
    setTimeout(function() {
        $('#loadingOverlay').addClass('hidden');
        $('#cvContainer').addClass('show');
        
        setTimeout(function() {
            $('.skill-progress-full').animate({'width': '100%'}, 800);
            $('.skill-progress-60').animate({'width': '60%'}, 800);
        }, 300);
        
    }, 2000);
    

    
    $('.photo-placeholder').click(function() {
        $(this).addClass('photo-pulse');
        setTimeout(function() {
            $('.photo-placeholder').removeClass('photo-pulse');
        }, 600);
    });
    
    $('.contact-item a').hover(
        function() {
            $(this).animate({
                'color': '#16a085'
            }, 150);
        },
        function() {
            $(this).animate({
                'color': '#000000'
            }, 150);
        }
    );
    
    $(window).scroll(function() {
        $('.section').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).fadeIn(300);
            }
        });
    });
});