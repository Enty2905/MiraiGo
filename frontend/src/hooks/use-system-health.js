import { useCallback, useEffect, useState } from 'react';

import { getApiHealth } from '../services/api-client.js';

export function useSystemHealth() {
  const [state, setState] = useState({ status: 'loading', data: null });

  const check = useCallback(async (signal) => {
    setState((current) => ({ ...current, status: 'loading' }));

    try {
      const data = await getApiHealth(signal);
      setState({ status: 'success', data });
    } catch (error) {
      if (error.name !== 'AbortError') {
        setState({ status: 'error', data: null });
      }
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    check(controller.signal);
    return () => controller.abort();
  }, [check]);

  return { ...state, retry: () => check() };
}
