$(document).ready(function () {
    $('.menu-button').click(function () {
        $('.menu-pages').slideToggle('slow', function () {
           $('.menu-button').toggleClass('open');
        });
    })
    /*Not best solution but it works (SORRY AXEL!!!)*/
    $('#downbutton-1').click(function () {
        $('#cont-1').slideToggle("slow", function () {
        });
    });
    $('#downbutton-2').click(function () {
        $('#cont-2').slideToggle("slow", function () {
        });
    });
    $('#downbutton-3').click(function () {
        $('#cont-3').slideToggle("slow", function () {
        });
    });
    $.axel = function(fn, code) { /* please dont make me do this again*/
        code = code || [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; 
        var i = 0;
        $(document).keydown(function(e) {
            var char = typeof code === 'string' ? String.fromCharCode(e.which).toLowerCase() : e.which;
            i = char === code[i] ? i + 1 : 0;
            if (i === code.length) {
                fn();
                i = 0;
                }
            });
        };
            $.axel(function() {
            window.location.replace("https://www.youtube.com/watch?v=MPY_EuvimH0&feature=youtu.be");
    });
});