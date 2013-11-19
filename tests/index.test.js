var $ = require('../src/index');

exports['modules'] = function (test) {
    test.expect(1);
    test.ok($);
    test.done();
};