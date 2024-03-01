document.addEventListener("DOMContentLoaded", function() {
    // Get the current year and set it in the footer's first paragraph
    var currentYear = new Date().getFullYear();
    var copyrightYearParagraph = document.querySelector('footer p:first-of-type');
    copyrightYearParagraph.textContent = "\u00A9 " + currentYear + " Ashley Egan - WDD 230";

    // Get the last modified date of the document and set it in the second paragraph
    var lastModifiedParagraph = document.getElementById('lastModified');
    lastModifiedParagraph.textContent += new Date(document.lastModified).toLocaleString();
});
