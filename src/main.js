//import SW from "./serviceworker.js"
//import SW1 from "../service-worker.js"
//import SW2 from "../serviceworker.js"

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("../service-worker.js")
            .then((registration) => {
                console.log("Service Worker registered with scope:", registration.scope);
            })
            .catch((error) => {
                console.error("Service Worker registration failed:", error);
            });
    });
}


if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready.then((registration) => {
        registration.sync.register("upload-file")
            .then(() => {
                console.log("Upload sync triggered.");
            })
            .catch((error) => {
                console.error("Sync registration failed", error);
            });
    });
}
