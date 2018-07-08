
var should = require('should')
    , strava = require('../')
    , authenticator = require('../lib/authenticator');

xdescribe('config_test', function() {
  xdescribe('#config()', function() {
      it("should accept and use explicit configuration passed to config()", function () {
        strava.config({
          'access_token': 'excdefghi',
          'client_id': 'exlmnopqr',
          'client_secret': 'exuvwxyz',
          'redirect_uri': 'https://sample.com/explicit'
        });

        (authenticator.getToken()).should.be.exactly('excdefghi');
        (authenticator.getClientId()).should.be.exactly('exlmnopqr');
        (authenticator.getClientSecret()).should.be.exactly('exuvwxyz');
        (authenticator.getRedirectUri()).should.be.exactly('https://sample.com/explicit');
        authenticator.purge();
      });
  });
});
