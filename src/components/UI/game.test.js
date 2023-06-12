import React from 'react';
import { render, screen} from '@testing-library/react';
import Game from './game';

describe('Game component', () => {
    test('render a Game component', () => {
        render(<Game />);
        expect(screen.getByTestId('game')).toBeInTheDocument();
    }); 

    test('render a restart button', () => {
        render(<Game />);
        const restartButton = screen.getByTestId('restart');
        expect(restartButton).toBeInTheDocument();
    });
});