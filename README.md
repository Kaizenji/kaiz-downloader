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
## Output Example :
```js
{
    console.log('Platform Response:', data))
}
```
