self.addEventListener('install',e=>{
 e.waitUntil(
  caches.open('cafemart-pro-v8').then(cache=>{
   return cache.addAll(['./','./index.html','./app.html','./icon-192.png','./icon-512.png']);
  })
 );
});