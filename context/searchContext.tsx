import React, { createContext, Dispatch, useContext, useReducer, useState } from 'react';

type ActionType = { type: 'change'; text: string };
type SearchDispatch = Dispatch<ActionType>;

const SearchContext = createContext<string>('');
const SearchContextDispatch = createContext<SearchDispatch | null>(null);

function searchReducer(search: string, action: ActionType) {
  switch (action.type) {
    case 'change':
      return action.text;
  }
}

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [search, dispatch] = useReducer(searchReducer, '');

  return (
    <SearchContext.Provider value={search}>
      <SearchContextDispatch.Provider value={dispatch}>{children}</SearchContextDispatch.Provider>
    </SearchContext.Provider>
  );
}

export function useSearchState() {
  const search = useContext(SearchContext);
  return search;
}

export function useSearchDispatch() {
  const dispatch = useContext(SearchContextDispatch);
  if (!dispatch) throw new Error('there is no dispatch for search');
  return dispatch;
}
