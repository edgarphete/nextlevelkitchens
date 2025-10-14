# Splide.js AutoScroll - Visual Implementation Guide

## 🎯 How It All Works Together

```
┌─────────────────────────────────────────────────────────────┐
│                      YOUR WEBPAGE                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │                    <HEAD>                          │     │
│  ├────────────────────────────────────────────────────┤     │
│  │  1. Splide CSS (Styling)                          │     │
│  │     - Slider structure                             │     │
│  │     - Track & slide layout                         │     │
│  │  2. Custom CSS (Your styling)                      │     │
│  │     - Card design                                  │     │
│  │     - Colors, shadows, spacing                     │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │                    <BODY>                          │     │
│  ├────────────────────────────────────────────────────┤     │
│  │                                                     │     │
│  │  ┌─────────────────────────────────────────┐      │     │
│  │  │   Section Container                      │      │     │
│  │  │   ┌───────────────────────────────────┐ │      │     │
│  │  │   │   Header/Title                    │ │      │     │
│  │  │   └───────────────────────────────────┘ │      │     │
│  │  │   ┌───────────────────────────────────┐ │      │     │
│  │  │   │   Full Width Wrapper              │ │      │     │
│  │  │   │   ┌─────────────────────────────┐ │ │      │     │
│  │  │   │   │  <div class="splide">       │ │ │      │     │
│  │  │   │   │  ┌────────────────────────┐ │ │ │      │     │
│  │  │   │   │  │ .splide__track         │ │ │ │      │     │
│  │  │   │   │  │ ┌────────────────────┐ │ │ │ │      │     │
│  │  │   │   │  │ │ .splide__list      │ │ │ │ │      │     │
│  │  │   │   │  │ │ ┌────┬────┬────┐   │ │ │ │ │      │     │
│  │  │   │   │  │ │ │Card│Card│Card│   │ │ │ │ │      │     │
│  │  │   │   │  │ │ └────┴────┴────┘   │ │ │ │ │      │     │
│  │  │   │   │  │ └────────────────────┘ │ │ │ │      │     │
│  │  │   │   │  └────────────────────────┘ │ │ │      │     │
│  │  │   │   └─────────────────────────────┘ │ │      │     │
│  │  │   └───────────────────────────────────┘ │      │     │
│  │  └─────────────────────────────────────────┘      │     │
│  │                                                     │     │
│  │  ┌─────────────────────────────────────────┐      │     │
│  │  │   Scripts (Before </body>)              │      │     │
│  │  │   1. Splide Core JS                     │      │     │
│  │  │   2. AutoScroll Extension JS            │      │     │
│  │  │   3. Your Initialization Code           │      │     │
│  │  └─────────────────────────────────────────┘      │     │
│  │                                                     │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow

```
User Opens Page
      ↓
DOM Loads
      ↓
DOMContentLoaded Event Fires
      ↓
JavaScript Runs
      ↓
Splide Instance Created ← Config Options
      ↓
Mount Extensions (AutoScroll)
      ↓
┌─────────────────────────┐
│   Slider Initialized    │
│   ✓ HTML Structure      │
│   ✓ CSS Applied         │
│   ✓ AutoScroll Active   │
└─────────────────────────┘
      ↓
Auto-Scrolling Begins
      ↓
┌──────────────────────────────────┐
│  User Interactions Available:    │
│  • Drag/Swipe                    │
│  • Hover (pauses)                │
│  • Keyboard navigation           │
│  • Touch gestures                │
└──────────────────────────────────┘
```

---

## 🏗️ HTML Structure Breakdown

```html
<section class="testimonials-splide">          ← Section Container
    <div class="container">                     ← Content Container
        <div class="header">                    ← Header/Title
            <h2>Title</h2>
        </div>
        
        <div class="splide-full-width">         ← Full Width Wrapper
            <div class="splide" id="slider">    ← Splide Root (Required)
                <div class="splide__track">     ← Track Container (Required)
                    <ul class="splide__list">   ← List Container (Required)
                        <li class="splide__slide">  ← Individual Slide
                            <div class="card">      ← Your Content
                                <!-- Card content -->
                            </div>
                        </li>
                        <!-- More slides -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Required Elements:**
