const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY; 
export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ GOOGLE_API_KEY;
export const AUTO_SUGGEST_API = 'https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q='
