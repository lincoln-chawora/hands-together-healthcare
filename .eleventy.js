const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const {minify} = require("terser");

module.exports = function(eleventyConfig) {
  // Pages to ignore.
  eleventyConfig.ignores.add("./src/pages/our-staff.njk");
  eleventyConfig.ignores.add("./src/pages/blog.njk");
  eleventyConfig.ignores.add("./src/blog/posts/*.md");

  // Get alpineJs code into assets folder.
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './assets/alpine.js',
  })

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/img')

  // Add js minification filter.
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
      code,
      callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yy-MM-dd');
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
  return DateTime.fromJSDate(dateObj, {
    zone: 'utc'
  }).toFormat("dd-MM-yy");
  });

  return {
    dir: { input: 'src', output: '_site' }
  };
};
