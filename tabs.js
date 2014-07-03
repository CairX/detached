/* exported Tabs */

var Tabs = (function() {
    'use strict';

    var tabs, contents;

    var select = function(index) {
        return function () {
            // Hide all contents.
            for (var i = 0; i < contents.length; i++) {
                contents[i].style.display = 'none';
            }

            // Display the selected conent.
            contents[index].style.display = 'block';
        };
    };

    var init = function() {
        tabs = document.getElementsByClassName('tab');
        contents = document.getElementsByClassName('tab-content');

        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', select(i), false);
        }

        select(0)();
    };

    var self = {};

    self.init = function() {
        window.addEventListener('load', init, false);
    };

    return self;
})();
