// Global Config
const config = require('./_data/site.json');

// Utils
const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");
const UglifyJS = require("uglify-es");

// 11ty Plugins
const eleventyNavigation = require("@11ty/eleventy-navigation");
const eleventyEmbedEverything = require("eleventy-plugin-embed-everything");
const eleventyToc = require('eleventy-plugin-nesting-toc');
const eleventySvgContents = require("eleventy-plugin-svg-contents");

module.exports = function(eleventyConfig) {

  // Register 11ty plugins
  eleventyConfig.addPlugin(eleventyEmbedEverything);
  eleventyConfig.addPlugin(eleventyNavigation); // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyToc); // Nesting (Aside) TOC https://github.com/JordanShurmer/eleventy-plugin-nesting-toc
  eleventyConfig.addPlugin(eleventySvgContents);

  // Register Shortcodes
  // Site Version
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });
  // Responsive image shortcode
  eleventyConfig.addLiquidShortcode("image", async function(src, alt, sizes = "100vw") {
    if(alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
    }
    src = './content/images/'+src
    let metadata = await Image(src, {
      widths: [400, 600, 800, 1000, 1200, 1400, 1600, 1900],
      formats: ['webp', 'jpeg', 'png'],
      urlPath: "/content/images/",
      outputDir: "./_site/content/images/"
    });

    let lowsrc = metadata.jpeg[0];

    let picture = `<picture>
      ${Object.values(metadata).map(imageFormat => {
        return `  <source type="image/${imageFormat[0].format}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
        <img
          data-src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}">
      </picture>`;

      return `${picture}`;

  });
  // Icon image
  eleventyConfig.addLiquidShortcode("icon", function(title,url) {
    return '<img class="icon" src="'+url+'" alt="'+title+'" />';
  });

  // Libraries: Tailwind & Alpine
  // Tailwind passthrough and watch target
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  // Alpine.js passthrough
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
  });

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Collections
   // Creates custom collection "pages"
   eleventyConfig.addCollection("pages", function(collection) {
    return collection.getFilteredByGlob("pages/*.md");
   });
   // Creates custom collection "docs"
   eleventyConfig.addCollection("docs", function(collection) {
    return collection.getFilteredByGlob("pages/docs/*.md");
   });

   // Creates custom collection "results" for search
   const searchFilter = require("./filters/searchFilter");
   eleventyConfig.addFilter("search", searchFilter);
   eleventyConfig.addCollection("results", collection => {
    return [...collection.getFilteredByGlob("**/*.md")];
   });

   // Creates custom collection "menuItems"
   eleventyConfig.addCollection("menuItems", collection =>
    collection
      .getAll()
      .filter(function(item) {
        return "eleventyNavigation" in item.data;
      })
      .sort((a, b) => {
        return (a.data.eleventyNavigation.order || 0) - (b.data.eleventyNavigation.order || 0);
      })
  );

  // Filters
  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("LLL dd, yyyy");
  });
  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {

    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Output
  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  // Minify JS
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });
  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("images/")
  eleventyConfig.addPassthroughCopy("content/images/")
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({"./_includes/assets/": "./assets/"});

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let mdIterator = require('markdown-it-for-inline');
  let markdownItAnchor = require("markdown-it-anchor");
  let markdownItEmoji = require("markdown-it-emoji");
  let markdownItFootnote = require("markdown-it-footnote");
  let markdownItContainer = require("markdown-it-container");
  let markdownLinkifyImages = require('markdown-it-linkify-images');
  let markdownItTasks = require('markdown-it-task-lists');
  let markdownItAttrs = require("markdown-it-attrs");
  let markdownItCenterText = require("markdown-it-center-text");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(mdIterator, 'url_new_win', 'link_open', function (tokens, idx) {
      const [attrName, href] = tokens[idx].attrs.find(attr => attr[0] === 'href')
      if (href && (!href.includes(config.url) && !href.startsWith('/') && !href.startsWith('#'))) {
        tokens[idx].attrPush([ 'target', '_blank' ])
        tokens[idx].attrPush([ 'rel', 'noopener noreferrer' ])
      }
    })
    .use(markdownItAnchor, {
      // https://www.npmjs.com/package/markdown-it-anchor
      permalink: true,
      permalinkBefore: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#"
    })
    .use(markdownItEmoji)
    .use(markdownItFootnote)
    .use(markdownItContainer, 'callout')
    .use(markdownItContainer, 'callout-blue')
    .use(markdownItContainer, 'callout-pink')
    .use(markdownItContainer, 'callout-green')
    .use(markdownItContainer, 'warning')
    .use(markdownItTasks)
    .use(markdownItCenterText)
    .use(markdownLinkifyImages, {
      // https://www.npmjs.com/package/markdown-it-linkify-images
      imgClass: "p-4",
    })
    .use(markdownItAttrs, {
      // https://www.npmjs.com/package/markdown-it-attrs
      includeLevel: [2,3],
      listType: "ol"
    })
  );

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
