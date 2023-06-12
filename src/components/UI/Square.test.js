import React from 'react';
import { render, screen } from '@testing-library/react';
import Square from './Square';

describe('Board component', () => {
  test('render a Square component', () => {
    render(<Square />);
    expect(screen.getByTestId('square')).toBeInTheDocument();
  });
});
