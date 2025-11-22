    # Image Optimization Guide - Nerul Cemetery Website

## Current Image Inventory

### Homepage (`app/page.tsx`)

1. **Hero Image**
   - File: `/hero-cemetery.jpg`
   - Current alt: "Peaceful Nerul Cemetery grounds at sunset with well-maintained gardens and serene pathways in Navi Mumbai"
   - Status: ✅ GOOD - Descriptive alt text includes location and key features
   - Recommended size: 1920x1080px, <200KB (WebP format)
   - Priority: HIGH (above the fold)

### About Page (`app/about/page.tsx`)

2. **Placeholder Grounds Image**
   - Current: Placeholder with FaLeaf icon
   - Recommended filename: `nerul-cemetery-peaceful-grounds.jpg`
   - Alt text: "15 acres of beautifully maintained cemetery grounds at Nerul Cemetery, Sector 2, Navi Mumbai"
   - Recommended size: 800x600px (4:3 aspect ratio), <100KB

### Gallery Page

3. **Gallery Images** (to be added)
   - Recommended filenames:
     - `nerul-cemetery-entrance-gate.jpg`
     - `nerul-cemetery-landscaped-gardens.jpg`
     - `nerul-cemetery-memorial-section.jpg`
     - `nerul-cemetery-walkways.jpg`
     - `nerul-cemetery-flower-garden.jpg`
     - `nerul-cemetery-peaceful-area.jpg`
   - Recommended size: 1200x800px, <150KB each
   - All should have descriptive alt text

### Open Graph / Social Sharing

4. **OG Image**
   - File: `/og-image.jpg`
   - Required size: Exactly 1200x630px
   - Format: JPG (better compression for photos)
   - Size: <200KB
   - Alt: "Nerul Cemetery - Dignified Burial Services in Navi Mumbai"
   - Should include: Logo, tagline, and scenic cemetery image

---

## Image Optimization Best Practices

### 1. File Format Selection

**Use WebP for modern browsers:**
```jsx
<Image 
  src="/image.webp"
  alt="Descriptive alt text"
  width={800}
  height={600}
/>
```

**Fallback strategy:**
- Primary: WebP (70% smaller than JPEG)
- Fallback: JPEG for older browsers
- Next.js Image component handles this automatically

**Format Guide:**
- Photos/Grounds: WebP or JPEG
- Logos/Icons: SVG (scalable, small file size)
- Simple graphics: PNG-8
- Never use: BMP, TIFF (too large)

### 2. Compression Guidelines

**Target Sizes:**
| Image Type | Dimensions | Target Size | Format |
|------------|------------|-------------|---------|
| Hero/Banner | 1920x1080 | <200KB | WebP/JPEG |
| Feature Images | 1200x800 | <150KB | WebP/JPEG |
| Gallery Thumbnails | 400x300 | <50KB | WebP/JPEG |
| OG Images | 1200x630 | <200KB | JPEG |
| Icons/Logos | Vector | <10KB | SVG |

