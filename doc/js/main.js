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

require(['zepto'], function(zepto) {
    setTimeout(function() {
        $('body').html('<span>我要开始咯，虽然不知道要开始干嘛(◍ ´꒳` ◍)<span>');
    });
});
