$(document).ready(function() {
    setTimeout(function() {
        $('#loadingOverlay').addClass('hidden');
        $('#cvContainer').addClass('show');
        
        setTimeout(function() {
            $('.skill-progress.full').animate({'width': '100%'}, 800);
            $('.skill-progress.partial').animate({'width': '60%'}, 800);
            $('.contact-form-section').fadeIn(600);
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

    emailjs.init('jchdXQD61mnmMdVev');
    
    $('#contact-form').on('submit', async function(e) {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(
                'service_r9unl2i',
                'template_la7wijt', 
                this
            );
            alert('Email envoyé avec succès !');
            this.reset();

        } catch (error) {
            console.error('Erreur détaillée:', error);
            alert('Échec de l\'envoi de l\'email. Vérifiez votre configuration EmailJS.');
        } 
    });
});