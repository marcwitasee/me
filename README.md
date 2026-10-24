# Marc Richardson Portfolio Website

A living resume and project portfolio built with [Eleventy](https://www.11ty.dev/) (11ty) static site generator. Features a dark GitHub-inspired theme, responsive design, and easy content management through data files.

## Features

- **Static Site Generation**: Built with 11ty for fast performance and easy deployment
- **Data-Driven Projects**: Manage projects through a simple JSON file
- **Modern Design**: Dark theme with professional styling and smooth animations
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **Technology Badges**: Visual tags for each project's tech stack
- **GitHub Pages Ready**: Automated deployment workflow included
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Quick Start

### Prerequisites

- Node.js 16+ and npm installed on your system

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marcwitasee/me.git
cd me
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser to `http://localhost:8080`

## Project Structure

```
me/
├── src/
│   ├── _data/
│   │   ├── site.json          # Name, headline, links, nav, "last updated" date
│   │   ├── impact.json        # Numbers in the home page impact strip
│   │   ├── experience.json    # Home page experience timeline
│   │   └── publications.json  # Publications page and resume list
│   ├── _includes/project-card.njk
│   ├── _layouts/
│   │   ├── base.njk           # Nav, footer, page shell
│   │   └── project.njk        # Case study page template
│   ├── work/                  # One Markdown file per project
│   ├── js/work-filter.js      # Filter buttons on the Work page
│   ├── css/style.css
│   ├── images/
│   ├── assets/resume.pdf      # Resume PDF linked across the site
│   ├── index.njk              # Home (recruiter overview)
│   ├── work.njk               # /work/ catalog
│   ├── publications.njk
│   ├── about.njk
│   └── resume.njk             # HTML resume
└── .eleventy.js
```

## Adding a Project

Add a Markdown file to `src/work/`. It shows up on the Work page automatically, and on the home page if `featured: true`.

```markdown
---
layout: project.njk
title: "What the project answered or delivered"
summary: "One or two sentences for the card and the top of the page."
type: professional        # professional | independent | academic
org: Company or context
role: Your role
dates: "Jan 2026 – Mar 2026"
order: 7                  # lower numbers sort first
featured: true            # show on the home page
highlight: "One headline result for the card."
technologies: ["Python", "AWS"]
metrics:
  - { value: "40%", label: "what the number means" }
links:
  - { label: "Code on GitHub", url: "https://github.com/..." }
---

## The problem
## My role
## What I did
## Results
```

For a project that only links elsewhere (no case study page), set `externalUrl`, `externalLabel` and `permalink: false`, and add `image` / `imageAlt` for a thumbnail.

When you add something, bump `updated` in `src/_data/site.json` so the footer date stays current.

## Customizing Styles

The site uses CSS custom properties for easy theming. Edit `src/css/style.css` to modify:

- Colors: Update the `:root` variables
- Typography: Modify font families and sizes
- Spacing: Adjust padding and margins
- Animations: Customize transitions and effects

### Type Badge Colors

The Professional / Independent / Academic badge colors are the `--color-professional`, `--color-independent` and `--color-academic` variables in `:root`.

## Development Commands

```bash
# Start development server with live reload
npm start

# Build for production
npm run build

# Build for local testing (without pathPrefix)
npm run build:local

# Clean build directory
npm run clean
```

## Deployment

### GitHub Pages (Automatic)

The site is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` or `master` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://yourusername.github.io/repository-name`

### Manual Deployment

To deploy manually to any static host:

1. Build the site:
```bash
npm run build
```

2. Upload the contents of `_site/` to your web server

### Custom Domain

To use a custom domain with GitHub Pages:

1. Create a `CNAME` file in the `src/` directory with your domain
2. Change `pathPrefix` in `.eleventy.js` from `'/me'` to `'/'` and update `url` in `src/_data/site.json`
3. Configure your domain's DNS settings

## Configuration

### 11ty Configuration

Edit `.eleventy.js` to:
- Add new plugins
- Configure build options
- Add custom filters
- Modify input/output directories

### Path Prefix

If deploying to a subdirectory, update the `pathPrefix` in `.eleventy.js`:

```javascript
pathPrefix: process.env.ELEVENTY_ENV === 'production' ? '/your-subdirectory' : '/'
```

## Troubleshooting

### Common Issues

1. **Build fails**: Ensure image paths in `src/work/*.md` exist in `src/images/`
2. **Styles not loading**: Check that CSS file paths use the `url` filter
3. **Projects not showing**: Check the front matter in `src/work/*.md` (YAML syntax, `type` value)
4. **Deploy fails**: Check GitHub Actions logs for specific errors

### Development Tips

- Use `npm run clean` if you encounter stale build issues
- The development server auto-reloads on file changes
- Check the terminal for 11ty build errors
- Use browser dev tools to debug CSS issues

## Contributing

Feel free to fork this repository and customize it for your own portfolio!

## License

This project is open source and available under the MIT License.
