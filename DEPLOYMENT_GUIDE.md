# SaunaFinder - Deployment Guide

## 🎉 Site Overview

**224 Files Generated:**
- 2 core files (styles.css, script.js)
- 2 main pages (index.html, directory.html)
- 195 individual listing pages
- 25 state pages

**Data Coverage:**
- 195 businesses across 25 states and 71 cities
- Categories: Infrared Sauna Studios, Contrast Therapy Studios, Cold Plunge Facilities, Recovery Studios, Bathhouses, Wellness Spas

---

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - FREE)
1. Push to GitHub repository
2. Connect to Netlify: https://app.netlify.com/
3. Deploy settings:
   - Build command: (none needed - static site)
   - Publish directory: `/`
4. Custom domain: Add your domain in Netlify DNS settings

### Option 2: Vercel (FREE)
1. Push to GitHub repository
2. Import to Vercel: https://vercel.com/
3. Auto-deploys on every push
4. Add custom domain in project settings

### Option 3: GitHub Pages (FREE)
1. Create GitHub repository
2. Push files to `main` branch
3. Enable GitHub Pages in repository settings
4. Site will be live at: `https://username.github.io/repo-name`

### Option 4: Cloudflare Pages (FREE)
1. Push to GitHub/GitLab
2. Connect to Cloudflare Pages
3. Deploy with one click
4. Lightning-fast CDN included

### Option 5: Static Web Hosting (AWS S3, DigitalOcean Spaces, etc.)
1. Upload all files to bucket/space
2. Enable static website hosting
3. Configure DNS to point to hosting URL

---

## 📂 File Structure

```
sauna-directory/
├── index.html              # Homepage with hero, stats, state grid, featured listings
├── directory.html          # Full listing page with search/filter
├── styles.css              # Modern dark theme CSS (no framework needed)
├── script.js               # Search/filter functionality
├── listings/               # 195 individual business pages
│   ├── perspire-sauna-studio-flatiron-new-york.html
│   ├── othership-flatiron-new-york.html
│   └── ... (193 more)
└── states/                 # 25 state-specific pages
    ├── ny.html
    ├── ca.html
    ├── tx.html
    └── ... (22 more)
```

---

## 💰 Monetization Features (Built-In)

### 1. **Claim Listing** (Every business page)
- Prominent CTA button on every listing
- Links to: `mailto:hello@saunadirectory.com?subject=Claim Listing - {Business Name}`
- Positioning: Below business details, hard to miss
- **Pricing suggestion**: $0-29/month for claimed listing

### 2. **Upgrade to Featured** (Every business page)
- Secondary CTA next to "Claim Listing"
- Links to: `mailto:hello@saunadirectory.com?subject=Upgrade Listing - {Business Name}`
- **Pricing**: $49/month (shown in button text)
- Featured badge CSS class ready: `.featured-badge`

### 3. **List Your Business** (Header nav on every page)
- Always visible in site header
- Links to: `mailto:hello@saunadirectory.com?subject=List My Business`
- **Pricing suggestion**: $99 one-time or $19/month for new listings

### 4. **Featured Listings** (Ready to implement)
- CSS class `.featured-badge` already styled (gold gradient)
- To activate: Add `<span class="featured-badge">Featured</span>` next to category badge
- Featured listings can be sorted to top of results

---

## 🎯 Next Steps to Activate Revenue

### Phase 1: Launch (Week 1)
1. Deploy site to Netlify/Vercel
2. Set up custom domain (e.g., saunafinder.com)
3. Set up email: hello@saunadirectory.com (use Zoho Mail free tier)
4. Create simple email templates for:
   - Claim listing requests
   - Featured upgrade inquiries
   - New listing submissions

### Phase 2: Collect Payments (Week 2)
Replace mailto links with payment flow:

**Option A: Stripe Payment Links (Easiest)**
1. Create Stripe products:
   - Claim Listing: $29/month (subscription)
   - Featured Upgrade: $49/month (subscription)
   - New Listing: $99 one-time or $19/month
2. Replace mailto links with Stripe payment links
3. Stripe sends payment confirmation → you update listing manually

**Option B: Gumroad (No code)**
1. Create products on Gumroad
2. Replace mailto with Gumroad product links
3. Gumroad handles payment, sends email notification

**Option C: Full Checkout (Later)**
- Build simple checkout form with Stripe Checkout
- Automate listing updates with webhook

### Phase 3: Automation (Month 2+)
1. **Google Form → Airtable → Site Regeneration**
   - Businesses submit via Google Form
   - Data flows to Airtable
   - Python script reads Airtable, regenerates site
   - Auto-deploy via GitHub Actions

