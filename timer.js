function Timer() {}
Timer.prototype = (function () {
    'use strict';
    var self = {};
    var started, stopped;

    self.start = function () {
        started = Date.now();
    };
    self.stop = function () {
        if (started) {
            stopped = Date.now();
        }
    };
    self.reset = function () {
        started = null;
        stopped = null;
    };
    self.time = function () {
        if (started && stopped) {
            return stopped - started;
        } else if (started) {
            return Date.now() - started;
        } else {
            return 0;
        }
    };

    return self;
})();
