import React from 'react';
import { render,screen } from '@testing-library/react';
import Board from './board';

describe('Board component', () => {
        test('renders a Board component', () => {
            render(<Board />);
            expect(screen.getByTestId('game-board')).toBeInTheDocument();
        });
});