/* exported Ajax */

"use strict";

/* ------------------------------------------------- *
 * @section Ajax
 * ------------------------------------------------- */
var Ajax = (function() {

    var init = function(options) {
        return (typeof options !== "undefined") ? options : {};
    };

    var standard = function(url, options) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 299) {
                    if("onSuccess" in options) {
                        options.onSuccess(request);
                    }
                } else if (request.status >= 500 && request.status <= 599) {
                    if("onFailure" in options) {
                        options.onFailure(request);
                    }
                }
            }
        };

        request.open(options.method, url, true);

        if ("contentType" in options){
            request.setRequestHeader("Content-Type", options.contentType);
        }

        if ("data" in options) {
            request.send(options.data);
        } else {
            request.send();
        }
    };

    var get = function(url, options) {
        options = init(options);
        options.method = "GET";
        standard(url, options);
    };

    var post = function(url, options) {
        options = init(options);
        options.method = "POST";
        standard(url, options);
    };

    return { "get": get, "post": post, "request": standard };
})();
