
this.addEventListener('install', function (e) {
	var myCache = new Cache(
		"/index.html",
		"css/styles.css",
		"main.js"
	);

	e.waitUntil(myCache.ready());

	console.log(myCache);

	caches.set('shell-v1', myCache);



});

this.addEventListener('fetch', function (e) {
	e.respondWith(caches.match(e.request));

	console.log(e);
	console.log(e.request);

});
