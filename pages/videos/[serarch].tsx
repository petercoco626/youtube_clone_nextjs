import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Head from "next/head";
import styles from "./search.module.css";
import Image from "next/image";
import { getSearchedVideoList } from "@/apis/youtube";

const URL_SEARCHED_VIDEO_LIST = "";

const Serarch: NextPage = () => {
  const router = useRouter();
  const onClickVideo = useCallback(
    (videoId: string) => {
      router.push(`/videos/watch/${videoId}`);
    },
    [router]
  );
  const { data, isLoading, isError } = useQuery(
    "searched-video",
    getSearchedVideoList
  );

  return (
    <>
      <Head>
        <title>youtube clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["video-list-wrap"]}>
        {data?.data.items.map((video: any) => (
          <div
            key={video.id.videoId}
            className={styles.video}
            onClick={() => onClickVideo(video.id.videoId)}
          >
            <Image
              width={"100px"}
              height={"100px"}
              src={video.snippet.thumbnails.medium.url}
              alt=""
              layout="fixed"
            />
            <div className={styles["video-title"]}>{video.snippet.title}</div>
            <div className={styles["video-channel"]}>
              {video.snippet.channelTitle}
            </div>
            <div className={styles["video-upload-time"]}>
              {video.snippet.publishedAt}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Serarch;
