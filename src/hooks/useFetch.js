import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    if(localCache[url]){
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: null,
      });
      return;
    }

    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setState({
        data,
        isLoading: false,
        hasError: null,
      });

      localCache[url] = data;
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: error,
      });
    }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
