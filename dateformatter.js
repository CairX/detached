/* exported DateFormatter */

var DateFormatter = (function () {
    'use strict';
    var self = {};

    var months = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthsAbbreviated = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var daysAbbreviated = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    self.format = function(date, format) {
        if (date === null || format === null) { return ''; }

        var result = format;
        // TODO Remove duplicate results.
        var directives = format.match(/(%[aAwdbBmyYHIpMSf]{1})/g);
        if (directives !== null) {
            for (var index = 0; index < directives.length; index++) {
                result = replace(date, directives[index], result);
            }
        }

        return result;
    };

    var replace = function(date, directive, s) {
        // TODO Make it possible to have language options.

        // TODO Make it possible to use locale.
        // TODO Implement timezone. (%z, %Z)
        // TODO Implement day of the year. (%j)
        // TODO Implement week of the year. (%U, %W)
        var value = '';
        switch (directive) {
            case '%a':
                value = daysAbbreviated[date.getDay()];
                break;
            case '%A':
                value = days[date.getDay()];
                break;
            case '%w':
                value = date.getDay();
                break;
            case '%d':
                value = zero(date.getDate());
                break;
            case '%b':
                value = monthsAbbreviated[date.getMonth()];
                break;
            case '%B':
                value = months[date.getMonth()];
                break;
            case '%m':
                value = zero(date.getMonth() + 1);
                break;
            case '%y':
                value = date.getFullYear().toString().substring(2);
                break;
            case '%Y':
                value = date.getFullYear();
                break;
            case '%H':
                value = zero(date.getHours());
                break;
            case '%I':
                var hours = date.getHours();
                hours = hours > 12 ? hours - 12 : hours;
                value = zero(hours);
                break;
            case '%p':
                value = (date.getHours() > 12 ? 'PM' : 'AM');
                break;
            case '%M':
                value = zero(date.getMinutes());
                break;
            case '%S':
                value = zero(date.getSeconds());
                break;
            case '%f':
                value = zero(date.getMilliseconds());
                break;
        }

        return s.replace(directive, value);
    };

    var zero = function(s) {
        return s.toString().length == 1 ? ('0' + s) : s;
    };

    return self;
})();
