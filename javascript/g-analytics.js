let trackingID = '';
const hostname = window.location.hostname;

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    trackingID = 'G-LOCALHOST'; // Tracking ID for local development
} else if (hostname === 'dev.misfitmuttsolutions.com' || hostname === 'www.dev.misfitmuttsolutions.com') {
    trackingID = 'G-50KQF1RE4B'; // Development GA Tracking ID
} else if (hostname === 'misfitmuttsolutions.com' || hostname === 'www.misfitmuttsolutions.com') {
    trackingID = 'G-QXNSW2DGJ8'; // Production GA Tracking ID
}

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', trackingID);
