/* eslint-disable no-restricted-globals */ 


const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
    "/",
    "styles/main.css",
    "script/main.js"
]

self.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log("Opened Cache")
            cache.addAll(urlsToCache);
        })
    )
})

self.addEventListener("activate", (event)=>{
    const cacheWhiteList = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames)=>{
            return Promise.all(
                cacheNames.map((cacheName)=>{
                    if(!cacheWhiteList.includes(cacheNames))
                        return caches.delete(cacheName)
                })
            )
        })
    )
})

self.addEventListener("fetch", (event)=>{
    //Bypass the cache for file uploads
    // console.log(444, event.request.url)
    // if(event.request.method ==="POST" && event.request.url.includes("/upload")){
    //     return; // Let it go to the network directly
    // }

    // event.respondWith(
    //     caches.match(event.request)
    //     .then((response)=>{
    //        // Cache hit - return response
    //      if (response) {
    //          return response;
    //          }
    //         return fetch(event.request)
    //     })
    // )
    const { request } = event;
    console.log(111, event.request.tag)
    console.log(555, request)
    if(request.method === "POST" && request.url.includes("/upload")){
        event.respondWith(handleUpload(request))
    }
    else{
        event.respondWith(fetch(request)) //default fetch
    }
})

async function handleUpload(request){
      // Example: You could handle the file upload by intercepting the request
      const formData = await request.formData();
      const file = formData.get("file");

       // Process the file (e.g., chunk it, store locally, etc.)
    console.log("Handling file upload:", file);

    return new Response("File Uploaded Successfully", { status: 200})
}

// In the service worker:
self.addEventListener("sync", (event) => {
    if (event.tag === "upload-file") {
        event.waitUntil(uploadFile());
    }
});

async function uploadFile() {
    const file = await getPendingFile();
    const formData = new FormData();
    formData.append("file", file);

    // Send the file when the device is back online
    await fetch("/upload", {
        method: "POST",
        body: formData,
    });
}

async function getPendingFile(){
    //get from request and saves
}