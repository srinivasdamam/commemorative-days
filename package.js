Package.describe({
  name: 'srinivas:commemorative-days',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  //api.use('ecmascript');
  api.addFiles('commemorative-days.js', 'client');
  api.export('commemorativeDays')
});

Package.onTest(function(api) {
  //api.use('ecmascript');
  api.use('tinytest');
  api.use('srinivas:commemorative-days');
  api.addFiles('commemorative-days-tests.js');
});
