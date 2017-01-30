/*!
 * entrance of require
 * now only for login page
 * ranran[vivi] & bq-hentai | 01/30/2017
 */

require.config({
    baseUrl: './',

    paths: {
        zepto: 'http://cdn.bootcss.com/zepto/1.2.0/zepto',
    },
    shim: {
        'zepto': {
            exports: 'zepto'
        }
    }
});

require(['zepto'], function(zepto) {
    setTimeout(function() {
        $('body').html('<span>我要开始咯，虽然不知道要开始干嘛(◍ ´꒳` ◍)<span>');
    });
});
