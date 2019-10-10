//ПЛАВНОЕ ПЕРЕМЕЩЕНИЕ К ЯКОРЯМ

function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1000);
    return false;
}

//МОДАЛЬНОЕ ОКНО
//открыть по кнопке
$('.detail_1').click(function() {
    $('header, main, footer').css('filter', 'blur(5px)');
	$('.overlay-modal_1').fadeIn();
	//$('body').css('overflow', 'hidden');
});
$('.detail_2').click(function() {
    $('header, main, footer').css('filter', 'blur(5px)');
	$('.overlay-modal_2').fadeIn();
	//$('body').css('overflow', 'hidden');
});
$('.detail_3').click(function() {
    $('header, main, footer').css('filter', 'blur(5px)');
	$('.overlay-modal_3').fadeIn();
	//$('body').css('overflow', 'hidden');
});
$('.detail_4').click(function() {
    $('header, main, footer').css('filter', 'blur(5px)');
	$('.overlay-modal_4').fadeIn();
	//$('body').css('overflow', 'hidden');
});

//закрыть на ПОНЯТНО
$('.close-modal').click(function() {
	$('.overlay-modal').fadeOut();
	$('header, main, footer').css('filter', 'none');
	$('body').css('overflow', 'auto');
});

//закрыть по клику вне окна
$(document).mouseup(function(e) {
	var modal = $('.modal');
	if (e.target!=modal[0]&&modal.has(e.target).length === 0) {
		$('.overlay-modal').fadeOut();
		$('header, main, footer').css('filter', 'none');
		$('body').css('overflow', 'auto');
	}
});

//МИНИ-МЕНЮ
$(function(){
	$('.menu-btn').on('click', function(){
		$('.container-menu-mini').slideToggle();
		$('.menu-btn').toggleClass('menu-btn-active');
		$('html, body').toggleClass('scroll');
	});
});

$(function(){
	$('.container-menu-mini__link').on('click', function(){
		$('html, body').removeClass('scroll');
		$('.container-menu-mini').slideToggle();
});
});