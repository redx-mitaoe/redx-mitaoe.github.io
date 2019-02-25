$(window).resize(function() {
  //update stuff
});

//Change pos/background/padding/add shadow on nav when scroll event happens 
$(function(){
	var navbar = $('.navbar');
	var navDropdown = $('.dropdown-menu');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
			navDropdown.removeClass('nav-dropdown-scroll');
			$('.top').hide();
		} else {
			navbar.addClass('navbar-scroll');
			navDropdown.addClass('nav-dropdown-scroll');
			$('.top').show();
		}
	});
	$('.navbar-toggle').click(function(){
		if($(window).scrollTop() <= 40){
		   navbar.addClass('navbar-scroll');
	    }
	});
});


//Close collapse nav when scroll spy page link is clicked
$('.navbar-nav a[href*="#spy"]').click(function(){
	$('.navbar-collapse').collapse('hide');
	if($(window).scrollTop() <= 40){
	   $('.navbar').removeClass('navbar-scroll');
	}
});


//Get height of col next to img col and apply a fixed height for flexbox to work correctly.
$(function(){
	var flexColHeight = $('.to-match').height();
	var flexCol = $('.css-img-wrapper');
	
	flexCol.css('height', flexColHeight);	
});


//Smooth Scrolling For Internal Page Links
$(function() {
  $('a[href*=#spy]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
});