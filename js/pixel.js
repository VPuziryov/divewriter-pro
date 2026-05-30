(function () {

  if (!PRODUCT.metaPixel) {
    return;
  }

  !(function(f,b,e,v,n,t,s)
  {
    if(f.fbq)return;

    n=f.fbq=function(){

      n.callMethod
        ? n.callMethod.apply(n,arguments)
        : n.queue.push(arguments);

    };

    if(!f._fbq)f._fbq=n;

    n.push=n;
    n.loaded=true;
    n.version='2.0';
    n.queue=[];

    t=b.createElement(e);
    t.async=true;
    t.src=v;

    s=b.getElementsByTagName(e)[0];

    s.parentNode.insertBefore(t,s);

  })(window,
     document,
     'script',
     'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', PRODUCT.metaPixel);

  fbq('track', 'PageView');

})();

function trackEvent(eventName, params = {}) {

  if (typeof fbq === 'function') {

    fbq('track', eventName, params);

  }

}

const currentPath = window.location.pathname;

/*
|--------------------------------------------------------------------------
| LANDING
|--------------------------------------------------------------------------
*/

if (
  currentPath === "/" ||
  currentPath.endsWith("/index.html")
) {

  trackEvent("ViewContent");

}

/*
|--------------------------------------------------------------------------
| GO PAGE
|--------------------------------------------------------------------------
*/

if (
  currentPath.includes("/go")
) {

  trackEvent("ViewContent");

  trackEvent("GoPageView");

}

/*
|--------------------------------------------------------------------------
| APP
|--------------------------------------------------------------------------
*/

if (
  currentPath.includes("/app")
) {

  trackEvent("Purchase");

}