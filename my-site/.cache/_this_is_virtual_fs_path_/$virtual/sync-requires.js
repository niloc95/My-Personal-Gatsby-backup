
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/media/nilo/Storage/Frontend Dev/my-site/.cache/dev-404-page.js")),
  "component---node-modules-wkocjan-gatsby-theme-intro-src-pages-404-js": preferDefault(require("/media/nilo/Storage/Frontend Dev/my-site/node_modules/@wkocjan/gatsby-theme-intro/src/pages/404.js")),
  "component---node-modules-wkocjan-gatsby-theme-intro-src-templates-index-js": preferDefault(require("/media/nilo/Storage/Frontend Dev/my-site/node_modules/@wkocjan/gatsby-theme-intro/src/templates/index.js"))
}

