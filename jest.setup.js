import '@testing-library/jest-dom';
import React from 'react';

// Global mocks for browser APIs that JSDOM might lack
global.HTMLCanvasElement.prototype.getContext = () => { };
global.URL.createObjectURL = jest.fn();
