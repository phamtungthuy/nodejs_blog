//set up cache name and files to add to it
const CACHE_NAME = 'TeaHouse_Cache';
const CACHE_URLS = [
    '/views/index.hbs',
    '/scss/style.css',
    '/scss/style2.css',
    '/main.js',
    '/navcontrols.js'
];


//set up cache and files to add to it
//...

//add all URLs to cache when installed
self.addEventListener("install", function(event) {
    console.log("Service worker installed");
    event.waitUntil(
        //create and open cache
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log("Cache opened");
            //add all URLs to cache
            return cache.addAll(CACHE_URLS);
        })
    );
});