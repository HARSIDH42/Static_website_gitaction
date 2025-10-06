document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }

    // Product Detail Page (PDP) Image Gallery
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail-gallery img');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Update main image source
                mainImage.src = thumbnail.src;
                mainImage.alt = thumbnail.alt;

                // Update active state for thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        });
        // Set initial active state for the first thumbnail
        if (thumbnails[0]) {
            thumbnails[0].classList.add('active');
        }
    }

    // PLP Filter Toggle (for mobile)
    const filterToggle = document.querySelector('.filter-toggle');
    const sidebarFilters = document.querySelector('.sidebar-filters');

    if (filterToggle && sidebarFilters) {
        filterToggle.addEventListener('click', () => {
            sidebarFilters.classList.toggle('active');
            filterToggle.setAttribute('aria-expanded', sidebarFilters.classList.contains('active'));
        });
    }

    // Quantity Selector
    const quantityInput = document.getElementById('quantity');
    const minusBtn = document.getElementById('minus-btn');
    const plusBtn = document.getElementById('plus-btn');

    if (quantityInput && minusBtn && plusBtn) {
        minusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });

        // Ensure quantity is always at least 1 and a valid number
        quantityInput.addEventListener('change', () => {
            let currentValue = parseInt(quantityInput.value);
            if (isNaN(currentValue) || currentValue < 1) {
                quantityInput.value = 1;
            }
        });
    }
});