- ✅ `.splide` - Main container
- ✅ `.splide__track` - Sliding track
- ✅ `.splide__list` - Slides list
- ✅ `.splide__slide` - Individual slides

**Optional Wrappers:**
- `section`, `div.container` - For layout
- `.splide-full-width` - For edge-to-edge effect

---

## 🎨 CSS Layers

```
┌─────────────────────────────────────┐
│  Layer 1: Splide Core CSS           │  ← Loaded from CDN
│  • Basic slider structure            │
│  • Track & slide positioning         │
│  • Default animations                │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  Layer 2: Your Custom CSS           │  ← Your <style> tag
│  • Section background                │
│  • Card styling                      │
│  • Colors, shadows, borders          │
│  • Responsive adjustments            │
│  • Full-width wrapper                │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  Layer 3: Dynamic Inline Styles     │  ← Applied by JavaScript
│  • Transform positions               │
│  • Width calculations                │
│  • Active states                     │
└─────────────────────────────────────┘
```

---

## ⚙️ Configuration Flow

```javascript
new Splide('#testimonial-splide', {
    
    // DISPLAY
    perPage: 4,           → Shows 4 slides at once
    gap: '2rem',          → 2rem space between slides
    focus: 'center',      → Centers active slide
    
    // BEHAVIOR  
    type: 'loop',         → Infinite loop
    drag: 'free',         → Free drag with momentum
    
    // AUTOSCROLL
    autoScroll: {
        speed: 1,         → 1px per frame = ~60px/second
        pauseOnHover: true → Stops when mouse over
    },
    
    // RESPONSIVE
    breakpoints: {
        1200: { perPage: 3 },  → Tablet: 3 slides
        768: { perPage: 1 }    → Mobile: 1 slide
    }
    
}).mount(window.splide.Extensions);  → Activates AutoScroll
```

---

## 📐 Full Width Technique Explained

### Problem: Container limits slider width
```
┌─────────────────────────────────────────────┐
│              Browser Window                  │
│  ┌───────────────────────────────────┐      │
│  │      Container (max-width)        │      │
│  │  ┌─────────────────────────────┐  │      │
│  │  │   Slider (constrained)      │  │      │
│  │  └─────────────────────────────┘  │      │
│  └───────────────────────────────────┘      │
└─────────────────────────────────────────────┘
```

### Solution: Break out of container
```css
.splide-full-width {
    width: 100vw;                    /* Full viewport width */
    margin-left: calc(-50vw + 50%);  /* Center & extend */
}
```

```
┌─────────────────────────────────────────────┐
│              Browser Window                  │
│  ┌───────────────────────────────────┐      │
│  │      Container (max-width)        │      │
│  └───────────────────────────────────┘      │
│ ┌─────────────────────────────────────────┐ │
│ │    Slider (full width)                  │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

**How it works:**
1. `100vw` = 100% of viewport width
2. `calc(-50vw + 50%)` = Moves left edge to screen edge
3. Result: Slider spans entire screen

---

## 🎬 Auto-Scroll Animation

```
Frame 1:  [Card A][Card B][Card C][Card D]
                ↓ speed: 1px
Frame 2:  [Card A][Card B][Card C][Card D]
                ↓ speed: 1px
Frame 3:  [Card A][Card B][Card C][Card D]
                ↓ speed: 1px
          ... continues infinitely ...

At 60fps: 1px × 60 frames = 60px per second
```

**Speed Guide:**
- `0.5` = Slow (30px/sec at 60fps)
- `1.0` = Medium (60px/sec) ✓ Recommended
- `2.0` = Fast (120px/sec)
- `-1.0` = Reverse direction

---

## 🖱️ User Interaction States

```
┌──────────────────────────────────────┐
│         DEFAULT STATE                │
│  Auto-scrolling active               │
│  cursor: grab                        │
└──────────────────────────────────────┘
         ↓ Mouse Hover
┌──────────────────────────────────────┐
│         PAUSED STATE                 │
│  Auto-scroll paused                  │
│  cursor: grab                        │
└──────────────────────────────────────┘
         ↓ Click & Drag
