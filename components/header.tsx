import { useSearchDispatch, useSearchState } from "@/context/searchContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import AutoHeightImage from "./autoHeightimage";
import styles from "./header.module.css";

import youtubeLogo from "@/assets/images/youtube-logo.png";

export default function Header() {
  const search = useSearchState();
  const dispatch = useSearchDispatch();
  const router = useRouter();
  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      dispatch({
        type: "change",
        text: e.currentTarget.value,
      });
    },
    [dispatch]
  );

  const onSumbit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // 새로고침 되므로 무조건 해야하네...
      if (search.length === 0) return;
      router.push(`/videos/${search}`);
      dispatch({
        type: "change",
        text: "",
      });
    },
    [dispatch, router, search]
  );

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <AutoHeightImage imageUrl={youtubeLogo} />
      </div>
      <form onSubmit={onSumbit} className={styles.form}>
        <input
          className={styles.search}
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        ></input>
        <button className={styles["search-button"]} onClick={() => {}}>
          검색
        </button>
      </form>
      <div className={styles["header-empty-space"]} />
    </div>
  );
}
