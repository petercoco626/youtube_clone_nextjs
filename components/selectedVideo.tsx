import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import styles from "./selectedVideo.module.css";
import axios from "axios";
import { useQuery } from "react-query";
import { getVideoInfo } from "@/apis/youtube";
import AutoHeightVideo from "./autoHeightVideo";

const SelectedVideo: NextPage = () => {
  const { query } = useRouter();

  const { data, isLoading, isError } = useQuery("selected-video", () =>
    getVideoInfo(String(query.id))
  );

  return (
    <div className={styles["selectedVideo"]}>
      <AutoHeightVideo
        videoUrl={`https://www.youtube.com/embed/${data?.data.items[0]?.id}?autoplay=1&origin=http://example.com`}
      />
      <div className={styles["video-info"]}>
        <div className={styles["video-title"]}>
          {data?.data.items[0]?.snippet?.title}
        </div>
        <div className={styles["video-info-channel-wrap"]}>
          <div className={styles["video-info-channel-banner"]}></div>
          <div className={styles["video-info-channel-title"]}>
            {data?.data.items[0]?.snippet?.channelTitle}
          </div>
        </div>
        <div className={styles["video-info-description"]}>
          {data?.data.items[0]?.snippet?.description}
        </div>
      </div>
    </div>
  );
};

export default SelectedVideo;