**Compression Tools:**
- **TinyPNG/TinyJPG** (https://tinypng.com) - Easy online tool
- **Squoosh** (https://squoosh.app) - Google's image optimizer
- **ImageOptim** (Mac) - Batch compression
- **RIOT** (Windows) - Advanced compression control
- **sharp** (npm) - Automated build-time compression

### 3. Descriptive Filenames

**❌ Bad:**
- `IMG_1234.jpg`
- `photo.png`
- `pic1.jpg`

**✅ Good:**
- `nerul-cemetery-peaceful-grounds.jpg`
- `cemetery-entrance-sector-2-nerul.jpg`
- `memorial-garden-navi-mumbai.jpg`

**Benefits:**
- Better SEO (filenames are ranking signals)
- Easier to manage
- Image search optimization

### 4. Alt Text Best Practices

**Structure:** [Main Subject] + [Key Details] + [Location]

**Examples:**

```jsx
// Hero Image
<Image 
  src="/hero-cemetery.jpg"
  alt="Peaceful Nerul Cemetery grounds at sunset with landscaped gardens and stone pathways in Sector 2, Navi Mumbai"
  width={1920}
  height={1080}
  priority
/>

// Entrance
<Image 
  src="/cemetery-entrance.jpg"
  alt="Main entrance gate of Nerul Cemetery on Baliram Hira Joshi Marg, Sector 2, Navi Mumbai"
  width={1200}
  height={800}
/>

// Gardens
<Image 
  src="/memorial-garden.jpg"
  alt="Beautifully maintained memorial garden with seasonal flowers at Nerul Cemetery"
  width={1200}
  height={800}
/>

// Walkways
<Image 
  src="/cemetery-walkways.jpg"
  alt="Serene tree-lined walkways providing shade and tranquility at Nerul Cemetery grounds"
  width={1200}
  height={800}
/>
```

**Alt Text Rules:**
- Be descriptive but concise (125 characters or less)
- Include relevant keywords naturally
- Don't start with "Image of..." or "Picture of..."
- Include location for local SEO
- Describe what's visible in the image
- If decorative only, use empty alt: `alt=""`

### 5. Responsive Images

**Next.js Image Component (Already Implemented):**

```jsx
import Image from 'next/image';

<Image 
  src="/hero-cemetery.jpg"
  alt="Peaceful grounds at Nerul Cemetery"
  fill // Fills parent container
  priority // Load immediately (above fold)
  quality={90} // 0-100, default 75
  sizes="100vw" // Responsive sizing
  className="object-cover"
/>
```

**Sizes attribute for optimal loading:**

```jsx
// Full width on mobile, 50% on desktop
sizes="(max-width: 768px) 100vw, 50vw"

// Gallery grid
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

### 6. Lazy Loading

**Next.js automatically lazy loads** images below the fold.

**Manual control:**
```jsx
// Hero image (above fold) - load immediately
<Image priority />

// Gallery images (below fold) - lazy load
<Image loading="lazy" />
```

### 7. Image Dimensions

**Always specify width and height** to prevent layout shift:

```jsx
// Static dimensions
<Image 
  src="/image.jpg"
  width={800}
  height={600}
  alt="..."
/>

// Fill parent (use with aspect ratio)
<div className="relative aspect-[4/3]">
  <Image 
    src="/image.jpg"
    fill
    alt="..."
  />
</div>
```

---

## Implementation Checklist

### Homepage Hero Image
- [x] Descriptive alt text added
- [ ] Image compressed to <200KB
- [ ] WebP format created
- [x] Priority loading enabled
- [x] Proper sizes attribute
- [ ] Actual image file uploaded (currently using placeholder)

### About Page
- [ ] Replace placeholder with actual grounds photo
- [ ] Add descriptive alt text
- [ ] Optimize image size
- [ ] Use 4:3 aspect ratio

### Gallery Page
- [ ] Add 10-15 high-quality photos
- [ ] Implement thumbnail grid
- [ ] Lightbox for full-size viewing
- [ ] All images compressed
- [ ] All images have descriptive alt text
- [ ] Implement lazy loading

### Contact Page
- [ ] Add map/location image (if needed)
- [ ] Optimize for mobile viewing

### Social Sharing (OG Images)
- [ ] Create og-image.jpg (1200x630px)
- [ ] Include cemetery photo + logo + tagline
- [ ] Optimize to <200KB
- [ ] Add to /public folder
- [ ] Verify in Facebook Debugger
- [ ] Verify in Twitter Card Validator

---

## Tools & Resources

### Image Compression
1. **TinyPNG** - https://tinypng.com
   - Drag & drop up to 20 images
   - Maintains quality while reducing size by 50-70%

2. **Squoosh** - https://squoosh.app
   - Advanced compression settings
   - Compare before/after
   - Multiple format exports

3. **ImageOptim** (Mac) - https://imageoptim.com
   - Batch processing
   - Multiple compression algorithms
   - Preserves metadata

4. **RIOT** (Windows) - https://riot-optimizer.com
   - Real-time preview
   - Quality slider
   - Multi-format support

### Format Conversion
1. **CloudConvert** - https://cloudconvert.com
   - Batch JPG to WebP conversion
   - Maintains quality

2. **XnConvert** - https://www.xnview.com/en/xnconvert/
   - Batch processing
   - Custom actions
   - Free and cross-platform

### Testing & Validation
1. **Google PageSpeed Insights** - https://pagespeed.web.dev/
   - Check image optimization score
   - Get specific recommendations

2. **WebPageTest** - https://www.webpagetest.org/
   - Detailed image loading analysis
   - Compare before/after optimization

3. **GTmetrix** - https://gtmetrix.com/
   - Image optimization report
   - Specific file recommendations

### SEO Testing
1. **Facebook Debugger** - https://developers.facebook.com/tools/debug/
   - Test OG images
   - Preview social sharing

2. **Twitter Card Validator** - https://cards-dev.twitter.com/validator
   - Test Twitter card images

3. **Google Rich Results Test** - https://search.google.com/test/rich-results
   - Verify schema markup images

---

## Next.js Image Optimization Features

### Automatic Optimizations
✅ **Already enabled in your site:**
- Automatic format selection (WebP when supported)
- Responsive image generation
- Lazy loading below the fold
- Blur placeholder during load
- Prevents Cumulative Layout Shift (CLS)

### Configuration (next.config.ts)

```typescript
const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'], // Modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon/thumbnail sizes
    minimumCacheTTL: 60, // Cache duration in seconds
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow external images if needed
      },
    ],
  },
};
```

### Performance Tips

1. **Use priority for above-fold images:**
```jsx
<Image src="/hero.jpg" priority />
```

2. **Optimize quality setting:**
```jsx
<Image src="/image.jpg" quality={85} /> // 75 is default
```

3. **Use placeholder blur:**
```jsx
<Image 
  src="/image.jpg"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Generate with tools
