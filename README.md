# kaiz-downloader

* A simple Node.js package to download content from various platforms like YouTube, TikTok, Instagram, Twitter, Facebook, and more.


## Installation :
```bash
npm i kaiz-downloader
```

## Facebook :
```js
const kaiz = require('kaiz-const kaiz = require('kaiz-downloader');

kaiz.downloadContent('fb', 'https://facebook.com/video-url')
    .then(data => console.log('Facebook Response:', data))
    .catch(err => console.error('Error:', err));
```

## Instagram :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('insta', 'https://instagram.com/post-url')
    .then(data => console.log('Instagram Response:', data))
    .catch(err => console.error('Error:', err));
```
## Tiktok :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('tiktok', 'https://tiktok.com/video-url')
    .then(data => console.log('TikTok Response:', data))
    .catch(err => console.error('Error:', err));
```
## Capcut :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('capcut', 'https://capcut-url.com')
    .then(data => console.log('CapCut Response:', data))
    .catch(err => console.error('Error:', err));
```
## Pinterest :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('pinterest', 'https://pinterest.com/pin-url')
    .then(data => console.log('Pinterest Response:', data))
    .catch(err => console.error('Error:', err));
```
## Reddit :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('reddit', 'https://reddit.com/post-url')
    .then(data => console.log('Reddit Response:', data))
    .catch(err => console.error('Error:', err));
```
