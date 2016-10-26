(function($){
  $(function(){
	        //$('.carousel.carousel-slider').carousel({full_width: true, indicators: true});
		
		$('.carousel').carousel({padding:200});
		$('.parallax').parallax();
		$(".dropdown-button").dropdown();
		$('.slider').slider({full_width: false, height:460});
    	$('.button-collapse').sideNav();

		 $('.btn_SY201516').click(function(){
		 	$('.tbl_SY201516').show();
		 	$('.tbl_SY201415').hide();
		 	$('.tbl_SY201314').hide();
 		
		 });
		 
		 $('.btn_SY201516').dblclick(function(){
		 	 	$('.tbl_SY201516').hide();	
		 });
 
		 $('.button_SY201415').click(function(){
		 	 	$('.tbl_SY201415').show();	
		 	 	$('.tbl_SY201516').hide();
		 	 	$('.tbl_SY201314').hide();
		 	 	
		 });
			
		 $('.button_SY201415').dblclick(function(){
		 	 	$('.tbl_SY201415').hide();	
		 });
		 
		 $('.button_SY201314').click(function(){
		 	 	$('.tbl_SY201314').show();
		 	 	$('.tbl_SY201415').hide();
		 	 	$('.tbl_SY201516').hide();
		 });
		 
		 $('.button_SY201314').dblclick(function(){
		 	 	$('.tbl_SY201314').hide();	
		 });






  }); // end of document ready
})(jQuery); // end of jQuery name space