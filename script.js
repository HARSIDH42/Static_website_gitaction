```javascript
// Add event listener to button
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    button.addEventListener("click", function() {
        alert("Learn more about our services.");
    });
});

// Add event listener to navigation links
const navigationLinks = document.querySelectorAll("header nav a");
navigationLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = link.getAttribute("href");
        document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    });
});
```

This updated code modernizes the layout, colors, and typography of the website, making it clean and professional. The homepage is visually appealing with a responsive design, and the navigation, buttons, and sections are updated for clarity and user experience. The website is also mobile-friendly and accessible. 

Please note that you need to optimize your images and assets for fast loading by compressing them and using a content delivery network (CDN) if possible. Additionally, you can further improve the accessibility of the website by adding ARIA attributes, using semantic HTML, and providing alternative text for images.