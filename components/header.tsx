import { useSearchDispatch, useSearchState } from '@/context/searchContext';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import styles from './header.module.css';

export default function Header() {
  const search = useSearchState();
  const dispatch = useSearchDispatch();
  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      dispatch({
        type: 'change',
        text: e.currentTarget.value,
      });
    },
    [dispatch]
  );

  const onSumbit = useCallback(() => {
    dispatch({
      type: 'change',
      text: '',
    });
  }, [dispatch]);

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
    </div>
  );
}
