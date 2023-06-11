import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import Game from './game';

describe('Game component', () => {
    test('renders a Game component', () => {
        render(<Game />);
        expect(screen.getByTestId('game')).toBeInTheDocument();
    }); 

    test('renders a restart button', () => {
        render(<Game />);
        const restartButton = screen.getByTestId('restart');

        fireEvent.click(restartButton);
        expect(restartButton).toBeInTheDocument();
    });
});