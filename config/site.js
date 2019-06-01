module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Code Quests', // Navigation and Site Title
  titleAlt: '100 Days to Code', // Title for JSONLD
  description: 'A guide to learn how to code in 100 days.',
  url: 'https://100.codequests.io', // Domain of your site. No trailing slash!
  siteUrl: 'https://100.codequests.io', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'CodeQuests', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Brian', // Author for schemaORGJSONLD
  themeColor: '#663399',
  backgroundColor: '#d3e0ff',
  twitter: '@thebcbrian', // Twitter Username
};
