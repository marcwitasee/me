module.exports = function(eleventyConfig) {
  // Copy static files directly to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Lets templates tell production builds apart (analytics only loads in production)
  eleventyConfig.addGlobalData("isProduction", process.env.ELEVENTY_ENV === 'production');

  // Add date formatting filter
  eleventyConfig.addFilter("dateDisplay", (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' });
  });

  // Add technology badge filter
  eleventyConfig.addFilter("techBadge", (tech) => {
    return tech.toLowerCase().replace(/\s+/g, '-');
  });

  // Keep only work entries of a given type (professional, independent, academic)
  eleventyConfig.addFilter("ofType", (items, type) => {
    return items.filter(item => item.data.type === type);
  });

  // All work entries (Markdown files in src/work/), ordered by the `order` front matter field
  eleventyConfig.addCollection("work", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/work/*.md")
      .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  eleventyConfig.addCollection("featuredWork", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/work/*.md")
      .filter(item => item.data.featured)
      .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/css/");

  // Set custom directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    // Set pathPrefix if deploying to a subdirectory.
    // When moving to a custom domain, change '/me' to '/' and update site.url in src/_data/site.json.
    pathPrefix: process.env.ELEVENTY_ENV === 'production' ? '/me' : '/'
  };
};
