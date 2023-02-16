const GOOGLE_API_KEY = "AIzaSyASMnObZc7n08rqaYmEN0EnDQlUsgnZdNA";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=2&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_ID_API = (search) =>
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=" +
  search +
  "&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_VIDEO_API = (videoIdList) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  videoIdList.toString() +
  "&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_RELATED_VIDEOS_ID_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&relatedToVideoId=" +
  videoId +
  "&type=video&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  videoId +
  "&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_DETAILS_API = (channelId) =>
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  channelId +
  "&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" +
  videoId +
  "&key=" +
  GOOGLE_API_KEY;

//https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=AIzaSyClu2V_22XpCG2GTe1euD35_Mh5bn4eTjA
