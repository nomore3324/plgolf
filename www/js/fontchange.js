
(function($) {

    $.fn.fontChange = function(min, max, mid) {

        var $this = this;

        $(window).resize(function() {

            var size = window.innerWidth / mid;
           
            if (size < min) size = min;
            if (size > max) size = max;

            $this.css('font-size', size + 'px');

        }).trigger('resize');
    };

})(jQuery);

$(function(){
	$('body').fontChange(14,16,80);
	 $('.btn').fontChange(14,16,80);
	 
})	