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
        console.log('controller is', ctrl);
        console.log('controller exec result is', ctrl());
        setTimeout(function() {
            //$('body').html('<span>我要开始咯，虽然不知道要开始干嘛(◍ ´꒳` ◍)<span>');
        });
    });
});

require.onError = function(err) {
    console.error(err);
}
