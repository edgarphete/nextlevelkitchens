# How to Implement Splide.js AutoScroll Slider

## 📚 Table of Contents
1. [Overview](#overview)
2. [What You Need](#what-you-need)
3. [Step-by-Step Implementation](#step-by-step-implementation)
4. [Full Code Example](#full-code-example)
5. [Customization Options](#customization-options)
6. [Advanced Features](#advanced-features)
7. [Troubleshooting](#troubleshooting)

---

## Overview

**Splide.js** is a lightweight, flexible slider library. The **AutoScroll extension** adds continuous automatic scrolling with the ability for users to manually control the slider by dragging/swiping.

### ✨ Features
- ✅ Auto-scrolling carousel
- ✅ Drag & swipe control
- ✅ Pause on hover
- ✅ Fully responsive
- ✅ Lightweight (~30KB)
- ✅ No jQuery required
- ✅ Touch-friendly
- ✅ Accessibility support

### 🔗 Official Documentation
- Splide.js: https://splidejs.com/
- AutoScroll Extension: https://splidejs.com/extensions/auto-scroll/
- Intersection Extension: https://splidejs.com/extensions/intersection/

---

## What You Need

### CDN Links (Recommended for quick setup)

```html
<!-- Splide CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">

<!-- Splide JS Core -->
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>

<!-- Splide AutoScroll Extension -->
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"></script>
```

### NPM Installation (For build tools)

```bash
npm install @splidejs/splide
npm install @splidejs/splide-extension-auto-scroll
```

---

## Step-by-Step Implementation

### Step 1: Add CSS to `<head>`

Add the Splide CSS and your custom styles in the `<head>` section:

```html
<head>
    <!-- Other head content -->
    
    <!-- Splide CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
    
    <style>
        /* Container Styles */
        .testimonials-splide {
            background: #fff;
            padding: 4rem 0;
            overflow: hidden;
        }

        .testimonials-splide .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* Full Width Slider */
        .splide-full-width {
            width: 100vw;
            position: relative;
            margin-left: calc(-50vw + 50%);
        }

        /* Slide Padding */
        .splide__slide {
            padding: 0 1rem;
        }

        /* Card Styles */
        .testimonial-card-splide {
            background: #fff;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            border: 1px solid #f0f0f0;
            height: 100%;
            transition: all 0.3s ease;
        }

        .testimonial-card-splide:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        /* Drag Cursor */
        .splide__track {
            cursor: grab;
        }

        .splide__track:active {
            cursor: grabbing;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .testimonial-card-splide {
                padding: 1.5rem;
            }
        }
    </style>
</head>
```

---

### Step 2: Add HTML Structure

Add this HTML where you want the slider to appear:

```html
<section class="testimonials-splide">
    <div class="container">
        <!-- Header (Optional) -->
        <div class="splide-testimonials-header">
            <h2>Customer Testimonials</h2>
            <p>Auto-scrolling with manual control • Drag to explore</p>
        </div>
        
        <!-- Full Width Wrapper -->
        <div class="splide-full-width">
            <!-- Splide Container -->
            <div class="splide" id="testimonial-splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        
                        <!-- Slide 1 -->
                        <li class="splide__slide">
                            <div class="testimonial-card-splide">
                                <span class="testimonial-stars">★★★★★</span>
                                <p class="testimonial-text">"Amazing service and quality!"</p>
                                <div class="author-info">
                                    <h4 class="author-name">John Doe</h4>
                                    <p class="author-title">Happy Customer</p>
                                </div>
                            </div>
                        </li>

                        <!-- Slide 2 -->
                        <li class="splide__slide">
                            <div class="testimonial-card-splide">
                                <span class="testimonial-stars">★★★★★</span>
                                <p class="testimonial-text">"Highly recommend to everyone!"</p>
                                <div class="author-info">
                                    <h4 class="author-name">Jane Smith</h4>
                                    <p class="author-title">Satisfied Client</p>
                                </div>
                            </div>
                        </li>

                        <!-- Add more slides as needed -->
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

### Step 3: Add JavaScript Before `</body>`

Add these scripts at the end of your HTML, just before the closing `</body>` tag:

```html
    <!-- Splide Core JS -->
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
    
    <!-- Splide AutoScroll Extension -->
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"></script>
    
    <!-- Initialize Splide -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var splide = new Splide('#testimonial-splide', {
                type: 'loop',           // Infinite loop
                drag: 'free',          // Free drag mode
                focus: 'center',       // Focus on center
                perPage: 4,            // 4 slides visible on desktop
                gap: '2rem',           // Space between slides
                pagination: false,     // Hide pagination dots
                arrows: false,         // Hide navigation arrows
                autoScroll: {
                    speed: 1,          // Auto scroll speed (pixels/frame)
                    pauseOnHover: true, // Pause when hovering
                    pauseOnFocus: true  // Pause when focused
                },
                breakpoints: {
                    1200: {
                        perPage: 3,    // 3 slides on smaller desktops
                        gap: '1.5rem'
                    },
                    1024: {
                        perPage: 2,    // 2 slides on tablets
                        gap: '1.5rem'
                    },
                    768: {
                        perPage: 1,    // 1 slide on mobile
                        gap: '1rem'
                    }
                }
            });

            // Mount with AutoScroll extension
            splide.mount(window.splide.Extensions);
        });
    </script>
</body>
</html>
```

---

## Full Code Example

Here's a complete working example you can copy-paste:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Splide AutoScroll Example</title>
    
    <!-- Splide CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
    
    <style>
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .testimonials-splide {
            background: #f8f9fa;
            padding: 4rem 0;
            overflow: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .splide-testimonials-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .splide-testimonials-header h2 {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 0.5rem;
        }

        .splide-full-width {
            width: 100vw;
            position: relative;
            margin-left: calc(-50vw + 50%);
        }

        .splide__slide {
            padding: 0 1rem;
        }

        .testimonial-card-splide {
            background: #fff;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            border: 1px solid #e0e0e0;
            height: 100%;
            transition: all 0.3s ease;
        }

        .testimonial-card-splide:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .testimonial-stars {
            color: #FFD700;
            font-size: 1.2rem;
            display: block;
            margin-bottom: 1rem;
        }

        .testimonial-text {
            font-size: 1rem;
            line-height: 1.6;
            color: #333;
            margin-bottom: 1.5rem;
        }

        .author-name {
            font-weight: 700;
            color: #333;
            font-size: 1rem;
            margin-bottom: 0.25rem;
        }

        .author-title {
            font-size: 0.9rem;
            color: #666;
        }

        .splide__track {
            cursor: grab;
        }

        .splide__track:active {
            cursor: grabbing;
        }

        @media (max-width: 768px) {
            .splide-testimonials-header h2 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <section class="testimonials-splide">
        <div class="container">
            <div class="splide-testimonials-header">
                <h2>What Our Customers Say</h2>
                <p style="color: #666;">Auto-scrolling with manual control • Drag to explore</p>
            </div>
            
            <div class="splide-full-width">
                <div class="splide" id="testimonial-splide">
                    <div class="splide__track">
                        <ul class="splide__list">
                            
                            <li class="splide__slide">
                                <div class="testimonial-card-splide">
                                    <span class="testimonial-stars">★★★★★</span>
                                    <p class="testimonial-text">"Amazing service! Exceeded all my expectations."</p>
                                    <div class="author-info">
                                        <h4 class="author-name">John Doe</h4>
                                        <p class="author-title">CEO, Company Inc</p>
                                    </div>
                                </div>
                            </li>

                            <li class="splide__slide">
                                <div class="testimonial-card-splide">
                                    <span class="testimonial-stars">★★★★★</span>
                                    <p class="testimonial-text">"Highly professional and very responsive team."</p>
                                    <div class="author-info">
                                        <h4 class="author-name">Jane Smith</h4>
                                        <p class="author-title">Marketing Director</p>
                                    </div>
                                </div>
                            </li>

                            <li class="splide__slide">
                                <div class="testimonial-card-splide">
                                    <span class="testimonial-stars">★★★★★</span>
                                    <p class="testimonial-text">"Outstanding quality and attention to detail."</p>
                                    <div class="author-info">
                                        <h4 class="author-name">Mike Johnson</h4>
                                        <p class="author-title">Product Manager</p>
                                    </div>
                                </div>
                            </li>

                            <li class="splide__slide">
                                <div class="testimonial-card-splide">
                                    <span class="testimonial-stars">★★★★★</span>
                                    <p class="testimonial-text">"Best decision we made for our project!"</p>
                                    <div class="author-info">
                                        <h4 class="author-name">Sarah Williams</h4>
                                        <p class="author-title">Business Owner</p>
                                    </div>
                                </div>
                            </li>

                            <li class="splide__slide">
                                <div class="testimonial-card-splide">
                                    <span class="testimonial-stars">★★★★★</span>
                                    <p class="testimonial-text">"Incredible results in record time!"</p>
                                    <div class="author-info">
                                        <h4 class="author-name">David Brown</h4>
                                        <p class="author-title">Creative Director</p>
                                    </div>
                                </div>
                            </li>

                            <li class="splide__slide">
                                <div class="testimonial-card-splide">
                                    <span class="testimonial-stars">★★★★★</span>
                                    <p class="testimonial-text">"Would recommend to anyone without hesitation."</p>
                                    <div class="author-info">
                                        <h4 class="author-name">Emily Davis</h4>
                                        <p class="author-title">Entrepreneur</p>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Splide Core JS -->
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
    
    <!-- Splide AutoScroll Extension -->
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"></script>
    
    <!-- Initialize Splide -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var splide = new Splide('#testimonial-splide', {
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 4,
                gap: '2rem',
                pagination: false,
                arrows: false,
                autoScroll: {
                    speed: 1,
                    pauseOnHover: true,
                    pauseOnFocus: true
                },
                breakpoints: {
                    1200: {
                        perPage: 3,
                        gap: '1.5rem'
                    },
                    1024: {
                        perPage: 2,
                        gap: '1.5rem'
                    },
                    768: {
                        perPage: 1,
                        gap: '1rem'
                    }
                }
            });

            splide.mount(window.splide.Extensions);
        });
    </script>
</body>
</html>
```

---

## Customization Options

### AutoScroll Settings

```javascript
autoScroll: {
    speed: 1,              // Speed in pixels per frame (0.5 = slower, 2 = faster)
    autoStart: true,       // Start auto-scrolling on load
    pauseOnHover: true,    // Pause when mouse hovers
    pauseOnFocus: true,    // Pause when element is focused
    rewind: false          // Rewind when reaching the end
}
```

### Display Options

```javascript
perPage: 4,                // Number of slides visible
gap: '2rem',               // Space between slides
padding: 0,                // Padding around the track
focus: 'center',           // Focus position ('center', 0, 1, etc.)
trimSpace: false,          // Trim space at the ends
```

### Behavior Options

```javascript
type: 'loop',              // 'loop', 'slide', or 'fade'
drag: 'free',              // 'free' or true for standard drag
flickPower: 600,           // Flick power (higher = faster)
dragMinThreshold: 10,      // Minimum drag distance
```

### UI Options

```javascript
arrows: false,             // Show/hide navigation arrows
pagination: false,         // Show/hide pagination dots
keyboard: true,            // Enable keyboard navigation
wheel: false,              // Enable mouse wheel navigation
```

### Responsive Breakpoints

```javascript
breakpoints: {
    1400: {
        perPage: 4,
        gap: '1.5rem'
    },
    1024: {
        perPage: 3,
        gap: '1.5rem'
    },
    768: {
        perPage: 2,
        gap: '1rem'
    },
    480: {
        perPage: 1,
        gap: '0.5rem'
    }
}
```

---

## Advanced Features

### 1. Add Intersection Observer (Pause when out of view)

```javascript
document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('#testimonial-splide', {
        // ... your config
    });

    splide.mount(window.splide.Extensions);

    // Add Intersection Observer
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Resume auto scroll when visible
                    if (splide.Components.AutoScroll) {
                        splide.Components.AutoScroll.play();
                    }
                } else {
                    // Pause auto scroll when not visible
                    if (splide.Components.AutoScroll) {
                        splide.Components.AutoScroll.pause();
                    }
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% visible
        });

        observer.observe(document.getElementById('testimonial-splide'));
    }
});
```

### 2. Control Scroll Direction (Reverse)

```javascript
autoScroll: {
    speed: -1,  // Negative value = scroll right to left
}
```

### 3. Programmatic Control

```javascript
var splide = new Splide('#testimonial-splide', { /* config */ });
splide.mount(window.splide.Extensions);

// Control methods
splide.Components.AutoScroll.play();   // Start auto-scroll
splide.Components.AutoScroll.pause();  // Pause auto-scroll
splide.Components.AutoScroll.isPaused(); // Check if paused
```

### 4. Add Event Listeners

```javascript
splide.on('mounted', function() {
    console.log('Slider mounted!');
});

splide.on('move', function() {
    console.log('Slider moved!');
});

splide.on('drag', function() {
    console.log('User is dragging!');
});
```

### 5. Multiple Sliders on One Page

```javascript
// Slider 1
var slider1 = new Splide('#slider-1', { /* config */ });
slider1.mount(window.splide.Extensions);

// Slider 2
var slider2 = new Splide('#slider-2', { /* config */ });
slider2.mount(window.splide.Extensions);
```

---

## Common Use Cases

### 1. Logo Carousel

```javascript
new Splide('#logo-slider', {
    type: 'loop',
    perPage: 6,
    perMove: 1,
    gap: '2rem',
    pagination: false,
    arrows: false,
    drag: 'free',
    autoScroll: {
        speed: 0.5,
        pauseOnHover: true
    },
    breakpoints: {
        1024: { perPage: 4 },
        768: { perPage: 3 },
        480: { perPage: 2 }
    }
}).mount(window.splide.Extensions);
```

### 2. Image Gallery

```javascript
new Splide('#gallery-slider', {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    pagination: true,
    arrows: true,
    drag: true,
    autoScroll: {
        speed: 1,
        pauseOnHover: true
    },
    breakpoints: {
        768: { perPage: 1 }
    }
}).mount(window.splide.Extensions);
```

### 3. News Ticker

```javascript
new Splide('#news-ticker', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: 0,
    pagination: false,
    arrows: false,
    drag: false,
    autoScroll: {
        speed: 2,
        pauseOnHover: false,
        pauseOnFocus: false
    }
}).mount(window.splide.Extensions);
```

---

## Troubleshooting

### Issue: Slider not initializing

**Solution:**
- Make sure scripts are loaded in correct order (Core → Extensions → Your code)
- Check browser console for errors
- Ensure DOM is loaded before initializing

```javascript
// Wrap in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
});
```

### Issue: AutoScroll not working

**Solution:**
- Verify AutoScroll extension is loaded
- Check mount command includes extensions

```javascript
splide.mount(window.splide.Extensions); // Make sure this is included
```

### Issue: Drag not smooth

**Solution:**
- Increase `flickPower` value
- Use `drag: 'free'` instead of `drag: true`

```javascript
drag: 'free',
flickPower: 600
```

### Issue: Cards have different heights

**Solution:**
- Add `height: 100%` to card container
- Use flexbox or grid for consistent sizing

```css
.testimonial-card-splide {
    height: 100%;
    display: flex;
    flex-direction: column;
}
```

### Issue: Horizontal scrollbar appears

**Solution:**
- Add `overflow: hidden` to parent container

```css
.testimonials-splide {
    overflow: hidden;
}
```

### Issue: Not responsive on mobile

**Solution:**
- Check breakpoints are configured correctly
- Ensure viewport meta tag is present

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Performance Tips

1. **Lazy load images** in slides
```html
<img data-splide-lazy="image.jpg" alt="Description">
```

2. **Reduce motion for accessibility**
```javascript
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    autoScroll.speed = 0.5; // Slower speed
}
```

3. **Destroy slider when not needed**
```javascript
splide.destroy(); // Clean up when component unmounts
```

4. **Use will-change for better performance**
```css
.splide__track {
    will-change: transform;
}
```

---

## Resources

- **Splide.js Documentation**: https://splidejs.com/
- **AutoScroll Extension**: https://splidejs.com/extensions/auto-scroll/
- **GitHub Repository**: https://github.com/Splidejs/splide
- **CDN (jsDelivr)**: https://www.jsdelivr.com/package/npm/@splidejs/splide
- **NPM Package**: https://www.npmjs.com/package/@splidejs/splide

---

## Quick Reference

### Essential Code Snippet

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">

<!-- HTML -->
<div class="splide" id="my-slider">
    <div class="splide__track">
        <ul class="splide__list">
            <li class="splide__slide">Slide 1</li>
            <li class="splide__slide">Slide 2</li>
            <li class="splide__slide">Slide 3</li>
        </ul>
    </div>
</div>

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"></script>
<script>
    new Splide('#my-slider', {
        type: 'loop',
        drag: 'free',
        perPage: 3,
        autoScroll: { speed: 1 }
    }).mount(window.splide.Extensions);
</script>
```

---

## Checklist

Before deploying, make sure:

- [ ] Splide CSS is loaded in `<head>`
- [ ] Splide JS is loaded before `</body>`
- [ ] AutoScroll extension is loaded after Splide core
- [ ] HTML structure uses correct classes
- [ ] JavaScript initializes after DOM load
- [ ] `.mount(window.splide.Extensions)` is called
- [ ] Breakpoints are configured for mobile
- [ ] Tested on multiple browsers
- [ ] Accessibility features work (keyboard nav)
- [ ] No console errors

---

**Created**: 2025
**Version**: Splide v4.1.4, AutoScroll v0.5.3
**Author**: Tutorial for Next Level Kitchens Implementation

---

_Happy Sliding! 🎢_

