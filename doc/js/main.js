/*!
 * entrance of require
 * now only for login page
 * ranran[vivi] & bq-hentai | 01/30/2017
 */

require.config({
    baseUrl: './',

    paths: {
        jquery: 'http://cdn.bootcss.com/jquery/3.1.1/jquery.js',
    }
});

require([], function() {
    setTimeout(function() {
        document.querySelector('body').innerText = 'vivi love & ready.';
    });
});
