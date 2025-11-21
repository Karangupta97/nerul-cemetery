# Nerul Cemetery Website - SEO Optimization Guide

## Overview
This website has been fully optimized for SEO to ensure maximum visibility in search engines for cemetery and burial service searches in Navi Mumbai.

## SEO Features Implemented

### 1. **Meta Tags & Metadata**
- ✅ Comprehensive page titles with keyword optimization
- ✅ Detailed meta descriptions (150-160 characters)
- ✅ Keyword-rich content targeting local search
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card metadata
- ✅ Canonical URLs to prevent duplicate content

### 2. **Structured Data (JSON-LD)**
Located in: `app/components/StructuredData.tsx`

Implemented Schema.org types:
- **Cemetery Schema** - Main business type
- **LocalBusiness** - Local SEO optimization
- **Organization** - Brand identity
- **WebSite** - Site-wide structure
- **GeoCoordinates** - Location-based search
- **OpeningHoursSpecification** - Business hours
- **ContactPoint** - Multi-language support

### 3. **Technical SEO**

#### Sitemap (`app/sitemap.ts`)
- Auto-generated XML sitemap
- Priority and change frequency set for each page
- Accessible at: `https://nerulcemetery.com/sitemap.xml`

#### Robots.txt (`app/robots.ts`)
- Allows all search engines
- Sitemap reference included
- API routes protected

#### Performance Optimizations
- Font display: swap (prevents layout shift)
- Image optimization with Next.js Image component
- Lazy loading for below-the-fold content
- Proper image alt text

### 4. **Local SEO**
- Geographic metadata (coordinates, region)
- ICBM tags for mapping
- Local business schema
- Address structured data
- Phone number in international format
- Area served specification

### 5. **Keywords Targeted**

**Primary Keywords:**
- Nerul Cemetery
- Cemetery Navi Mumbai
- Burial services Nerul
- Funeral services Navi Mumbai

**Secondary Keywords:**
- Cemetery Sector 2 Nerul
- Burial ground Navi Mumbai
- Memorial services
- Dignified burial
- Christian cemetery Nerul
- 24/7 burial services

### 6. **Page-Specific Metadata**

Each page has custom metadata:
- `app/contact/metadata.ts` - Contact page
- `app/about/metadata.ts` - About page
- `app/gallery/metadata.ts` - Gallery page
- `app/notice/metadata.ts` - Notice board page

### 7. **Accessibility & Semantic HTML**
- Proper heading hierarchy (H1-H6)
- ARIA labels for navigation
- Alt text for all images
- Semantic HTML5 elements
- Role attributes where needed

## Setup Instructions

### 1. Update Domain
Replace `https://nerulcemetery.com` with your actual domain in:
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts`
- `app/robots.ts`
- `app/components/StructuredData.tsx`

### 2. Google Search Console
1. Add your domain to Google Search Console
2. Verify ownership using meta tag
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`
4. Update verification code in `app/layout.tsx`:
   ```typescript
   verification: {
     google: 'your-actual-verification-code',
   }
   ```

### 3. Social Media Image
Create an Open Graph image:
- Size: 1200x630 pixels
- Save as: `public/og-image.jpg`
- Should show cemetery grounds/logo

### 4. Favicon & Logo
Add these files to `/public`:
- `favicon.ico`
- `logo.png` (for structured data)
- `apple-touch-icon.png` (for iOS devices)

## Monitoring & Analytics

### Recommended Tools
1. **Google Search Console** - Track search performance
2. **Google Analytics 4** - User behavior tracking
3. **Google My Business** - Local business listing
4. **Bing Webmaster Tools** - Bing search optimization

### Add Google Analytics
Add to `app/layout.tsx` in the `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Local SEO Checklist

- [ ] Claim Google My Business listing
- [ ] Add business to Google Maps
- [ ] Register with local directories
- [ ] Create social media profiles (Facebook, Instagram)
- [ ] Get listed on Justdial, Sulekha
- [ ] Encourage customer reviews
- [ ] Create local backlinks

## Content Optimization

### Blog Ideas for SEO
1. "Complete Guide to Burial Services in Navi Mumbai"
2. "Understanding Cemetery Plots and Pricing"
3. "How to Plan a Memorial Service"
4. "Nerul Cemetery: History and Community Service"
5. "FAQ About Burial Services"

### Regular Updates
- Update Notice Board weekly
- Add new gallery images monthly
- Post seasonal messages
- Share community events

## Technical Checklist

- [x] Meta titles optimized (50-60 characters)
- [x] Meta descriptions (150-160 characters)
- [x] Structured data implemented
- [x] Sitemap generated
- [x] Robots.txt configured
- [x] Canonical URLs set
- [x] Mobile responsive
- [x] Fast loading speed
- [x] HTTPS enabled
- [x] Alt text on images
- [x] Semantic HTML
- [x] Internal linking
- [ ] Google Analytics added
- [ ] Google Search Console verified
- [ ] Social media profiles created
- [ ] Open Graph image created

## Contact Information in Structured Data

Ensure these are correct:
- **Phone**: +91 81049 52729
- **Email**: info@nerulcemetery.com
- **Address**: 6, Baliram Hira Joshi Marg, Sector 2, Nerul, Navi Mumbai, Maharashtra 400706
- **Coordinates**: 19.045899, 73.019477
- **Hours**: Mon-Sat: 8 AM - 6 PM, Sun: Closed

## Next Steps

1. **Deploy website** to production
2. **Submit to Google Search Console**
3. **Create Google My Business listing**
4. **Set up Google Analytics**
5. **Build local citations**
6. **Create social media pages**
7. **Start content marketing** (blog posts)
8. **Monitor rankings** and adjust

## Support

For technical SEO support or questions, refer to:
- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)

---

**Last Updated**: November 2025
**Website**: https://nerulcemetery.com
**Contact**: info@nerulcemetery.com
