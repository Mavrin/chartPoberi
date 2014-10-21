(function () {
    /** @class sizePoint
     * @extends Plugin */
    var Legend = {
        /**
         * @param {RenderContext} context
         * @param {ChartTools} tools
         */
		init:function(scale){
			this._super();
		},
        render: function (context, tools) {
			var points = context.selectAll('.dot');
			points.each(function() {
				var r = this.getAttribute('r');
				this.setAttribute('r',r*3);
			})
        }
    };

    tau.plugins.add('sizePoint', Legend);
})();
