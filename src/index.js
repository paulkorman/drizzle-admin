import React from 'react';
import { render } from 'react-dom';
import Index from './pages/Index';

const rootElement = document.querySelector('#root');
if (rootElement) {
    render(<Index />, rootElement);
}
