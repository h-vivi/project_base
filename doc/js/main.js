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
var controllerPath = '../js/controller/' + controllerName + '.js';

require([ 'zepto' ], function($) {
    require([ controllerPath ], function(ctrl) {
        setTimeout(function() {
            // 子薇卡哇伊
            // $('body').html('<span>我要开始咯，虽然不知道要开始干嘛(◍ ´꒳` ◍)<span>');
        });
    });
});


// set Error handler
require.onError = function(err) {
    console.error(err);
}
