if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("./serviceworker.js", {
        scope: '.' // <--- THIS BIT IS REQUIRED
    });
}

// This code executes in its own worker or thread
self.addEventListener("install", event => {
    console.log("Service worker installed");
 });
 self.addEventListener("activate", event => {
    console.log("Service worker activated");
 });

self.addEventListener("fetch", (event)=>{
    return
})