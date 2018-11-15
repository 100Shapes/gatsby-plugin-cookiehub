# gatsby-plugin-cookiehub
Gatsby.js plugin to add the cookiehub GDPR compliance widget. Based on the [gatsby-plugin-tag](https://github.com/flpvsk/gatsby-plugin-gtag).

## Setup

Get an account on [Cookiehub](https://cookiehub.com)

## Install

```bash
npm install --save gatsby-plugin-cookiehub
```
or
```bash
yarn add gatsby-plugin-cookiehub
```

## Use

```js

// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-cookiehub`,
      options: {
        // your cookiehub widget ID
        cookihubId: `YYYYYYY`,
        // your google analytics tracking id
        trackingId: `UA-XXXXXXXX-X`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,        
      },
    },
  ],
}

```

## Options

#### head

Puts tracking script in the head instead of the body. Default is false (render in the body)

#### anonymize

Adds `anonymize_ip` flag when calling `gtag`. More info
[here](https://developers.google.com/analytics/devguides/collection/gtagjs/ip-anonymization).

## License

MIT