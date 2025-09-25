# Repository Guidelines

## Project Overview
- This repo hosts a single-page progressive web app that curates English-learning materials.
- Keep the project dependency-free; rely on native browser capabilities and lightweight CDNs only when absolutely necessary.
- Preserve the static nature of the site—avoid introducing build steps or server-side tooling.

## Contribution Workflow
1. Create focused commits with descriptive messages.
2. Preview `index.html` in a browser to validate layout, color, and interactive changes.
3. Run Lighthouse or browser accessibility inspectors when you touch structure or styling that could affect usability.
4. Document any manual testing steps in the PR description so reviewers can replicate them quickly.

## Code Style
- Use two-space indentation for HTML, inline CSS, and JavaScript snippets.
- Prefer semantic HTML elements (`section`, `article`, `nav`, etc.) to improve accessibility and SEO.
- Keep inline styles minimal; group related CSS rules together inside the `<style>` block near the top of `index.html`.
- When adding JavaScript, place it near the bottom of the file in an existing `<script>` block and avoid global namespace pollution.

## Visual & Content Guidelines
- Favor high-contrast color combinations and check against WCAG AA standards when adjusting palettes.
- Maintain consistent badge shapes, spacing, and typography with the current design language.
- Use concise Traditional Chinese copy with accompanying English terms when appropriate to reinforce learning.
- Provide descriptive `alt` text for all images and icons.

## Assets & File Organization
- Store new icons or imagery under `icons/` and reference them with relative paths.
- Optimize assets (SVG preferred) to keep the PWA lightweight and responsive.
- Update `manifest.webmanifest` if you add icons or change app metadata.

## Review Checklist
- [ ] HTML validates without console errors.
- [ ] Styles render correctly on mobile and desktop breakpoints.
- [ ] Interactive elements remain keyboard-accessible and focus-visible.
- [ ] Offline experience still works—update `sw.js` if asset URLs change.

Manual verification in a browser is acceptable; there are currently no automated test commands to run.
