Package.describe({
  name: 'alcarus:getusermediajs',
  version: '0.3.0',
  summary: 'getUserMedia shim with a Flash fallback for archaic browsers.',
  git: 'https://github.com/addyosmani/getUserMedia.js',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    "getUserMedia.js/dist/getUserMedia.js",
    "getUserMedia.js/dist/fallback/jscam.swf",
    "getUserMedia.js/dist/fallback/jscam_canvas_only.swf"
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('alcarus:getusermediajs');
  api.addFiles('getusermediajs-tests.js');
});
