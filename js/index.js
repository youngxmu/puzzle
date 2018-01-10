(function(P){
	var _this = null;
	_this = P.index = {
		init : function(){
			_this.initData();
			_this.initEvent();
			_this.loadData();
		},
		initData : function(){
		 var canvas = document.getElementById('rect');
		 if (canvas.getContext){
		 var ctx = canvas.getContext('2d');

		    ctx.beginPath();
		    ctx.moveTo(75,50);
		    ctx.lineTo(100,75);
		    ctx.lineTo(100,25);
		    ctx.moveTo(0,0);
		    ctx.lineTo(100,0);
		    ctx.lineTo(100,100);
		    ctx.lineTo(200,0);
		    ctx.fill();
		 }
		},
		initEvent : function(){
			// $('#wrapper').on('click', '.vote-desc-more', _this.more2);
		},
		showMsg : function(msg){
		},
		loadData : function(){
			
		}
	};
}(moka));