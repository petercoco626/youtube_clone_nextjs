import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import styles from './selectedVideo.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';

const SelectedVideo: NextPage = () => {
  const router = useRouter();

  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const getSelectedVideoList = useCallback(async () => {
    try {
      const res = await axios.get(`/data/selected-video.json`);
      console.log(res);
      setSelectedVideo(res.data.items[0]);
    } catch (e) {}
  }, []);
  const { data, isLoading, isError } = useQuery('selected-video', getSelectedVideoList);

  return (
    <div className={styles['selectedVideo']}>
      {/* <div className={styles['video']}></div> */}
      <iframe
        id="ytplayer"
        // type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&origin=http://example.com`}
        frameBorder="0"
      ></iframe>
      <div className={styles['video-info']}>
        <div className={styles['video-title']}>{selectedVideo?.snippet?.title}</div>
        <div className={styles['video-info-channel-wrap']}>
          <div className={styles['video-info-channel-banner']}></div>
          <div className={styles['video-info-channel-title']}>
            {selectedVideo?.snippet?.channelTitle}
          </div>
        </div>
        <div className={styles['video-info-description']}>
          {selectedVideo?.snippet?.description}
        </div>
      </div>
    </div>
  );
};

export default SelectedVideo;
