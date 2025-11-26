// Blog Posts Data
// This file contains the blog posts data structure
// You can replace this with an API call or fetch from a CMS

const blogPosts = [
    {
        id: 7,
        title: "How to Plan Your Auckland Kitchen Renovation on a Budget",
        excerpt: "Transform your kitchen without breaking the bank. Expert tips on where to save and where to spend for the best results. Learn from 20+ years of experience in Auckland kitchen renovations.",
        date: "2025-11-27",
        category: "Budget Planning",
        image: "assets/portfolio/new/DSC09446-HDR-900.webp",
        url: "kitchen-renovation-budget-auckland.html"
    }
];

// If you want to load from an API instead, you can replace the above with:
// async function loadBlogPosts() {
//     try {
//         const response = await fetch('/api/blog-posts');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error loading blog posts:', error);
//         return [];
//     }
// }


