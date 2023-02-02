import axios from "axios";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/";
const GET_POPULAR_VIDEO_LIST =
  YOUTUBE_API_URL +
  `videos?part=snippet%2CcontentDetails%2Cstatistics&key=${YOUTUBE_API_KEY}&chart=mostPopular&regionCode=KR&maxResults=50`;
const GET_SEARCHED_VIDEO_LIST =
  YOUTUBE_API_URL +
  `search?part=snippet&q=bts&key=${YOUTUBE_API_KEY}&maxResults=20`;

export const getPopularVideoList = async () =>
  await axios.get(GET_POPULAR_VIDEO_LIST);
export const getSearchedVideoList = async () =>
  await axios.get(GET_SEARCHED_VIDEO_LIST);
export const getVideoInfo = async (id: string) =>
  await axios.get(
    YOUTUBE_API_URL +
      `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${YOUTUBE_API_KEY}`
  );
export const getRelatedVideoInfo = async (id: string) =>
  await axios.get(
    YOUTUBE_API_URL +
      `search?part=snippet&relatedToVideoId=${id}&type=video&key=${YOUTUBE_API_KEY}&maxResults=50`
  );
