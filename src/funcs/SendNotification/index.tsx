export function checkPermission(): boolean {
    if (!("Notification" in window)) {
        return false;
    } else if (Notification.permission === 'granted') {
        return true;
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then();
        return true;
    } else {
        return false;
    }
}