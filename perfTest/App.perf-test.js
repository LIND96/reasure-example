import React from 'react';
import { jest, test } from '@jest/globals';
import { fireEvent, screen } from '@testing-library/react-native';
import { measureRenders } from 'reassure';
import App from '../App';

jest.setTimeout(600_000);


test('App Page test onPress', async () => {
    const scenario = async () => {
        const button = screen.getByTestId('btn1');
        fireEvent.press(button);
        await screen.findByText('Count: 1', {}, { timeout: 2000 });
    }
    await measureRenders(<App />, { scenario, runs: 10 });
})