2. **Admin Dashboard** (Optional, Month 3+)
   - Simple CMS to manage listings
   - Mark businesses as "Featured"
   - Add/edit/remove listings
   - Regenerate site with one click

---

## 📈 SEO Setup (Critical for Traffic)

### 1. Meta Tags (✅ Already included)
- Unique title tag per page
- Meta descriptions with location + services
- Open Graph tags for social sharing
- Schema.org LocalBusiness JSON-LD on every listing

### 2. Submit to Search Engines
```bash
# Create sitemap.xml (add to root)
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://saunafinder.com/</loc><priority>1.0</priority></url>
  <url><loc>https://saunafinder.com/directory.html</loc><priority>0.9</priority></url>
  <!-- Add all listing pages -->
  <!-- Add all state pages -->
</urlset>
```

Submit to:
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters

### 3. Google Business Profile
- Create GBP for "SaunaFinder" as a Service business
- Link to your site in profile
- Post updates weekly

---

## 🔧 Customization Guide

### Change Color Scheme
Edit `styles.css`:
```css
:root {
    --bg-dark: #0f0f0f;      /* Main background */
    --bg-card: #1a1a1a;      /* Card background */
    --accent: #00d4ff;       /* Primary accent (buttons, links) */
    --accent-hover: #00b8e6; /* Hover state */
    --text: #ffffff;         /* Main text */
    --text-dim: #a0a0a0;     /* Secondary text */
    --border: #333333;       /* Borders */
}
```

### Update Contact Email
Find/replace in all HTML files:
- `hello@saunadirectory.com` → `your@email.com`

Or use this command:
```bash
find . -name "*.html" -type f -exec sed -i 's/hello@saunadirectory.com/your@email.com/g' {} \;
```

### Add Google Analytics
Add before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📊 Traffic & Revenue Projections

### Conservative Estimates (6 months)
- **SEO Traffic**: 500-2,000 visitors/month
  - Long-tail keywords: "sauna studios in [city]"
  - Local searches: "[city] cold plunge facilities"
  - Low competition keywords

- **Conversion Rates**:
  - Claim Listing: 2-5% of visits to listing pages
  - Featured Upgrade: 10-20% of claimed listings
  - New Listings: 1-2 per month (organic discovery)

- **Revenue Potential**:
  - 20 claimed listings × $29/mo = $580/mo
  - 5 featured listings × $49/mo = $245/mo
  - 2 new listings × $99 = $198/mo
  - **Total: $1,023/month** (after 6 months of SEO)

### Growth Levers
1. **Backlinks**: Reach out to wellness blogs, sauna manufacturers, local news
2. **Reddit/HN**: Post launch story on r/SideProject, r/EntrepreneurRideAlong
3. **Directory Submissions**: Submit to startup directories (ProductHunt, BetaList)
4. **Social**: Create Instagram/Twitter, post weekly sauna/wellness content
5. **Partnerships**: Partner with sauna brands for referral fees

---

## 🐛 Common Issues & Fixes

### Issue: Links not working locally
**Fix**: Use a local server instead of opening HTML directly
```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

### Issue: Search/filter not working
**Fix**: Ensure script.js is loading. Check browser console for errors.

### Issue: Need to update CSV data
**Fix**: 
1. Edit `data/us_sauna_cold_plunge_directory.csv`
2. Run: `python3 tmp/generate_sauna_directory.py`
3. Re-deploy updated files

---

## 📞 Support & Updates

**Generator Script**: `tmp/generate_sauna_directory.py`
- Modify this script to change layout, add features, update design
- Re-run anytime to regenerate entire site from CSV

**CSV Data Source**: `data/us_sauna_cold_plunge_directory.csv`
- Add new businesses here
- Update existing business info
- Re-run generator script to publish changes

---

## ✅ Pre-Launch Checklist

- [ ] Deploy to hosting platform
- [ ] Set up custom domain
- [ ] Configure hello@saunadirectory.com email
- [ ] Test all mailto links work
- [ ] Test search/filter on directory page
- [ ] Test mobile responsiveness
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics
- [ ] Create social media accounts
- [ ] Write launch post for Reddit/HN
- [ ] Prepare email templates for inquiries

---

## 🚀 Launch Day

1. Post on Reddit r/SideProject with title: "Built a directory of every sauna/cold plunge studio in the US"
2. Share on Twitter/X with #BuildInPublic hashtag
3. Post on Hacker News "Show HN: SaunaFinder - Find sauna studios near you"
4. Email 5-10 businesses: "I listed your business on SaunaFinder for free, would you like to claim it?"
5. Post in wellness/biohacking Facebook groups

---

**Good luck! You've got a fully-functional, SEO-optimized, monetization-ready directory. Now execute! 🔥**
