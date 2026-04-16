# Codebase Improvements

## Completed

- ✅ Break up App.tsx — extracted into types, data modules, reusable components, and section components
- ✅ Form handling — added useFormState hook with state management, validation, and submit flow (needs real API endpoint)
- ✅ Accessibility — added mobile nav drawer, modal keyboard trap + escape + focus management + ARIA roles, form labels, interactive selectable chips with aria-pressed/aria-checked
- ✅ Font loading — added Inter via Google Fonts in index.html
- ✅ Stronger TypeScript — added shared types, typed nav items, typed form data, typed inline arrays
- ✅ SEO — added Open Graph tags, Twitter card meta, canonical URL, JSON-LD structured data
- ✅ Added Church League Fastball to portfolio
- ✅ Portfolio screenshots — moved to static images in `public/portfolio/`, no more third-party dependency at runtime

## Remaining

### Wire up form submission
The useFormState hook and ConsultationModal currently simulate a submit with a timeout.
Wire up to an actual API endpoint or email service (e.g. Formspree, SendGrid, custom backend).

### Loading states
Portfolio images have an `onError` fallback but no loading skeleton or spinner.

### Tailwind class cleanup
Repeated patterns (dark cards, pill badges, CTA buttons, gradient shadows) could be extracted into reusable component variants or `@apply` abstractions.

### Routing
Everything is anchor links on a single page. If the site grows, consider React Router or similar.
