
function Timer() {}
/* ------------------------------------------------- *
 * Simple timer.
 * @section Timer
 * ------------------------------------------------- */
Timer.prototype = (function () {
    "use strict";

    var self = {};
    var started = null, stopped = null;


    /* ------------------------------------------------- *
     * Start timer.
     * ------------------------------------------------- */
    self.start = function() {
        started = Date.now();
        stopped = null;
    };


    /* ------------------------------------------------- *
     * Stop timer.
     * ------------------------------------------------- */
    self.stop = function() {
        if (started) {
            stopped = Date.now();
        }
    };


    /* ------------------------------------------------- *
     * Reset timer.
     * ------------------------------------------------- */
    self.reset = function() {
        started = null;
        stopped = null;
    };

    /* ------------------------------------------------- *
     * Returns the number of milliseconds that has
     * elapsed between start and stop was called
     * respectively. If the timer is running, the
     * currently elapsed time will be returned.
     * If the timer has not been started "0" will be
     * the value.
     *
     * @return {Integer} Elapsed milliseconds.
     * ------------------------------------------------- */
    self.time = function() {
        if (started && stopped) {
            return stopped - started;
        } else if (started) {
            return Date.now() - started;
        } else {
            return 0;
        }
    };


    /* ------------------------------------------------- *
     * @return {Boolean} True while the timer is active.
     * ------------------------------------------------- */
    self.running = function() {
        return (started !== null && stopped === null);
    };

    return self;
})();
