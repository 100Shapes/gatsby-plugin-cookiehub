exports.onRouteUpdate = ({ location }) => {
  const consent = !window.GATSBY_PLUGIN_COOKIEHUB_DISABLED_ANALYTICS;
  const trackingId = window.GATSBY_PLUGIN_COOKIEHUB_GA_TRACKING_ID;
  const anonymize = window.GATSBY_PLUGIN_COOKIEHUB_ANONYMIZE || false;

  if (
    !trackingId ||
    process.env.NODE_ENV !== `production` ||
    typeof gtag !== `function`
  ) {
    return;
  }

  let locationStr = '';

  if (location) {
    locationStr = `${location.pathname}${location.search}${location.hash}`;
  }

  let anonymizeObj = {};
  if (anonymize) {
    anonymizeObj = { anonymize_ip: true };
  }

  if (consent) {
    gtag('config', trackingId, {
      page_path: locationStr,
      ...anonymizeObj
    });
  }
};
