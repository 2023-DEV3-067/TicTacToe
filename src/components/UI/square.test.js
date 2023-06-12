import React from 'react';
import { render, screen } from '@testing-library/react';
import Square from './square';

describe('Board component', () => {
  test('renders a Square component', () => {
    render(<Square />);
    expect(screen.getByTestId('square')).toBeInTheDocument();
  });
});
