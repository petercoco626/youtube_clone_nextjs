import { useSearchDispatch, useSearchState } from '@/context/searchContext';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';

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
    <div>
      <Image></Image>
      <form onSubmit={onSumbit}>
        <input placeholder="Search..." value={search} onChange={handleSearch}></input>
        <div></div>
      </form>
    </div>
  );
}
