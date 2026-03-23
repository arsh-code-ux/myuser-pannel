# My Purchases Page - Animation & Styling Guide

## 🎨 Color Palette

### Primary Colors
- **White**: `text-white`, `bg-white/10` for text and highlights
- **Amber**: `text-amber-300`, `bg-amber-400` for primary accents
- **Yellow**: `text-yellow-300`, `bg-yellow-500` for secondary accents
- **Deep Background**: `from-slate-950 via-amber-950` for dark theme

### Gradient Combinations
```
Button Gradient: from-amber-400 to-yellow-500
Text Gradient: from-amber-300 via-yellow-300 to-amber-400
Glow Gradient: amber-400 → yellow-300 (with blur effects)
```

## 🔄 Animations Explained

### 1. Image Rotation Animation (`rotateImage`)
**What it does**: Makes the artwork images gently rotate and scale
```css
0%: scale(1) rotate(0deg)
50%: scale(1.05) rotate(2deg)  /* Slightly zoom and tilt */
100%: scale(1) rotate(0deg)
```
**Duration**: 20 seconds (continuous loop)
**Effect**: Subtle movement that draws attention without being distracting

### 2. Frame Rotation - Left (`rotateX`)
**What it does**: Rotates left-side frames on X and Y axes for 3D depth
```css
0%: perspective(1200px) rotateX(0deg) rotateY(-15deg)
50%: perspective(1200px) rotateX(8deg) rotateY(-15deg)
100%: perspective(1200px) rotateX(0deg) rotateY(-15deg)
```
**Duration**: 4 seconds
**Effect**: Creates 3D card tilt effect, simulating depth and rotation

### 3. Frame Rotation - Right (`rotateXRight`)
**What it does**: Same as left but mirrored (rotateY: 15deg instead of -15deg)
**Duration**: 4 seconds
**Effect**: Symmetric 3D depth from opposite angle

### 4. Glow Pulse Animation (`glowPulse`)
**What it does**: Makes the center frame glow intensify and fade
```css
0%, 100%: 
  box-shadow: 0 0 20px rgba(251, 146, 60, 0.4)
              0 0 40px rgba(217, 119, 6, 0.2)
              inset 0 0 20px rgba(251, 146, 60, 0.15)

50%: 
  box-shadow: 0 0 40px rgba(251, 146, 60, 0.6)
              0 0 80px rgba(217, 119, 6, 0.4)
              inset 0 0 30px rgba(251, 146, 60, 0.25)
```
**Duration**: 3 seconds
**Effect**: Golden glow that pulses around the center frame

### 5. Slide In Animations (`slideInLeft`, `slideInRight`)
**What it does**: Frames slide in from sides with 3D perspective
**Slide In Left**:
```
From: opacity 0, translateX(-100px), perspective rotateY(45deg)
To: opacity 1, translateX(0), perspective rotateY(-15deg)
```
**Slide In Right**:
```
From: opacity 0, translateX(100px), perspective rotateY(-45deg)
To: opacity 1, translateX(0), perspective rotateY(15deg)
```
**Duration**: 0.8 seconds
**Effect**: Smooth entrance of frames from sides

### 6. Golden Glow Text Animation (`goldenGlow`)
**What it does**: Makes text shimmer with golden light
**Duration**: 2 seconds
**Effect**: Subtle text glow for headings and prices

### 7. Float Animation (`float`)
**What it does**: Slight vertical movement combined with horizontal shift
```css
0%, 100%: translateY(0px) translateX(0px)
25%: translateY(-20px) translateX(5px)
50%: translateY(-40px) translateX(-5px)
75%: translateY(-20px) translateX(5px)
```
**Effect**: Floating feeling for interactive elements

## 🎯 Hover Effects

### Buttons on Hover
```javascript
from-amber-400 → from-amber-300  // Slightly lighter
to-yellow-500 → to-yellow-400    // Slightly darker
scale(1) → scale(1.1)            // 10% larger
shadow-lg → shadow-amber-400/50  // Glow effect
```

### Artwork Frames on Hover
```javascript
opacity-60 → opacity-80  // More visible
scale-75 → scale-85      // Slightly larger
rotateZ(0deg) → rotateZ(5deg)  // Slight tilt
```

### Center Frame Hover
```javascript
filter: brightness(1) → brightness(1.1)
transform: additional rotateX(-3deg)
```

## 🎬 Animation Timing

| Animation | Duration | Delay | Effect |
|-----------|----------|-------|--------|
| rotateImage | 20s | None | Continuous image rotation |
| rotateX | 4s | None | Left frame 3D rotation |
| rotateXRight | 4s | None | Right frame 3D rotation |
| glowPulse | 3s | None | Center frame glow |
| slideInLeft | 0.8s | None | Initial entrance |
| slideInRight | 0.8s | None | Initial entrance |
| goldenGlow | 2s | None | Text shimmer |
| Carousel auto-advance | - | 5s | Slide every 5 seconds |

## 🎨 Styling Classes

### Golden Theme Classes
```jsx
// Text Colors
text-amber-100     // Light golden text
text-amber-200     // Medium golden text
text-amber-300     // Bright golden text
text-yellow-300    // Bright yellow accent
text-yellow-400    // Pure yellow accent

// Background Colors
bg-amber-950       // Very dark amber (dark theme background)
bg-amber-400/20    // Semi-transparent amber
bg-amber-500/10    // Very light amber overlay
bg-gradient-to-r   // Gradient backgrounds

// Border Colors
border-amber-300   // Golden borders
border-amber-400/30 // Semi-transparent borders
border-amber-500/30 // More opaque borders

// Shadow/Glow
shadow-amber-400/50 // Golden glow shadows
hover:shadow-amber-400/50 // On hover
```

### Backdrop Effects
```jsx
backdrop-blur-xl        // Heavy blur
backdrop-blur-md        // Medium blur
mix-blend-screen        // Screen blending for lights
mix-blend-multiply      // Multiply blending for darks
```

## 📱 Responsive Behavior

- **Desktop (lg+)**: Full 3-column layout with left and right frames visible
- **Tablet (md)**: Center frame larger, side frames less prominent
- **Mobile**: Center frame only, side frames hidden

## 🚀 Performance Tips

1. **Image Optimization**: Use optimized image formats (WebP)
2. **Animation FPS**: Animations use GPU acceleration (transform, opacity)
3. **Lazy Loading**: Consider implementing image lazy loading
4. **Smooth Transitions**: All transitions use cubic-bezier for smoothness

## 🎓 CSS Properties Used

### 3D Transforms
```css
perspective: 1200px;        /* 3D depth perception */
transform-style: preserve-3d; /* Maintain 3D space */
rotateX(), rotateY(), rotateZ(); /* 3D rotations */
```

### Filters
```css
filter: blur();           /* Blur effects */
filter: drop-shadow();    /* Drop shadows */
filter: brightness();     /* Brightness adjustment */
mix-blend-mode: screen;   /* Blending modes */
```

### Advanced Properties
```css
backdrop-filter: blur(10px);     /* Glassmorphism */
-webkit-backdrop-filter: blur();  /* Safari support */
clip-path: circle(), polygon();   /* Shape clipping */
```

## 📊 Animation Performance

- Uses `transform` and `opacity` for best performance
- Avoids animating `width`, `height`, `top`, `left` (layout thrashing)
- GPU accelerated on modern browsers
- Smooth 60fps on most devices

