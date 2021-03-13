$(document).ready(function(){
    $('.hamburger').click(function(){
        console.log('hi');
        $('nav ul').toggleClass('open');
        $('section').toggleClass('hide');
        $('.line2').toggle('fadeout');
    })
})