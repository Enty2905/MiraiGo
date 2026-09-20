import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('MiraiGo frontend', () => {
  it('renders the dashboard and learning navigation', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: /chào buổi sáng/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /từ vựng/i }).length).toBeGreaterThan(0);
    expect(screen.getByText('Bài học hôm nay')).toBeInTheDocument();
  });

  it('renders a vocabulary page with Japanese mock data', () => {
    render(<MemoryRouter initialEntries={['/vocabulary']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Từ vựng' })).toBeInTheDocument();
    expect(screen.getByText('食べる')).toBeInTheDocument();
    expect(screen.getByText('Ăn')).toBeInTheDocument();
  });
});
