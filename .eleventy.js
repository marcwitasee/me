module.exports = function(eleventyConfig) {
  // Copy static files directly to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({"src/favicon.ico": "/"});

  // Add date formatting filter
  eleventyConfig.addFilter("dateDisplay", (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  });

  // Add technology badge filter
  eleventyConfig.addFilter("techBadge", (tech) => {
    return tech.toLowerCase().replace(/\s+/g, '-');
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
    // Set pathPrefix if deploying to a subdirectory
    // Update this to match your repository name
    pathPrefix: process.env.ELEVENTY_ENV === 'production' ? '/me' : '/'
  };
};