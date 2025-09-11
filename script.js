// Modern jQuery animations and interactions for Nanny-AI website
$(document).ready(function() {
    
    // Mobile menu toggle functionality
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
        
        // Add ARIA accessibility
        const isOpen = $('.nav-menu').hasClass('active');
        $(this).attr('aria-expanded', isOpen);
        $('.nav-menu').attr('aria-hidden', !isOpen);
        
        // Prevent body scroll when menu is open
        if (isOpen) {
            $('body').addClass('menu-open');
        } else {
            $('body').removeClass('menu-open');
        }
    });

    // Close mobile menu when link is clicked
    $('.nav-link').click(function() {
        $('.hamburger').removeClass('active').attr('aria-expanded', 'false');
        $('.nav-menu').removeClass('active').attr('aria-hidden', 'true');
        $('body').removeClass('menu-open');
    });

    // Close mobile menu when clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.nav-menu, .hamburger').length) {
            $('.hamburger').removeClass('active').attr('aria-expanded', 'false');
            $('.nav-menu').removeClass('active').attr('aria-hidden', 'true');
            $('body').removeClass('menu-open');
        }
    });

    // Close mobile menu on Escape key
    $(document).keyup(function(e) {
        if (e.keyCode === 27) { // ESC key
            $('.hamburger').removeClass('active').attr('aria-expanded', 'false');
            $('.nav-menu').removeClass('active').attr('aria-hidden', 'true');
            $('body').removeClass('menu-open');
        }
    });

    // Scroll-triggered animations
    function animateOnScroll() {
        $('.fade-in, .slide-up').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            // Trigger animation when element is 20% visible
            if (elementBottom > viewportTop + ($(window).height() * 0.2) && 
                elementTop < viewportBottom - ($(window).height() * 0.2)) {
                $(this).addClass('visible');
            }
        });
    }

    // Initial animation check and scroll listener
    animateOnScroll();
    $(window).scroll(function() {
        animateOnScroll();
        
        // Header background change on scroll
        if ($(this).scrollTop() > 50) {
            $('header').addClass('scrolled').css({
                'background': 'rgba(255, 255, 255, 0.98)',
                'box-shadow': '0 2px 20px rgba(0, 0, 0, 0.1)'
            });
        } else {
            $('header').removeClass('scrolled').css({
                'background': 'rgba(255, 255, 255, 0.95)',
                'box-shadow': 'none'
            });
        }
    });

    // Smooth hover effects for interactive elements
    $('.interactive, .card, .tile').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );

    // Button click effects with smooth transitions
    $('.btn').click(function(e) {
        const $btn = $(this);
        
        // Add loading state
        $btn.addClass('loading');
        
        // Create ripple effect
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        $btn.append('<span class="ripple" style="left:' + x + 'px;top:' + y + 'px;"></span>');
        
        setTimeout(() => {
            $btn.find('.ripple').remove();
            $btn.removeClass('loading');
            
            // Navigate if it's a link (not prevented)
            if ($btn.attr('href') && !e.isDefaultPrevented()) {
                window.location.href = $btn.attr('href');
            }
        }, 300);
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Card and tile animation on hover
    $('.card, .tile').on('mouseenter', function() {
        $(this).css('transform', 'translateY(-8px)');
    }).on('mouseleave', function() {
        $(this).css('transform', 'translateY(0)');
    });

    // Form enhancements
    $('.form-control').focus(function() {
        $(this).parent().addClass('focused');
    }).blur(function() {
        $(this).parent().removeClass('focused');
        if ($(this).val()) {
            $(this).parent().addClass('filled');
        } else {
            $(this).parent().removeClass('filled');
        }
    });

    // Initialize filled state for pre-filled inputs
    $('.form-control').each(function() {
        if ($(this).val()) {
            $(this).parent().addClass('filled');
        }
    });

    // Lazy loading for images (if any)
    $('img[data-src]').each(function() {
        const $img = $(this);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    $img.attr('src', $img.data('src')).removeAttr('data-src');
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(this);
    });

    // Parallax effect for hero sections (subtle)
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        $('.hero').css('transform', 'translateY(' + (scrolled * 0.1) + 'px)');
    });

    // Loading state management
    $(window).on('beforeunload', function() {
        $('body').addClass('loading');
    });

    // Remove loading states on page load
    $(window).on('load', function() {
        $('body').removeClass('loading');
        $('.fade-in, .slide-up').addClass('loaded');
    });

    // Console log for debugging (can be removed in production)
    console.log('Nanny-AI modern website interactions loaded successfully');
});

// Additional CSS for JavaScript functionality (can be moved to CSS file)
const additionalCSS = `
    .menu-open {
        overflow: hidden;
    }
    
    .btn.loading {
        opacity: 0.8;
        pointer-events: none;
    }
    
    .btn .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .card.hovered, .tile.hovered {
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }
    
    .form-group.focused .form-control {
        border-color: #3182ce !important;
        box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1) !important;
    }
    
    .header.scrolled {
        backdrop-filter: blur(20px) !important;
    }
`;

// Inject additional CSS
$('<style>').text(additionalCSS).appendTo('head');