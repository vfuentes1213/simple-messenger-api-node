var express = require('express');
var request = require('supertest');
const expect = require('chai').expect;

function createApp() {
    app = express();

    var router = express.Router();
    router.route('/').get(function(req, res) {
        return res.json({goodCall: true});
    });

    app.use(router);

    return app;
}

describe('Our server', function() {
    var app;

    // Called once before any of the tests in this block begin.
    before(function() {
        app = createApp();
        // app.listen(function(err) {
        // if (err) { return done(err); }
        // done();
        // });
    });

    it('should send back a JSON object with goodCall set to true', function(done) {
        request(app)
        .get('/')
        .expect(200, function(err, res) {
            if (err) { return done(err); }
            callStatus = res.body.goodCall;
            expect(callStatus).to.equal(true);
            // Done
            done();
        });
    });
});