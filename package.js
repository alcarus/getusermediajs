Package.describe({
  name: 'alcarus:getusermediajs',
  version: '1.0.0-rc2',
  summary: 'getUserMedia shim with a Flash fallback for archaic browsers.',
  git: 'https://github.com/addyosmani/getUserMedia.js',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('alcarus:getusermediajs');
  api.addFiles('getusermediajs-tests.js');
});
