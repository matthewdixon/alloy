(function(){

    // how to bring in the options
    var Track = function(element, options) {
        this.element = element;
        this.$element = $(element);
        this.options = options;
        this.metadata = this.$element.data('options');
    };

    Track.prototype =  {
        filters: ['localhost', '128.0.0.1', 'e78.co.uk', 'gotdns.com'],

    	_init: function() {
            this.config = $.extend({}, this.defaults, this.options, this.metadata);

    	    this.event();
            console.log("E78.Tracking Started");
    	},

        event: function() {

        }

    };

    Track.defaults = Tracking.prototype.defaults;

    $.fn.track = function(options) {
        return this.each(function() {
            new Track(this, options)._init(this);
        });
    };

    // Autostart Plugin
    $(".trackme").track();
    console.log("E78.Tracking Loaded");
})();