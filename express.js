/* vim: set tabstop=2 shiftwidth=2 noexpandtab: */

var library = {
	$EXPRESS: {
		contexts: []
	},
	express_create_server: function() {
		var i = EXPRESS.contexts.length;
		var e = require('express')();
		EXPRESS.contexts[i] = e;
		return i;
	},
	express_close: function(context) {
		context = EXPRESS.contexts[context];
		//context.close();
		delete EXPRESS.contexts[context];
	},
	express_listen: function(context, port) {
		context = EXPRESS.contexts[context];
		context.listen(port);
	},
	express_post: function(context, route, callback) {
		var cb = function (req, res) {
			Runtime.dynCall('vii', callback, [1, 2]);
		};
		context = EXPRESS.contexts[context];
		context.post(route, cb);
	},
	exit: function(status) {
		process.exit(status);
	}
};

autoAddDeps(library, '$EXPRESS');
mergeInto(LibraryManager.library, library);

