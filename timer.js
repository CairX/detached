function Timer() {}
Timer.prototype = (function () {
    'use strict';

    var self = {};
    var started = null, stopped = null;

    self.start = function() {
        started = Date.now();
        stopped = null;
    };
    self.stop = function() {
        if (started) {
            stopped = Date.now();
        }
    };
    self.reset = function() {
        started = null;
        stopped = null;
    };
    self.time = function() {
        if (started && stopped) {
            return stopped - started;
        } else if (started) {
            return Date.now() - started;
        } else {
            return 0;
        }
    };
    self.running = function() {
        return (started !== null && stopped === null);
    };

    return self;
})();
