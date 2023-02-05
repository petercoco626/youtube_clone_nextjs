import styles from "./autoHeightImage.module.css";
import Image from "next/image";

interface AutoHeightImageProps {
  imageUrl: string;
}

export default function AutoHeightImage({ imageUrl }: AutoHeightImageProps) {
  return (
    <div className={styles["image-wrap"]}>
      <Image src={imageUrl} alt="" layout="fill" className={styles["image"]} />
    </div>
  );
}
