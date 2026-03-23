# My Purchases Page - Visual Reference & Component Structure

## 📐 Page Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                      HEADER (White Background)              │
│   Logo          Search Bar          [Sign in ▼]            │
│   (Zigguratss)                      [My Purchase] ← CLICK   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│        🛍️ MY PURCHASES 🛍️                                   │
│     (Golden Gradient Text with Animation)                  │
│                                                             │
│   Your carefully curated collection of premium artwork      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ Dark Charcoal Background with Golden Ambient Glows          │
│                                                              │
│    ┌────────────┐     ┌──────────────┐     ┌────────────┐  │
│    │  LEFT      │     │   CENTER     │     │   RIGHT    │  │
│    │  FRAME     │     │    FRAME     │     │   FRAME    │  │
│    │  (Scale    │     │  (Golden     │     │  (Scale    │  │
│    │   75%)     │     │   Glow)      │     │   75%)     │  │
│    │  -15° Tilt │     │  Rotating    │     │  +15° Tilt │  │
│    │  (Opacity  │     │  Image       │     │  (Opacity  │  │
│    │   60%)     │     │  (Scale 100) │     │   60%)     │  │
│    │            │     │  (Z-index    │     │            │  │
│    │            │     │   higher)    │     │            │  │
│    └────────────┘     └──────────────┘     └────────────┘  │
│                                                              │
│              ◀ [Prev] ● ○ ○ ○ ○ ○ [Next] ▶                 │
│                                                              │
│                      [⏸ Pause]                             │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                  DETAILS PANEL                              │
│ ┌────────────────────────────────────────────────────────┐ │
│ │  Digital Sunset                                        │ │
│ │  by James North                                        │ │
│ │                                                        │ │
│ │  ┌─────────────────────────┐  ┌────────┐ ┌─────────┐ │ │
│ │  │ Purchase Price │ $2,100 │  │ Status │ │Delivered│ │ │
│ │  └─────────────────────────┘  └────────┘ └─────────┘ │ │
│ │  ┌─────────────────────────┐  ┌────────┐ ┌─────────┐ │ │
│ │  │ Purchase Date │ Feb 28  │  │Category│ │Digital  │ │ │
│ │  └─────────────────────────┘  │        │ │   Art   │ │ │
│ │                               │        │ │         │ │ │
│ │  [📥 Download Certificate]    └────────┘ └─────────┘ │ │
│ │  [View Details]               ┌─────────────────────┐ │ │
│ │                               │ Total Purchases     │ │ │
│ │                               │      6 Artworks    │ │ │
│ │                               └─────────────────────┘ │ │
│ └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                    FOOTER                                   │
│              (Standard Footer Content)                      │
└──────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Breakdown

### Background Layer
```
┌─ Outer Glow (Amber) ─────────────────────────┐
│  opacity: 0.15                               │
│  filter: blur(3xl)                           │
│                                              │
│  ┌─ Secondary Glow (Yellow) ───────────────┐ │
│  │ opacity: 0.15                           │ │
│  │ filter: blur(3xl)                       │ │
│  │ animation: pulse (1s delay)             │ │
│  │                                         │ │
│  │ ┌─ Main Background ──────────────────┐ │ │
│  │ │ from-slate-950 via-amber-950      │ │ │
│  │ │ to-slate-950                      │ │ │
│  │ │                                   │ │ │
│  │ │ ┌─ Center White Glow ───────────┐│ │ │
│  │ │ │ opacity: 0.1                  ││ │ │
│  │ │ │ filter: blur(3xl)             ││ │ │
│  │ │ └──────────────────────────────┘│ │ │
│  │ └────────────────────────────────┘ │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Artwork Frame Colors
```
Frame Structure:
┌─ Outer Border (Amber-300) ────────────┐
│  4px solid border-amber-300          │
│                                      │
│ ┌─ Inner Gradient ──────────────────┐│
│ │ from-amber-900                    ││
│ │ via-slate-900                     ││
│ │ to-amber-900                      ││
│ │                                   ││
│ │ ┌─ Inner Glow ──────────────────┐││
│ │ │ from-amber-400/30              │││
│ │ │ via-transparent                │││
│ │ │ to-yellow-300/20               │││
│ │ └────────────────────────────────┘││
│ │                                   ││
│ │ ┌─ Image Container ─────────────┐││
│ │ │ ┌─ Image ────────────────────┐│││
│ │ │ │ Rotating (20s cycle)       ││││
│ │ │ │ Scale: 1 → 1.05 → 1       ││││
│ │ │ │ Rotate: 0° → 2° → 0°      ││││
│ │ │ └────────────────────────────┘│││
│ │ │                               │││
│ │ │ ┌─ Overlay Gradient ────────┐│││
│ │ │ │ from-amber-950            │││
│ │ │ │ opacity: 0.6              │││
│ │ │ └────────────────────────────┘│││
│ │ │                               │││
│ │ │ [Floating Particle Effects]   │││
│ │ │ • Amber dots pulsing          │││
│ │ │ • Yellow dots pulsing (0.5s)  │││
│ │ │ • Amber dots pulsing (1s)     │││
│ │ └────────────────────────────────┘││
│ │                                   ││
│ │ ┌─ Content Section ─────────────┐││
│ │ │ Title: text-amber-100         │││
│ │ │ Artist: text-amber-200/80     │││
│ │ │ Price: gradient gold/yellow   │││
│ │ │ Border-T: border-amber-400/30 │││
│ │ └────────────────────────────────┘││
│ │                                   ││
│ │ ┌─ Corner Accents ──────────────┐││
│ │ │ Top-Right: amber-400/40       │││
│ │ │ Bottom-Left: yellow-400/30    │││
│ │ └────────────────────────────────┘││
│ └────────────────────────────────────┘│
└───────────────────────────────────────┘
```

---

## 🎬 Animation State Changes

### On Page Load (0s - 0.8s)
```
Left Frame:
  Start: opacity 0, translateX(-100px), rotateY(45deg)
  End:   opacity 1, translateX(0), rotateY(-15deg)

