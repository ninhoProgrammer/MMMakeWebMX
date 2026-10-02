<div align="center">
  <h1 style="font-size: 3em; font-weight: bold; margin: 20px 0;">MM make web website</h1>
</div>

![banner](src/images/rocket.webp)

# MMWEBMX

Corporate website and digital services site for MMWEBMX, built with Astro and Tailwind CSS. The project is designed as a modern landing page to present the brand, services, experience, and contact information.

## Description

MMWEBMX is a brand focused on web design, digital development, and solutions for businesses that need a stronger, more modern, and functional online presence. This project includes:

- main landing page with visual hero and brand narrative
- about us section / company identity
- services and specialties
- featured content block
- contact section to generate leads and inquiries
- multi-page navigation with responsive design

## Technologies

- [Astro](https://astro.build) — static site generation and modular structure
- [Tailwind CSS](https://tailwindcss.com/) — fast, responsive styling
- [GSAP](https://gsap.com/) — smooth animations and motion effects
- [Node.js](https://nodejs.org/) — runtime environment for the project

## Project structure

```bash
src/
├── components/     # reusable blocks: Hero, About, Services, Contact, etc.
├── layouts/        # shared page layouts
├── images/         # project images
├── pages/          # main routes: home, about, services, contact, blog
├── styles/         # global styles
├── assets/         # project assets
├── lib/            # utilities and helpers
└── scripts/        # auxiliary scripts
public/             # static public files
astro.config.mjs    # Astro configuration
package.json        # scripts and dependencies
```

## Requirements

- Node.js 22.12 or higher
- npm

## Installation

```bash
npm install
```

## Local development

Run the project in development mode:

```bash
astro dev --background
```

You can manage the server with:

```bash
astro dev stop
astro dev status
astro dev logs
```

You can also start it with the standard script:

```bash
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Main features

- responsive design for desktop and mobile
- modular structure for maintaining and scaling content
- modern animations with GSAP
- clear navigation with service and contact sections
- premium visual approach for digital branding
- Astro compatibility for optimized performance

## Main pages

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/contact` — Contact
- `/blog` — Blog

## Author

MMWEBMX

## Contact

- LinkedIn: [Mario Hernández](https://www.linkedin.com/in/it-mario-hernández/)
- GitHub: [MakeWebMX](https://github.com/MakeWebMX)

## License

Copyright (c) 2024 Designed & Developed by [MakeWeb](https://github.com/MakeWebMX)

This project is licensed under the terms of the MIT License. See the [MIT License](LICENSE).