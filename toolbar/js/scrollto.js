define(['jquery'], function ($){
	function ScrollTo(opts) {
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
		this.$el = $('html, body');
	};

	ScrollTo.prototype.move = function (){
		var opts = this.opts,
			dest = opts.dest;

		// 在未到达目的地且没有运动时点击返回顶部按钮才有效
		if($(window).scrollTop() != dest && !this.$el.is(':animated')){
			this.$el.animate({
				scrollTop: dest
			}, opts.speed);
		}
	};

	ScrollTo.prototype.go = function (){
		var dest = this.opts.dest;

		if($(window).scrollTop() != dest) {
			this.$el.scrollTop(dest);
		}		
	};

	ScrollTo.DEFAULTS = {
		dest: 0,
		speed: 800
	};
	
	return {
		ScrollTo: ScrollTo
	};
});