// common-head.js
fetch('common-head.html')
    .then(response => response.text())
    .then(html => {
        // Inject the common head content into the head of the document
        document.head.innerHTML += html;
    });