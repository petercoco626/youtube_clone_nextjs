import { useSearchDispatch, useSearchState } from '@/context/searchContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import styles from './header.module.css';

export default function Header() {
  const search = useSearchState();
  const dispatch = useSearchDispatch();
  const router = useRouter();
  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      dispatch({
        type: 'change',
        text: e.currentTarget.value,
      });
    },
    [dispatch]
  );

  const onSumbit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // 새로고침 되므로 무조건 해야하네...
      router.push(`/videos/${search}`);
      dispatch({
        type: 'change',
        text: '',
      });
    },
    [dispatch, router, search]
  );

  return (
    <div className={styles.header}>
      <Image></Image>
      <form onSubmit={onSumbit}>
        <input
          className={styles.search}
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        ></input>
        <div className={styles['search-button']}></div>
      </form>
      <div className={styles['header-empty-space']} />
    </div>
  );
}
