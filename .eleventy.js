const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = function (eleventyConfig) {

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy({"public/": "/"});

  const cacheBusterOptions = {};
  eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));

  eleventyConfig.ignores.add("README.md");

  return {
    dir: {
      input: 'content'
    },
  };

};