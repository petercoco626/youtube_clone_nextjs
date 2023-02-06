import styles from "./autoHeightVideo.module.css";

interface IAutoHeightVideo {
  videoUrl: string;
  width?: string;
}

export default function AutoHeightVideo({
  videoUrl,
  width = "100%",
}: IAutoHeightVideo) {
  return (
    <div className={styles.autoHeightVideo} style={{ width }}>
      <iframe
        id="ytplayer"
        src={videoUrl}
        className={styles.video}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
