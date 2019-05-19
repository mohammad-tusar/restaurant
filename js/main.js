$(document).ready(function(){

	// Slick navmenu
	$('#nav').slicknav();

	// jQueryUI
	$('input.datepicker').Zebra_DatePicker({
		direction: 1    // boolean true would've made the date picker future only but starting from today, rather than tomorrow
	});

    var $zdp = $('#element').data('Zebra_DatePicker');
    var $zdp2 = $('#element2').data('Zebra_DatePicker');

    $('body').children('.Zebra_DatePicker').first().addClass('customdate');
    $('body').children('.Zebra_DatePicker').eq(1).addClass('customdate2');

    $('.welcome-area h2').click(function(){
       $('.welcome-area p').toggleClass('hideshow');
    });


});

