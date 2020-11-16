var yandex = {
    "v1": 51663722,
    "v2": 51663794,
    "v3": 51663863,
    "v4": 51663878,
    "v5": 51663887,
    "v6": 53583292,
    "v7": 53583448,
    "v8": 53583469,
    "v9": 53583511,
    "v10": 53583175,
    "v11": 53583217,
    "v12": 53583238,
    "v13": 53583259
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('es', '').replace('39', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('es', '')
        .replace('39', '')
        .replace('confirm.html', '');

}
yandexId = yandex[site];

console.log(site);

(function(d, w, c, id) {
    (w[c] = w[c] || []).push(function() {
        try {
            var n = 'yaCounter' + id;
            w.n = new Ya.Metrika({
                id: id,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
        } catch (e) {}
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function() {
            n.parentNode.insertBefore(s, n);
        };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window, "yandex_metrika_callbacks", yandexId);