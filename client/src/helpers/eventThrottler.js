//limits how many times an event is called for performance reasons
function throttler(delay, funct) {
    let lastCall = 0;
    return function (...args) {
        const now = (new Date).getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return funct(...args);
    }
}

export default throttler;