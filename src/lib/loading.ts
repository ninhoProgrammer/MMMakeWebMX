const READY = 'loading:ready'
const DONE = 'loading:done'

let ready = false
let done = false

function subscribe(event: string, already: boolean, callback: () => void) {
    if (already) {
        callback()
        return
    }
    
    window.addEventListener(event, callback, { once: true });
} 

export function markLoadingReady() {
    if (ready) return;

    ready = true;
    document.dispatchEvent(new CustomEvent(READY));
}

export function markLoadingDone() {
    if (done) return;
    done = true;
    document.dispatchEvent(new CustomEvent(DONE));
}

export function onLoadingReady(callback: () => void) {
    subscribe(READY, ready, callback);
}

export function onLoadingDone(callback: () => void) {
    subscribe(DONE, done, callback);
}