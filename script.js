document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Toggle icon between bars and times
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close nav when clicking outside on mobile
        document.addEventListener('click', (event) => {
            if (!mainNav.contains(event.target) && !menuToggle.contains(event.target) && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    }

    // Product Detail Page Image Gallery
    const mainProductImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail-images .thumbnail');

    if (mainProductImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));

                // Add active class to the clicked thumbnail
                thumbnail.classList.add('active');

                // Change the main image source
                mainProductImage.src = thumbnail.dataset.full;
                mainProductImage.alt = thumbnail.alt.replace('thumbnail', 'main view'); // Update alt text
            });
        });
    }

    // Simple Add to Cart confirmation (for demonstration)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Item added to cart!');
                // In a real application, you would update a cart count,
                // perhaps show a mini-cart, or redirect.
                const cartCountElement = document.querySelector('.cart-count');
                if (cartCountElement) {
                    let currentCount = parseInt(cartCountElement.textContent);
                    cartCountElement.textContent = currentCount + 1;
                }
            });
        });
    }

    // Placeholder for filtering/sorting logic on PLP
    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', (event) => {
            console.log('Filtering by category:', event.target.value);
            // Implement actual filtering logic here (e.g., AJAX call or DOM manipulation)
        });
    }

    if (sortBy) {
        sortBy.addEventListener('change', (event) => {
            console.log('Sorting by:', event.target.value);
            // Implement actual sorting logic here
        });
    }

    // Set initial active state for nav links based on current page
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        const linkPath = link.href.split('/').pop();
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});