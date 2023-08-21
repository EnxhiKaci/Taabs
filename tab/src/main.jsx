import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import './Tabs.css';


const tabItems = [
  { label: 'Tab 1', content: 'Content for Tab 1' },
  { label: 'Tab 2', content: 'Content for Tab 2' },
  { label: 'Tab 3', content: 'Content for Tab 3' },
  
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tabs items={tabItems} />
  </React.StrictMode>
);
