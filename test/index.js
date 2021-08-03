// index.js
const expect = require('chai').expect;

// This is just for organisation and reporting
describe('Our application', function() {

    // This is the name of the test
    it('should understand basic mathematical principles', function(done) {
        // We want this test to pass.
        if (5 == 5) {
        // If the behavior is as expected, call done with no argument.
        done();
        } else {
        // Otherwise, call done with an error.
        done(new Error("Not sure what's happened."));
        }
    });

    describe('domain specific', function() {
        // This is the name of the test
        it('should do some business logic', function() {
            expect(5).to.equal(5);
            expect(5).to.not.equal(3);
        });
    
    });

});