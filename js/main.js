(function () {

	var test;
	// force https:
	if(!location.port || location.port == '80' && location.protocol != 'https:') {
		location.protocol = 'https:';
		
	}

	if (serviceWorker in navigator) {
		test = navigator.serviceWorker.register('sw.js', {
			scope: '/*'
		});
	}

})();
