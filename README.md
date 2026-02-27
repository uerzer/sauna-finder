# 🔥 SaunaFinder - US Sauna & Cold Plunge Directory

A complete, SEO-optimized static directory website for sauna studios and cold plunge facilities across the United States. Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, ready to deploy.

## 📊 What's Included

- **224 HTML pages** generated from CSV data
- **195 business listings** across 25 states and 71 cities
- **25 state-specific pages** for local SEO
- **Mobile-responsive design** with modern dark theme
- **Built-in monetization** with Claim/Featured CTAs
- **SEO-optimized** with meta tags, Schema.org markup, and semantic HTML

## 🎨 Design Features

- **Dark, modern aesthetic** (#0f0f0f background, electric blue #00d4ff accents)
- **Wellness/spa vibe** meets modern tech design
- **Card-based layout** for easy scanning
- **Real-time search & filtering** on directory page
- **State browsing grid** for geographic exploration
- **Featured listings section** on homepage

## 💰 Monetization Ready

Three revenue streams built into every page:

1. **Claim Listing** - $29/month (CTA on every business page)
2. **Upgrade to Featured** - $49/month (Secondary CTA on every business page)
3. **List Your Business** - $99 one-time (Header navigation on all pages)

All CTAs use mailto links for immediate launch — swap with Stripe/Gumroad payment links when ready to scale.

## 🚀 Quick Start

### Deploy Now (Free Hosting)

**Netlify** (Easiest):
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/saunafinder.git
git push -u origin main

# 2. Go to netlify.com
# 3. Click "Add new site" > "Import from Git"
# 4. Connect GitHub repo
# 5. Deploy (auto-detects static site)
```

**GitHub Pages**:
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/saunafinder.git
git push -u origin main

# 2. Go to repo Settings > Pages
# 3. Select "main" branch
# 4. Save — site live at https://yourusername.github.io/saunafinder
```

**Vercel**:
```bash
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import repository
# 4. Deploy (one click)
```

### Run Locally

```bash
# Start local server
python3 -m http.server 8000

# Visit in browser
open http://localhost:8000
```

## 📂 File Structure

```
sauna-directory/
├── index.html              # Homepage with hero, stats, featured listings
├── directory.html          # Full directory with search/filter
├── styles.css              # Modern CSS (8KB, no framework needed)
├── script.js               # Search/filter logic (1.6KB)
├── listings/               # 195 individual business pages
│   ├── othership-flatiron-new-york.html
│   ├── perspire-sauna-studio-atlanta-atlanta.html
│   └── ...
├── states/                 # 25 state pages
│   ├── ny.html
│   ├── ca.html
│   └── ...
├── DEPLOYMENT_GUIDE.md     # Full deployment & monetization guide
└── README.md               # This file
```

## 🔧 Regenerate Site from CSV

Update data or design by editing CSV and re-running generator:

```bash
# 1. Edit data source
nano /home/user/files/data/us_sauna_cold_plunge_directory.csv

# 2. Regenerate all pages
python3 /home/user/files/tmp/generate_sauna_directory.py

# 3. Re-deploy (git push or upload to host)
```

## 📈 SEO Features

- ✅ Unique title tags per page
- ✅ Meta descriptions with location keywords
- ✅ Open Graph tags for social sharing
- ✅ Schema.org LocalBusiness JSON-LD on listings
- ✅ Semantic HTML structure
- ✅ Mobile-responsive (Google ranking factor)
- ✅ Fast loading (pure CSS, minimal JS)

### SEO Title Examples:
- Homepage: "SaunaFinder - Find Sauna Studios & Cold Plunge Facilities Near You"
- Listing: "Othership Flatiron - Sauna & Cold Plunge in New York, NY | SaunaFinder"
- State: "Best Sauna Studios & Cold Plunge in California | SaunaFinder"

## 🎯 Business Categories Covered

- Infrared Sauna Studios
- Contrast Therapy Studios
- Cold Plunge Facilities
- Recovery Studios
- Bathhouses & Wellness Spas
- Float Therapy Centers
- Fitness & Wellness Clubs

## 📊 Traffic Potential

**Target Keywords** (Low competition):
- "sauna studios in [city]"
- "[city] cold plunge facilities"
- "infrared sauna near me"
- "contrast therapy [location]"

**Conservative 6-Month Projection**:
- 500-2,000 organic visitors/month
- 10-30 inquiries/month
- $500-1,500/month revenue

## 🛠 Customization

### Change Colors
Edit `styles.css`:
```css
:root {
    --bg-dark: #0f0f0f;      /* Main background */
    --accent: #00d4ff;       /* Buttons, links, accents */
}
```

### Update Email
Find/replace in all files:
```bash
find . -name "*.html" -type f -exec sed -i 's/hello@saunadirectory.com/your@email.com/g' {} \;
```

### Add Analytics
Add before `</head>` in all HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 💡 Next Steps

1. **Deploy** to Netlify/Vercel (10 minutes)
2. **Set up email** hello@saunadirectory.com (use Zoho Mail free tier)
3. **Submit sitemap** to Google Search Console
4. **Launch post** on Reddit r/SideProject
5. **Email 10 businesses** offering free claim for testimonial
6. **Replace mailto** with Stripe payment links (when ready to charge)

## 📞 Support

- **Deployment issues?** See `DEPLOYMENT_GUIDE.md`
- **Want to modify design?** Edit `tmp/generate_sauna_directory.py` and regenerate
- **Need to add businesses?** Edit CSV, re-run generator

## 📜 License

This is your project — do whatever you want with it. No attribution needed.

## 🎉 Built With

- Pure HTML5, CSS3, JavaScript
- No frameworks, no build process, no dependencies
- Regenerated from CSV with Python script
- Ready to deploy anywhere static sites are hosted

---

**Launch this today. Get your first paid customer this week. Scale from there.** 🚀
