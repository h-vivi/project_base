/*!
 * entrance of require
 * now only for login page
 * ranran[vivi] & bq-hentai | 01/30/2017
 */

require.config({
    baseUrl: '../',

    paths: {
        zepto: 'js/libs/zepto',
    }
});

// cache href
var href = location.href;
// get controller name
var controllerName = href.slice(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
// get controller path
var controllerPath = 'js/controller/' + controllerName + '-ctrl.js';

require([ 'zepto' ], function(zepto) {
    require([ controllerPath ], function(ctrl) {
        setTimeout(function() {
            $('body').html('<span>我要开始咯，虽然不知道要开始干嘛(◍ ´꒳` ◍)<span>');
        });
    });
});
