import React from 'react';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(<App />);
