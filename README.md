# MAC RoboMaster Website

Official website of **MAC RoboMaster**, McMaster University's student-led RoboMaster team.

The site is published with GitHub Pages at [macrobomaster.com](https://macrobomaster.com).

## About the project

This repository contains a framework-free static website built with HTML, CSS, and JavaScript. It does not require a package manager, build command, database, or server-side application.

The current design was updated for the 2026–2027 season and includes:

- New navigation and page layouts
- Current competition fleet showcase
- Previous-generation robot archive
- Current team, advisors, co-founders, and alumni
- Sponsor information and donation options
- Recruitment information and application reminders
- Mobile and reduced-motion accessibility support

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Homepage, featured fleet, team introduction, and season schedule |
| `Robots.html` | Current fleet and previous-generation robot archive |
| `Team.html` | Current team, advisors, former seasons, co-founders, and alumni |
| `Sponsor.html` | Sponsors, partnership information, and donations |
| `Contact.html` | Contact information, location, and social links |
| `apply.html` | Recruitment overview and team roles |
| `sorry.html` | Applications-closed page and recruitment reminder form |

## Project structure

```text
.
├── index.html
├── Robots.html
├── Team.html
├── Sponsor.html
├── Contact.html
├── apply.html
├── sorry.html
├── CNAME
└── assets
    ├── css
    │   └── modern-site.css
    ├── js
    │   └── modern-site.js
    ├── files
    ├── fonts
    └── img
        ├── faces
        ├── projects
        ├── sponsors
        └── videos
```

The secondary pages share `assets/css/modern-site.css` and `assets/js/modern-site.js`. The homepage contains additional styles for its video hero, featured fleet, and season timeline.

## Updating content

### Current robots

The current fleet appears in both:

- `index.html`
- `Robots.html`

When a robot name, image, or description changes, update both locations to keep the homepage and archive consistent.

Robot artwork belongs in:

```text
assets/img/projects/
```

Use SVG when possible. PNG images should have a transparent background and enough resolution to remain sharp on large screens.

### Previous-generation robots

Update the `Previous generations` section in `Robots.html`. Archive cards are ordered newest-first.

Recommended filenames include the season year:

```text
26_neo_standard.svg
25_hero.svg
24_sentry.svg
23_engineer.svg
```

### Team members

Update `Team.html` and add portraits to:

```text
assets/img/faces/
```

Current team members use larger portrait cards. Former seasons, co-founders, and alumni use compact cards with a small portrait on the right. When a LinkedIn profile is available, wrap the portrait in an external link using:

```html
<a href="https://www.linkedin.com/in/example/"
   target="_blank"
   rel="noopener">
  <img class="compact-photo"
       src="assets/img/faces/example.jpg"
       alt="Team member name">
</a>
```

### Recruitment

- General recruitment information is maintained in `apply.html`.
- Application status and the reminder form are maintained in `sorry.html`.
- Reminder emails are submitted to Google Forms and must not be stored in this repository.

### Sponsors

Sponsor logos belong in:

```text
assets/img/sponsors/
```

Update sponsor tiers and donation information in `Sponsor.html`. Sponsorship PDFs belong in `assets/files/`.

## Development guidelines

- Keep the site compatible with GitHub Pages.
- Do not add secrets, API credentials, email lists, or personal response data to the repository.
- Use relative paths for internal pages and assets.
- Add meaningful `alt` text to content images.
- Add `rel="noopener"` to links that use `target="_blank"`.
- Test changes on desktop and mobile widths.
- Check navigation links on every page after adding or renaming a page.
- Optimize large images and videos before committing them.

## Contact

For website or team inquiries:

[macrobomaster@gmail.com](mailto:macrobomaster@gmail.com)
