
Custom = {
    callback1: function(data) {
	//alert( "result: " + data["result"] );
	//$("h1")[0].innerHTML = "result: " + data['result'];
	var h1 = $("h1")[0];
	h1.innerHTML = Mustache.render( h1.innerHTML, data );
    },

    callAjax1: function() {
	//alert( "yeah!" );
	$.getJSON( "/ajax1", this.callback1 );
    }
};
