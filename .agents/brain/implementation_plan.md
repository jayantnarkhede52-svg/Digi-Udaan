# Comprehensive Mobile Optimization

Mobile is the primary lead channel. Every page must be butter-smooth on phones.

## Audit Findings

| Component | Issue | Fix |
|---|---|---|
| **index.css** | Only 1 breakpoint (768px), no global mobile typography | Add mobile-first responsive rules |
| **HomePage** | ROI calculator 2-col grid breaks on mobile | Stack to 1 column |
| **HomePage** | Stats grid `minmax(300px)` overflows small screens | Lower to `minmax(250px)` |
| **HomePage** | Hero text `minHeight: 150px` wastes space on mobile | Reduce on mobile |
| **HomePage** | Hero `textAlign: left` fights CSS `text-align: center` | Use CSS class |
| **ServicesPage** | 2-col alternating grid completely breaks on mobile | Stack to 1 column, hide duplicate images |
| **ServicesPage** | Image `height: 500px` is too tall on mobile | Auto height |
| **PricingPage** | 3-col pricing grid overflows on mobile | Stack to 1 column |
| **PricingPage** | Tab buttons `padding: 16px 30px` too large on mobile | Smaller padding |
| **PricingPage** | `scale(1.05)` on popular card overflows on mobile | Remove transform on mobile |
| **ContactPage** | 2-col layout completely breaks on mobile | Stack to 1 column |
| **ContactPage** | Form inner 2-col grid breaks | Stack to 1 column |
| **AboutPage** | 2-col layout breaks on mobile | Stack to 1 column |
| **BlogPage** | `minmax(350px)` overflows small screens | Lower to `minmax(280px)` |
| **Chatbot** | Fixed `width: 350px` overflows on small phones | Full-width on mobile |
| **CatMascot** | Overlaps with chatbot on mobile, mouse-based | Hide on mobile |
| **Navbar** | No touch-optimized tap targets | Increase touch areas |
| **All pages** | Large font sizes (42-56px) don't scale on mobile | Use `clamp()` |
| **All pages** | Section padding `100px 8%` too much vertically on mobile | Reduce to 60px |

## Proposed Changes

### Global CSS (`index.css`)

#### [MODIFY] [index.css](file:///c:/work/WEBSITE%20DIGIFIRM/src/index.css)
- Expand `@media (max-width: 768px)` with comprehensive rules for every page section
- Add mobile utility classes: `.mobile-stack`, `.mobile-hide`, `.mobile-full-width`
- Add responsive typography scales, touch-friendly inputs, smooth scrolling
- Add viewport meta tag optimizations in HTML
- Add `-webkit-tap-highlight-color: transparent` for cleaner touch feedback
- Add `touch-action: manipulation` for faster tap response (no 300ms delay)

---

### Pages

#### [MODIFY] [HomePage.tsx](file:///c:/work/WEBSITE%20DIGIFIRM/src/pages/HomePage.tsx)
- Add CSS classes to grids for responsive control
- ROI calculator: `gridTemplateColumns: "1fr 1fr"` → use class that stacks on mobile
- Stats grid: lower `minmax` from 300 to 250px
- Remove `minHeight: 150px` on hero h1 (use CSS)
- Scale down font sizes with `clamp()`

#### [MODIFY] [ServicesPage.tsx](file:///c:/work/WEBSITE%20DIGIFIRM/src/pages/ServicesPage.tsx)
- Service detail grid: use CSS class that stacks on mobile (1 col)
- Image container: remove fixed `height: 500px`, use `auto` on mobile
- Benefits grid (2-col): stack to 1-col on mobile

#### [MODIFY] [PricingPage.tsx](file:///c:/work/WEBSITE%20DIGIFIRM/src/pages/PricingPage.tsx)
- Pricing cards grid: stack to 1-col on mobile using className
- Tab buttons: smaller on mobile (CSS class)
- Remove `scale(1.05)` transform on mobile for popular card
- Reduce card padding from 40px to 24px on mobile

#### [MODIFY] [ContactPage.tsx](file:///c:/work/WEBSITE%20DIGIFIRM/src/pages/ContactPage.tsx)
- Main grid: stack to 1-col on mobile using className
- Form `name/email` grid: stack to 1-col on mobile
- Form padding: reduce from 50px to 24px

#### [MODIFY] [AboutPage.tsx](file:///c:/work/WEBSITE%20DIGIFIRM/src/pages/AboutPage.tsx)
- Main 2-col grid: stack to 1-col on mobile
- Heading font size: use `clamp()`

#### [MODIFY] [BlogPage.tsx](file:///c:/work/WEBSITE%20DIGIFIRM/src/pages/BlogPage.tsx)
- Grid `minmax(350px)` → `minmax(280px)` or 1-col on mobile

---

### Components

#### [MODIFY] [Chatbot.tsx](file:///c:/work/WEBSITE%20DIGIFIRM/src/components/Chatbot.tsx)
- Chatbot window: full-width on mobile (left:10px, right:10px, width:auto)
- Raise z-index above mascot
- Touch-friendly button sizes

#### [MODIFY] [CatMascot.tsx](file:///c:/work/WEBSITE%20DIGIFIRM/src/components/CatMascot.tsx)
- Hide on mobile (no mouse on touch devices, overlap with chatbot)

#### [MODIFY] [Layout.tsx](file:///c:/work/WEBSITE%20DIGIFIRM/src/components/Layout.tsx)
- Reduce `paddingTop` from 80px to 70px on mobile via CSS

#### [MODIFY] [index.html](file:///c:/work/WEBSITE%20DIGIFIRM/index.html)
- Add mobile-optimized viewport meta tag

## Verification Plan

### Browser Testing
- Preview in mobile viewport (375px width) using browser dev tools
- Run Lighthouse mobile audit for performance score
- Navigate all pages and verify no horizontal overflow
- Test chatbot on mobile (full-width, touch-friendly)
