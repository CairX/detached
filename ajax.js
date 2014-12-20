var Ajax = (function() {
    'use strict';

    var defaults = function(options) {
        options = (typeof options !== 'undefined') ? options : {};

        if (!('method' in options)) {
            options.method = 'GET';
        }
    };
    var r = function(url, options) {
        defaults(options);

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 299) {
                    if('onSuccess' in options) {
                        options.onSuccess(request);
                    }
                } else if (request.status >= 500 && request.status <= 599) {
                    if('onFailure' in options) {
                        options.onFailure(request);
                    }
                }
            }
        };

        request.open(options.method, url, true);

        if ('contentType' in options){
            request.setRequestHeader('Content-Type', options.contentType);
        }

        if ('data' in options) {
            request.send(options.data);
        } else {
            request.send();
        }
    };

    return { 'request': r };
})();
