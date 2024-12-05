import React from 'react'; // 必要に応じて React をインポート
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component', () => {
  it('renders the counter with initial value', () => {
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
  });

  it('increments the count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    const countText = screen.getByTestId('count');

    fireEvent.click(button);

    expect(countText).toHaveTextContent('Count: 1');
  });
});
