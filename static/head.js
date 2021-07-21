// Tag Manager
(
  function (w, d, s, l, i) {
    w[l] = w[l] || []
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : ''
    j.async = true
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
    f.parentNode.insertBefore(j, f)
  }
)(window, document, 'script', 'dataLayer', 'GTM-PK3DCMG');

// Iubenda setup
var _iub = _iub || []
_iub.csConfiguration = {
  consentOnContinuedBrowsing: false,
  lang: 'en',
  siteId: 2304344,
  countryDetection: true,
  perPurposeConsent: true,
  cookiePolicyId: 83671844,
  cookiePolicyUrl: 'https://www.pm.tools/data-privacy',
  banner: {
    acceptButtonDisplay: true,
    customizeButtonDisplay: true,
    position: 'float-bottom-center',
    rejectButtonDisplay: true,
    acceptButtonColor: '#55be59',
    acceptButtonCaptionColor: 'white',
    customizeButtonColor: '#a5cbde',
    customizeButtonCaptionColor: 'white',
    rejectButtonColor: '#d77d5a',
    rejectButtonCaptionColor: 'white',
    textColor: '#010101',
    backgroundColor: '#ffffff',
  },
  callback: {
    onPreferenceExpressedOrNotNeeded: function (preference) {
      dataLayer.push({
        iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut(),
      })
      if (!preference) {
        dataLayer.push({
          event: 'iubenda_preference_not_needed',
        })
      } else {
        if (preference.consent === true) {
          dataLayer.push({
            event: 'iubenda_consent_given',
          })
        } else if (preference.consent === false) {
          dataLayer.push({
            event: 'iubenda_consent_rejected',
          })
        } else if (preference.purposes) {
          for (var purposeId in preference.purposes) {
            if (preference.purposes[purposeId]) {
              dataLayer.push({
                event: 'iubenda_consent_given_purpose_' + purposeId,
              })
            }
          }
        }
      }
    },
  },
}