# Splide.js AutoScroll - Quick Reference Card

## 🚀 Quick Start (Copy & Paste)

### 1. Add to `<head>`
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">
```

### 2. Add HTML Structure
```html
<div class="splide" id="my-slider">
    <div class="splide__track">
        <ul class="splide__list">
            <li class="splide__slide">Content 1</li>
            <li class="splide__slide">Content 2</li>
            <li class="splide__slide">Content 3</li>
        </ul>
    </div>
</div>
```

### 3. Add before `</body>`
```html
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"></script>
<script>
    new Splide('#my-slider', {
        type: 'loop',
        drag: 'free',
        perPage: 4,
        autoScroll: { speed: 1 }
    }).mount(window.splide.Extensions);
</script>
```

---

## ⚙️ Common Settings

| Option | Values | Description |
|--------|--------|-------------|
| `type` | `'loop'`, `'slide'`, `'fade'` | Slider type |
| `perPage` | `1-10` | Slides visible |
| `gap` | `'1rem'`, `'2rem'` | Space between slides |
| `speed` | `0.5-3` | Auto-scroll speed |
| `drag` | `'free'`, `true`, `false` | Drag behavior |
| `arrows` | `true`, `false` | Show arrows |
| `pagination` | `true`, `false` | Show dots |

---

## 📱 Responsive Template

```javascript
breakpoints: {
    1200: { perPage: 3 },  // Smaller desktop
    1024: { perPage: 2 },  // Tablet
    768: { perPage: 1 }    // Mobile
}
```

---

## 🎛️ AutoScroll Options

```javascript
autoScroll: {
    speed: 1,              // Pixels per frame
    pauseOnHover: true,    // Pause on hover
    pauseOnFocus: true,    // Pause on focus
    rewind: false          // Rewind at end
}
```

---

## 🎨 Full Width Trick

```css
.splide-wrapper {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
}
```

```html
<div class="splide-wrapper">
    <div class="splide" id="slider">...</div>
</div>
```

---

## 🔧 Control Methods

```javascript
var splide = new Splide('#slider').mount(window.splide.Extensions);

// Control auto-scroll
splide.Components.AutoScroll.play();
splide.Components.AutoScroll.pause();
splide.Components.AutoScroll.isPaused();

// Navigate
splide.go('+1');  // Next slide
splide.go('-1');  // Previous slide
splide.go(3);     // Go to slide 3
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Not working | Check console, verify scripts load order |
| No auto-scroll | Add `.mount(window.splide.Extensions)` |
| Different heights | Add `height: 100%` to cards |
| Horizontal scroll | Add `overflow: hidden` to parent |
| Not responsive | Check viewport meta tag exists |

---

## 📦 NPM Installation

```bash
npm install @splidejs/splide
npm install @splidejs/splide-extension-auto-scroll
```

```javascript
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

new Splide('#slider').mount({ AutoScroll });
```

---

## 🎯 Use Case Presets

### Testimonials
```javascript
{ type: 'loop', perPage: 3, drag: 'free', autoScroll: { speed: 1 } }
```

### Logo Carousel
```javascript
{ type: 'loop', perPage: 6, drag: 'free', autoScroll: { speed: 0.5 } }
```

### News Ticker
```javascript
{ type: 'loop', perPage: 1, drag: false, autoScroll: { speed: 2, pauseOnHover: false } }
```

### Image Gallery
```javascript
{ type: 'loop', perPage: 3, arrows: true, pagination: true, autoScroll: { speed: 1 } }
```

---

**Links**: [Docs](https://splidejs.com/) | [AutoScroll](https://splidejs.com/extensions/auto-scroll/) | [GitHub](https://github.com/Splidejs/splide)

