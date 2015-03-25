/* exported Tabs */

var Tabs = (function() {
	'use strict';

	var tabs, contents, tabz, contentz;

	var select = function(index) {
		return function () {
			// Hide all contents.
			for (var i = 0; i < contents.length; i++) {
				contents[i].style.display = 'none';
			}

			// Display the selected conent.
			if (contents[index]) {
				contents[index].style.display = 'block';
			}
		};
	};

	var init = function() {
		tabs = document.getElementsByClassName(tabz);
		contents = document.getElementsByClassName(contentz);

		for (var i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('click', select(i), false);
		}

		select(0)();
	};


	/* Public
	/*************************************/
	var self = {};

	self.init = function(tabClassName, tabContentClassName) {
		tabz = tabClassName;
		contentz = tabContentClassName;

		window.addEventListener('load', init, false);
	};

	return self;
})();
