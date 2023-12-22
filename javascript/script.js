document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to the contact section when the "Contact" link is clicked
    var scrollLinks = document.querySelectorAll('.scroll-to-contact');

    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
