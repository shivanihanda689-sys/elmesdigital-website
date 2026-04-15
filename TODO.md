# Codebase Improvements

Tracked here until we can implement properly. These are known issues with the
current state of the site, mostly stemming from the entire app living in a
single ChatGPT-generated file.

## High Priority

### Break up App.tsx
The file is ~1100 lines with all data, components, and sections in one place.
- Extract section components (Hero, OurStory, Wineries, Portfolio, etc.) into `src/components/sections/`
- Move data arrays (features, stats, portfolioItems, testimonials, processSteps, storySections) into `src/data/` or `src/constants.ts`
- Move reusable components (LogoMark, SectionHeading, StoryVisual, BrandBackdrop, PortfolioCard) into `src/components/`

### Form handling
Contact forms and consultation modal have no logic behind them.
- Add form state management
- Add input validation
- Wire up actual submission (API endpoint, email service, etc.)
- Add success/error feedback to the user

### Accessibility
- Mobile menu button does nothing — needs a nav drawer
- Consultation modal: no `role="dialog"`, no `aria-modal`, no keyboard trap, no escape-key close
- Form inputs have no `<label>` elements
- Option chips (budget, timeline, services) are plain `<div>`s — need to be interactive, keyboard-navigable, with proper ARIA roles

## Medium Priority

### Font loading
LogoMark SVG references Inter but it's never loaded. Add a Google Fonts link or `@font-face` declaration so it doesn't silently fall back to Arial.

### Tailwind class cleanup
Repeated patterns (dark cards, pill badges, CTA buttons, gradient shadows) should be extracted into reusable component variants or `@apply` abstractions.

### Stronger TypeScript usage
- Nav items are untyped `string[][]` — should be typed objects
- Inline tuple arrays (winery cards, "who we work with" cards) are untyped
- Form data has no types at all

### SEO
For a marketing agency site, SEO is minimal:
- No Open Graph / social meta tags
- No structured data (JSON-LD)
- No sitemap
- No canonical URL

## Low Priority

### Portfolio screenshots
Currently relies on `api.microlink.io` for live screenshots. This third-party service could rate-limit, go down, or change. Replace with static images we control.

### Loading states
Portfolio images have an `onError` fallback but no loading skeleton or spinner. Rest of the app assumes perfect renders.

### Routing
Everything is anchor links on a single massive page. If the site grows, consider React Router or similar.
