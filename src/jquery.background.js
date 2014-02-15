jQuery.fn.extend({
	setBackground: function(color) {
		this.each(function() {
			jQuery(this).css("background-color",color);
		});
	}
});
