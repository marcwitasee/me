# Marc Richardson Portfolio Website

A modern, professional portfolio website built with [Eleventy](https://www.11ty.dev/) (11ty) static site generator. Features a dark GitHub-inspired theme, responsive design, and easy content management through data files.

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
├── src/                      # Source files
│   ├── _data/               # Data files
│   │   ├── projects.json    # Project information
│   │   └── site.json        # Site metadata
│   ├── _includes/           # Reusable components
│   │   ├── header.njk       # Site header
│   │   └── project-card.njk # Project card component
│   ├── _layouts/            # Page layouts
│   │   └── base.njk         # Base HTML layout
│   ├── css/                 # Stylesheets
│   │   └── style.css        # Main stylesheet
│   ├── images/              # Image assets
│   ├── assets/              # Other assets (PDFs, etc.)
│   ├── index.njk            # Homepage
│   └── about.njk            # About page
├── _site/                   # Generated output (git ignored)
├── .eleventy.js             # 11ty configuration
├── package.json             # Node dependencies
└── README.md                # This file
```

## Adding New Projects

To add a new project to your portfolio:

1. Open `src/_data/projects.json`
2. Add a new project object to the array:

```json
{
  "title": "Your Project Title",
  "description": "Brief description of what the project does",
  "image": "/images/your-project-screenshot.png",
  "imageAlt": "Description of the screenshot",
  "githubUrl": "https://github.com/yourusername/project-repo",
  "technologies": ["Python", "Machine Learning", "AWS"],
  "date": "2024-01-01",
  "featured": true
}
```

3. Add your project screenshot to `src/images/`
4. The project will automatically appear on the homepage

### Project Fields

- **title**: Project name (required)
- **description**: Brief project description (required)
- **image**: Path to project screenshot (required)
- **imageAlt**: Alt text for accessibility (required)
- **githubUrl**: Link to GitHub repository (optional)
- **projectUrl**: Alternative link if not on GitHub (optional)
- **technologies**: Array of technologies used (required)
- **date**: Project date in YYYY-MM-DD format (required)
- **featured**: Boolean to highlight project (optional)

## Updating Site Information

Edit `src/_data/site.json` to update:
- Site title and description
- Your name and social links
- Navigation menu items

## Customizing Styles

The site uses CSS custom properties for easy theming. Edit `src/css/style.css` to modify:

- Colors: Update the `:root` variables
- Typography: Modify font families and sizes
- Spacing: Adjust padding and margins
- Animations: Customize transitions and effects

### Technology Badge Colors

Add new technology colors in the CSS:

```css
.tech-your-tech { 
  border-color: #yourcolor; 
  color: #yourcolor; 
}
```

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
2. Update the `pathPrefix` in `.eleventy.js` if needed
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

1. **Build fails**: Ensure all image paths in `projects.json` exist in `src/images/`
2. **Styles not loading**: Check that CSS file paths use the `url` filter
3. **Projects not showing**: Verify JSON syntax in `src/_data/projects.json`
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
