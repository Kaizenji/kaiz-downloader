# kaiz-downloader

* A simple `Node.js` package to download videos from various platforms like `YouTube`, `TikTok`, `Instagram`, `Twitter`, `Facebook`, and more.


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
## TikTok :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('tiktok', 'https://tiktok.com/video-url')
    .then(data => console.log('TikTok Response:', data))
    .catch(err => console.error('Error:', err));
```
## YouTube :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('yt', 'https://youtube.com/video-url', '360') //supported qualities are 140, 360, 480, 720, 1080.
    .then(data => console.log('YouTube Response:', data))
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
## Snapchat :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('snapchat', 'https://snapchat.com/video-url')
    .then(data => console.log('Snapchat Response:', data))
    .catch(err => console.error('Error:', err));
```
## SoundCloud :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('soundcloud', 'https://soundcloud.com/track-url')
    .then(data => console.log('SoundCloud Response:', data))
    .catch(err => console.error('Error:', err));
```
## Spotify :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('spotify', 'https://spotify.com/track-or-album-url')
    .then(data => console.log('Spotify Response:', data))
    .catch(err => console.error('Error:', err));
```
## Twitter (X) : 
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('twitter', 'https://twitter.com/video-url')
    .then(data => console.log('Twitter Response:', data))
    .catch(err => console.error('Error:', err));
```
## PornHub :
```js
const kaiz = require('kaiz-downloader');

kaiz.downloadContent('pornhub', 'https://pornhub.com/video-url')
    .then(data => console.log('PornHub Response:', data))
    .catch(err => console.error('Error:', err));
```
## Output :

* You can see the raw `response.data` in `console.log` along with the `metadata` from selected platforms.

## Issues :
* If you notice this npm package has troubleshooting feel free to reach me out.

* Contact: [Facebook](https://www.facebook.com/known.as.kaizenji)
