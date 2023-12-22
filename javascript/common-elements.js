<!-- common-elements.js -->
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;
        });

    fetch('nav.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('nav').innerHTML = html;
        });

    fetch('common-head.html')
        .then(response => response.text())
        .then(html => {
            // Inject the common head content into the head of the document
            document.head.innerHTML += html;
    });
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('footer').innerHTML = html;
        });
    fetch('common-banner.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.common-banner').innerHTML = html;
        });
});
