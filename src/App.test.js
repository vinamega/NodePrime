// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodePrime title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodePrime/i);
    expect(titleElement).toBeInTheDocument();
});
