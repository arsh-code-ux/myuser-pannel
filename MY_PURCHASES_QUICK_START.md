# My Purchases Page - Quick Start Guide

## 🚀 Access the Page

### Method 1: Via Navigation Menu
1. Open your application at `http://localhost:5174/`
2. Click on **"Sign in"** button in the top right
3. Select **"My Purchase"** from the dropdown menu
4. The premium dark-themed My Purchases page will load

### Method 2: Direct URL
- Navigate directly to: `http://localhost:5174/#my-purchases`

## 📖 Page Features

### Header Section
- **Title**: "MY PURCHASES" with golden gradient text
- **Subtitle**: "Your carefully curated collection of premium digital artwork"
- **Shopping Bag Icons**: Animated bouncing icons on both sides

### Carousel Controls
- **Left Arrow Button** (Blue-Amber Gradient): Navigate to previous artwork
- **Right Arrow Button** (Yellow-Amber Gradient): Navigate to next artwork
- **Dot Indicators**: Shows current position, click any dot to jump
- **Auto-Play Toggle**: Pause/Play button in top right

### Center Artwork Display
- **3D Rotating Frame**: Golden bordered frame with artwork
- **Artwork Image**: Loads from src folder with smooth rotation animation
- **Title & Artist**: Displayed below the image
- **Price Display**: Shows in golden gradient text when active

### Details Panel (Below Carousel)
Shows information for the currently selected artwork:
- **Artwork Title** (Large heading)
- **Artist Name**
- **Purchase Price** (Golden gradient text)
- **Purchase Date**
- **Status**: Delivery status badge
- **Category**: Artwork category
- **Total Purchases**: Count of all purchases

### Action Buttons
1. **Download Certificate**: Golden gradient button (top left)
2. **View Details**: White border button (top right)

## 🎬 Animations in Action

### When You Load the Page
1. Frames slide in from left and right with 3D perspective
2. Center frame begins glowing with golden pulse
3. Images start rotating smoothly (20-second cycle)

### Auto-Play Carousel
- Automatically advances every 5 seconds
- Left/Right frames tilt to show 3D depth
- Center frame glows and pulses

### On Hover
- Artwork frames scale up smoothly
- Golden glow intensifies
- 3D tilt effect becomes more pronounced

### Navigation
- Clicking previous/next buttons pauses auto-play
- Manual navigation feels responsive and smooth
- Dot indicators highlight the current position

## 🎨 Visual Design Notes

### Color Scheme
- **Primary Background**: Deep charcoal with golden ambience
- **Text**: Pure white with golden accents
- **Borders**: Golden (amber-300) on frames
- **Buttons**: Gradient from amber to yellow
- **Glow Effects**: Soft golden halos around active elements

### 3D Effects
- **Perspective**: 1200px for realistic depth
- **Left Frames**: Tilted -15° on Y-axis
- **Right Frames**: Tilted +15° on Y-axis
- **Center Frame**: Straight-on with pulsing glow

### Typography
- **Headers**: Bold, white text with golden gradient accents
- **Artist Names**: Medium golden text
- **Prices**: Transparent with golden gradient background
- **Labels**: Smaller amber/yellow text

## 📱 Responsive Experience

### Desktop (1200px+)
- Full 3-column layout visible
- Side frames show with tilt effect
- Smooth animations on all elements

### Tablet (768px - 1200px)
- Main carousel visible
- Side frames less prominent
- Touch-friendly controls

### Mobile (< 768px)
- Center frame only
- Full-width display
- Optimized navigation buttons

## 🔧 Customization Tips

### Change Colors
Edit `tailwind.config.js` color gradients:
```javascript
// Change primary color (currently amber/yellow)
from-amber-300 → from-blue-300
to-yellow-400 → to-blue-400
```

### Adjust Animation Speed
Edit animation durations in `App.css`:
```css
/* Make rotation faster: change 20s to 10s */
@keyframes rotateImage {
  /* ... */
  animation: rotateImage 10s linear infinite;
}
```

### Add Real Data
Replace sample purchase data in `MyPurchases.jsx`:
```javascript
const purchases = [
  {
    id: 1,
    title: 'Your Real Title',
    artist: 'Your Real Artist',
    price: '$XXX',
    date: 'Your Date',
    image: 'path/to/your/image.jpg',
    color: 'from-color-500 to-color-500'
  },
  // Add more...
];
```

## ⚠️ Important Notes

### Image Paths
- Images load from `/src/` folder
- Update image paths in purchase data if needed
- Fallback placeholder loads for missing images

### Browser Support
- Works best on modern browsers (Chrome, Firefox, Safari, Edge)
- CSS 3D transforms required
- Recommended: Latest browser versions

### Performance
- Smooth 60fps animations
- GPU accelerated transforms
- Optimized for modern devices

## 🐛 Troubleshooting

### Images Not Showing
1. Check if image files exist in `/src/` folder
2. Verify correct file extensions (`.jpg`, `.png`, etc.)
3. Check browser console for errors (F12)

### Animations Not Smooth
1. Disable browser extensions (might block animations)
2. Check browser hardware acceleration is enabled
3. Try a different browser

### Page Not Loading
1. Ensure dev server is running: `npm run dev`
2. Check console for errors (F12)
3. Clear browser cache and reload

## 📞 Support Resources

- Check `MY_PURCHASES_IMPLEMENTATION.md` for technical details
- Review `ANIMATION_GUIDE.md` for animation explanations
- Inspect component in browser DevTools for styling details

---

**Happy purchasing! 🎨✨**

