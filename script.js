document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-mobile-nav-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNav.classList.add('is-open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        });
    }

    if (closeBtn && mobileNav) {
        closeBtn.addEventListener('click', () => {
            mobileNav.classList.remove('is-open');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }

    // Optional: Close mobile nav when a link is clicked
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    });

    // PDP image gallery functionality
    const mainProductImage = document.getElementById('main-product-image');
    const thumbnailImages = document.querySelectorAll('.thumbnail-images img');

    if (mainProductImage && thumbnailImages.length > 0) {
        thumbnailImages.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Update main image src
                mainProductImage.src = thumbnail.src;
                mainProductImage.alt = thumbnail.alt;

                // Remove 'active' class from all thumbnails
                thumbnailImages.forEach(thumb => thumb.classList.remove('active'));
                // Add 'active' class to the clicked thumbnail
                thumbnail.classList.add('active');
            });
        });

        // Set the first thumbnail as active by default
        thumbnailImages[0].classList.add('active');
    }

    // Quantity selector functionality
    const quantityInput = document.getElementById('quantity-input');
    const decreaseQuantityBtn = document.getElementById('decrease-quantity');
    const increaseQuantityBtn = document.getElementById('increase-quantity');

    if (quantityInput && decreaseQuantityBtn && increaseQuantityBtn) {
        decreaseQuantityBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        increaseQuantityBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });

        // Ensure quantity input is always a number and at least 1
        quantityInput.addEventListener('change', () => {
            let currentValue = parseInt(quantityInput.value);
            if (isNaN(currentValue) || currentValue < 1) {
                quantityInput.value = 1;
            }
        });
    }
});