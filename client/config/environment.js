/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
      modulePrefix: 'client',
      podModulePrefix: 'client/pods',
      environment: environment,
      baseURL: '/',
      locationType: 'auto',
      EmberENV: {
          FEATURES: {
              'ember-htmlbars': true,
              'ember-htmlbars-block-params': true,
              'ember-htmlbars-each-with-index': true
          }
      },
      contentSecurityPolicy: {
          'default-src': "*",
          'font-src': "*",
          'connect-src': "*",
          'img-src': "*",
          'style-src': "*",
          'frame-src': "*"
      },
      APP: {
          // Here you can pass flags/options to your application instance
          // when it is created
      }
  };
  ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:oauth2-bearer'
  };
  ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: '/api/v1/auths/login',
      serverTokenRevocationEndpoint: '/api/v1/auths/logout',
  };


  if (environment === 'development') {
      // ENV.APP.LOG_RESOLVER = true;
      ENV.APP.LOG_ACTIVE_GENERATION = true;
      // ENV.APP.LOG_TRANSITIONS = true;
      // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
      ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
      // Testem prefers this...
      ENV.baseURL = '/';
      ENV.locationType = 'auto';

      // keep test console output quieter
      ENV.APP.LOG_ACTIVE_GENERATION = false;
      ENV.APP.LOG_VIEW_LOOKUPS = false;

      ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