┌──────────────────────────────────────┐
│         DRAGGING STATE               │
│  User controls movement              │
│  cursor: grabbing                    │
└──────────────────────────────────────┘
         ↓ Release
┌──────────────────────────────────────┐
│         RESUME STATE                 │
│  Auto-scrolling resumes              │
│  cursor: grab                        │
└──────────────────────────────────────┘
```

---

## 📱 Responsive Breakpoint Logic

```
Screen Width: 1920px (Desktop)
       ↓
  perPage: 4
┌────┬────┬────┬────┐
│ 1  │ 2  │ 3  │ 4  │
└────┴────┴────┴────┘

Screen Width: 1024px (Tablet)
       ↓
  perPage: 2
┌────┬────┐
│ 1  │ 2  │
└────┴────┘

Screen Width: 480px (Mobile)
       ↓
  perPage: 1
┌────┐
│ 1  │
└────┘
```

**Breakpoint Cascade:**
```javascript
// Largest to smallest
breakpoints: {
    1200: { ... },  // Applies at ≤1200px
    1024: { ... },  // Applies at ≤1024px
    768: { ... }    // Applies at ≤768px
}
```

---

## 🔌 Extension System

```
┌─────────────────┐
│  Splide Core    │  ← Base slider functionality
└────────┬────────┘
         │
         ↓ .mount()
┌─────────────────┐
│  Extensions     │  ← Add extra features
├─────────────────┤
│ • AutoScroll    │  ← Continuous scrolling
│ • Intersection  │  ← Viewport detection
│ • Video         │  ← Video control
│ • Grid          │  ← Grid layout
└─────────────────┘
```

**Mounting:**
```javascript
// Mount single extension
splide.mount({ AutoScroll });

// Mount all available extensions
splide.mount(window.splide.Extensions);
```

---

## 🎯 Event Lifecycle

```
Page Load
   ↓
DOMContentLoaded
   ↓
new Splide(...)
   ↓
.mount()
   ↓
'mounted' event fires
   ↓
AutoScroll starts
   ↓
'move' events fire continuously
   ↓
User hovers
   ↓
'autoScroll:pause' event
   ↓
User leaves
   ↓
'autoScroll:play' event
   ↓
Continue scrolling...
```

---

## 🧪 Testing Checklist

```
✓ Desktop View (>1200px)
  ✓ Shows 4 cards
  ✓ Auto-scrolls smoothly
  ✓ Pauses on hover
  ✓ Drag works
  
✓ Tablet View (768-1024px)
  ✓ Shows 2 cards
  ✓ Touch swipe works
  ✓ Responsive gaps
  
✓ Mobile View (<768px)
  ✓ Shows 1 card
  ✓ Swipe works
  ✓ No horizontal scroll
  
✓ Cross-Browser
  ✓ Chrome/Edge
  ✓ Firefox
  ✓ Safari
  
✓ Accessibility
  ✓ Keyboard navigation
  ✓ Screen reader friendly
  ✓ Focus states visible
```

---

## 📊 Performance Metrics

```
Library Size:
├─ Splide Core:    ~15KB (minified + gzipped)
├─ AutoScroll:     ~3KB (minified + gzipped)
└─ Total:          ~18KB

Performance:
├─ FPS:            60fps (smooth)
├─ CPU Usage:      < 5% (idle)
├─ Memory:         ~2MB
└─ Load Time:      < 100ms
```

---

## 🎨 Customization Map

```
What to Customize               Where to Change
─────────────────────────────────────────────────
Number of slides visible   →    perPage: 4
Space between slides       →    gap: '2rem'
Scroll speed              →    autoScroll.speed: 1
Background color          →    CSS: .testimonials-splide
Card styling              →    CSS: .testimonial-card-splide
Card shadow              →    CSS: box-shadow
Pause behavior           →    pauseOnHover: true/false
Mobile layout            →    breakpoints: { ... }
Full width effect        →    CSS: .splide-full-width
```

---

**This visual guide complements the main tutorial!**

Use together with:
- `SPLIDE_AUTOSCROLL_TUTORIAL.md` (Complete guide)
- `SPLIDE_QUICK_REFERENCE.md` (Quick lookup)