/>
```

---

## Recommended Image Set for Cemetery

### Essential Photos (Priority 1)

1. **Main Entrance** - Welcoming view
2. **Landscaped Grounds** - Showcase beauty
3. **Memorial Sections** - Show different areas
4. **Walkways** - Peaceful paths
5. **Gardens** - Seasonal flowers
6. **Overall Aerial View** - Show 15-acre expanse

### Additional Photos (Priority 2)

7. Office/Reception area
8. Seating areas for visitors
9. Different sections (if applicable)
10. Memorial plaques/monuments
11. Sunset/golden hour shots
12. Different seasons

### Photography Guidelines

**Best Times to Shoot:**
- Golden hour (early morning/late afternoon)
- Overcast days (soft, even lighting)
- After maintenance (grounds looking best)

**What to Capture:**
- Wide shots (show expanse)
- Detail shots (landscaping, care)
- Human scale (benches, paths)
- Seasonal changes
- Peaceful atmosphere

**What to Avoid:**
- Direct midday sun (harsh shadows)
- Individual graves (privacy)
- Cluttered backgrounds
- Overexposed skies

---

## Mobile Optimization

### Specific Considerations

1. **File Size Critical on Mobile:**
   - Target <100KB for hero images on mobile
   - Use responsive images with sizes attribute

2. **Aspect Ratios:**
   - Desktop: 16:9 (landscape)
   - Mobile: 4:3 or 1:1 (more vertical space)

3. **Touch Targets:**
   - Gallery thumbnails: minimum 48x48px
   - Ensure adequate spacing

---

## Accessibility

### Screen Readers
- All images must have descriptive alt text
- Decorative images: `alt=""` or `aria-hidden="true"`
- Complex images: Consider longer descriptions

### Color Contrast
- Ensure text overlays meet WCAG AA standards (4.5:1)
- Test with various image backgrounds

### Loading States
- Show skeleton/placeholder during load
- Avoid content jumping (specify dimensions)

---

## Performance Metrics

### Target Scores
- Google PageSpeed Mobile: 90+
- Google PageSpeed Desktop: 95+
- Largest Contentful Paint (LCP): <2.5s
- First Contentful Paint (FCP): <1.8s

### Current Status: To Be Measured
Run `npm run build && npm start` then test with:
1. Google PageSpeed Insights
2. Lighthouse in Chrome DevTools

---

## Quick Win Checklist

**Do These Now:**

- [ ] Run existing images through TinyPNG
- [ ] Convert all JPG to WebP
- [ ] Verify all alt text is descriptive
- [ ] Check OG image size is exactly 1200x630
- [ ] Test site on PageSpeed Insights
- [ ] Create actual hero image (replace placeholder)
- [ ] Add 5-10 gallery images

**Expected Results:**
- 30-40% faster page load
- Better SEO rankings (image search)
- Improved mobile performance
- Higher PageSpeed scores

---

**Last Updated:** November 22, 2025  
**Next Review:** When adding new images

For image editing services or professional photography, consult your design team.
