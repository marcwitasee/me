# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Marc Richardson built with static HTML, CSS, and assets. The site showcases projects and includes an about page.

## Architecture
- **Static Website**: Pure HTML/CSS with no build process or dependencies
- **Structure**:
  - `index.html`: Main homepage with project portfolio
  - `about.html`: About page with personal information
  - `my-personal-site.css`: Single stylesheet for all styling
  - `images/`: Project screenshots, headshots, and icons
  - `assets/`: Resume PDF and other documents

## Development Workflow
- **No build process required**: Files can be edited directly and viewed in browser
- **Local development**: Open HTML files directly in browser or use a local server
- **Styling**: All CSS is in `my-personal-site.css` using flexbox layout system
- **Images**: Store in `images/` directory and reference with relative paths

## Design System
- **Color scheme**: Dark theme with GitHub-inspired colors (#0d1117 background, #c9d1d9 text)
- **Layout**: Flexbox-based responsive design with utility classes
- **Typography**: System font stack for cross-platform consistency
- **Navigation**: Simple button-based navigation between pages

## Key Files
- `index.html:18`: Main header with name and headshot
- `index.html:48-94`: Project showcase section with linked GitHub repositories
- `about.html:20-24`: Personal biography content
- `my-personal-site.css:10`: Main background color definition
- `my-personal-site.css:34-68`: Flexbox utility classes