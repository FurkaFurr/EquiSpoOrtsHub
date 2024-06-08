$(document).ready(function() {
    $(window).on('wheel', function(e) {
        var delta = e.originalEvent.deltaY;
        var scrollPosition = $(window).scrollTop();
        $('.background-image').css('transform', 'translateY(' + (scrollPosition + delta) + 'px)');
    });
});