Right Frame:
  Start: opacity 0, translateX(100px), rotateY(-45deg)
  End:   opacity 1, translateX(0), rotateY(15deg)

Center Frame:
  Starts glowing immediately
```

### After Load (Continuous)
```
Left Frame:
  • Rotates continuously on X axis: 0° → 8° → 0° (4s cycle)
  • Y axis fixed at -15°
  • Scale: 75% (0.75x)
  • Opacity: 60% (0.6)
  • On hover: opacity 80%, scale 85%

Center Frame:
  • Image rotates: 0° → 2° → 0° (20s cycle)
  • Glow pulses: subtle → bright → subtle (3s cycle)
  • Scale: 100% (1x)
  • On hover: rotateZ(5deg), rotateX(-3deg)

Right Frame:
  • Rotates continuously on X axis: 0° → 8° → 0° (4s cycle)
  • Y axis fixed at +15°
  • Scale: 75% (0.75x)
  • Opacity: 60% (0.6)
  • On hover: opacity 80%, scale 85%
```

### Navigation Changes
```
When clicking Next/Previous:
  1. Current frame fades out (smooth)
  2. New slide data loads
  3. Frames animate in (0.8s)
  4. New image starts rotating
  5. Details panel updates (500ms transition)
```

### Hover States
```
Button (Prev/Next):
  • Background: lighter shade
  • Scale: 1.1x (10% larger)
  • Box Shadow: glowing golden
  • Transition: 300ms

Artwork Frame:
  • Scale: 1.06x on sides, 1.02x in center
  • Opacity: increases
  • Border glow: intensifies
  • Transition: 300ms

Text:
  • Color: brightens slightly
  • Text shadow: adds golden glow
  • Transition: 300ms
```

---

## 📊 Z-Index Stacking Order

```
Level 5: Navigation Buttons, Pause/Play Toggle
         (Highest visibility, on top of everything)

Level 4: Carousel Center Frame
         (Most prominent artwork)

Level 3: Details Panel
         (Below carousel)

Level 2: Side Frames (Left & Right)
         (Behind center frame)

Level 1: Background Glows
         (Behind all frames)

Level 0: Base Background
         (Lowest)
```

---

## 🔢 Measurement Specifications

### Spacing
```
Padding (Container): px-4 md:px-8
Padding (Frame): p-6
Gap (Columns): 8 (spacing-8)
Border Radius: rounded-2xl (0.5rem)
Border Width: border-4 (frame)
```

### Sizing
```
Header Height: pt-20 pb-12
Frame Width: Desktop: 1/3 of container
Frame Height: h-80 md:h-96 (320px / 384px)
Full Height Carousel: h-screen

Button Sizes:
  Icon: w-6 h-6
  Small: w-12 h-12
  Navigation: Full width responsive
```

### Typography
```
Header: text-6xl md:text-7xl font-black
Title: text-4xl md:text-5xl font-bold
Artist: text-lg font-normal
Price: text-2xl font-bold
Label: text-sm font-medium
```

---

## 🎯 Responsive Breakpoints

### Desktop (lg: 1024px+)
- 3-column layout (Left | Center | Right)
- All frames visible
- Full animations enabled
- Max width: 1400px container

### Tablet (md: 768px - 1023px)
- Center focused
- Side frames less prominent
- Touch optimized buttons
- Full-width carousel

### Mobile (< 768px)
- Center frame only
- Full-width display
- Hidden side columns
- Optimized touch targets
- Vertically stacked content

---

## 🎪 Animation Sequences

### Carousel Auto-Play Loop
```
0s:    Display Frame 1
5s:    Display Frame 2
10s:   Display Frame 3
15s:   Display Frame 4
20s:   Display Frame 5
25s:   Display Frame 6
30s:   Return to Frame 1
```

### Image Rotation Loop (Per Image)
```
0s-5s:     0° → 1°
5s-10s:    1° → 0°
10s-15s:   0° → 2°
15s-20s:   2° → 0°
(Repeats continuously)
```

### Glow Pulse Cycle (3 seconds)
```
0-0.75s:    Subtle glow
0.75-1.5s:  Building brightness
1.5-2.25s:  Peak brightness
2.25-3s:    Fading back
(Repeats continuously)
```

---

## 💡 Interactive States Summary

| Element | Default | Hover | Active | Disabled |
|---------|---------|-------|--------|----------|
| Prev Button | amber-400 | amber-300 | (N/A) | (N/A) |
| Next Button | yellow-500 | yellow-400 | (N/A) | (N/A) |
| Dot Indicator | gray-600 | gray-500 | gradient | (N/A) |
| Frame | opacity-60 | opacity-80 | scale-100 | (N/A) |
| Image | scale-100 | scale-110 | rotating | (N/A) |

---

This visual guide should help you understand the exact layout, colors, and animations of your new My Purchases page!

