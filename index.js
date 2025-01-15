const axios = require('axios');

const apiEndpoints = {
    fb: 'https://kaiz-apis.gleeze.com/api/fbdl?url=',
    insta: 'https://kaiz-apis.gleeze.com/api/insta-dl?url=',
    capcut: 'https://kaiz-apis.gleeze.com/api/capcutdl?url=',
    pinterest: 'https://kaiz-apis.gleeze.com/api/pinte-dl?url=',
    reddit: 'https://kaiz-apis.gleeze.com/api/reddit-dl?url=',
    snapchat: 'https://kaiz-apis.gleeze.com/api/snapchat-dl?url=',
    soundcloud: 'https://kaiz-apis.gleeze.com/api/soundcloud-dl?url=',
    spotify: 'https://kaiz-apis.gleeze.com/api/spotify-down?url=',
    tiktok: 'https://kaiz-apis.gleeze.com/api/tiktok-dl?url=',
    twitter: 'https://kaiz-apis.gleeze.com/api/twitter-xdl?url=',
    yt: 'https://kaiz-apis.gleeze.com/api/ytdl?url=',
    pornhub: 'https://kaiz-apis.gleeze.com/api/pornhub-dl?url='
};

async function downloadContent(type, url, quality = null) {
    try {
        let apiUrl = apiEndpoints[type];
        if (!apiUrl) {
            throw new Error('Invalid type provided');
        }

        // For Yt param quality
        if (type === 'yt' && quality) {
            apiUrl += `&quality=${quality}`;
        }

        const response = await axios.get(`${apiUrl}${encodeURIComponent(url)}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

module.exports = {
    downloadContent
};
