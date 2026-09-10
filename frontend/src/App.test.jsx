import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import App from './App.jsx';

describe('App', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows a connected state when the API responds', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'ok', version: '0.1.0' }),
    });

    render(<App />);

    expect(screen.getByRole('heading', { name: /một nền móng rõ ràng/i })).toBeInTheDocument();
    expect(await screen.findByText('Sẵn sàng')).toBeInTheDocument();
    expect(screen.getByText('API v0.1.0')).toBeInTheDocument();
  });

  it('offers a retry when the API cannot be reached', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('offline'));

    render(<App />);

    expect(await screen.findByText('Chưa kết nối')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Thử lại' })).toBeInTheDocument();
  });
});
