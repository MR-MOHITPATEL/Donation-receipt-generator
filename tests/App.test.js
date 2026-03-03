import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

// Mocking some internal modules that might break in JSDOM
jest.mock('xlsx', () => ({
    read: jest.fn(),
    utils: {
        sheet_to_json: jest.fn(),
    },
}));

describe('App Multi-Step Flow', () => {
    test('renders step 1 by default', () => {
        render(<App />);
        expect(screen.getByText(/Step 1: Select Template/i)).toBeInTheDocument();
    });

    test('navigation cycle works', async () => {
        render(<App />);

        const nextBtn = screen.getByText(/Next/i);
        fireEvent.click(nextBtn);
        expect(screen.getByText(/Step 2: NGO Details/i)).toBeInTheDocument();

        const nextBtn2 = screen.getByText(/Next/i);
        fireEvent.click(nextBtn2);
        // Should stay on step 2 due to validation
        expect(screen.getByText(/Step 2: NGO Details/i)).toBeInTheDocument();
        expect(screen.getByText(/Valid NGO Name required/i)).toBeInTheDocument();

        const backBtn = screen.getByText(/Back/i);
        fireEvent.click(backBtn);
        expect(screen.getByText(/Step 1: Select Template/i)).toBeInTheDocument();
    });
});
