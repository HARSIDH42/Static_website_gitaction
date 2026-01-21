/**
 * SENIOR FRONTEND ENGINEER NOTE: 
 * We use a single-source-of-truth 'state' object for the product list 
 * and handle UI rendering through logic to mimic a modern app.
 */

const PRODUCTS = [
    { id: 1, name: "Organic Cotton Tee", price: 45.00, category: "apparel", tag: "New", desc: "A perfectly weighted t-shirt made from 100% organic cotton." },
    { id: 2, name: "Ceramic Serving Bowl", price: 62.00, category: "home", tag: "Featured", desc: "Hand-thrown ceramic bowl with a matte stone finish." },
    { id: 3, name: "Italian Leather Tote", price: 210.00, category: "accessories", tag: null, desc: "Vegetable-tanned leather that age beautifully over time." },
    { id: 4, name: "Minimalist Wall Clock", price: 85.00, category: "home", tag: null, desc: "Silent movement clock with a brushed aluminum frame." },
    { id: 5, name: "Merino Wool Beanie", price: 38.00, category: "accessories", tag: "New", desc: "Soft, breathable warmth for colder transitions." },
    { id: 6, name: "Relaxed Linen Shirt", price: 95.00, category: "apparel", tag: null, desc: "Breathable linen woven in Belgium. Relaxed fit." },
];

let cart = JSON.parse(localStorage.getItem('essentials_cart')) || [];
let currentFilter = 'all';
let searchQuery = '';
let currentSort = 'featured';

//