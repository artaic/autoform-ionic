Package.describe({
  name: "insightfil:autoform-ionic",
  summary: "Ionic theme for Autoform",
  version: "0.1.9",
  git: "https://github.com/artaic/autoform-ionic.git"
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.1");
  api.use(["templating", "underscore"], "client");
  api.use("aldeed:autoform@5.8.1");
  api.addFiles([
    "ionic.html",
    "ionic.css",
    "ionic.js"
  ], "client");
});
