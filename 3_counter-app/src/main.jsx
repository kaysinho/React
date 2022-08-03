import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <FirstApp title="Jhonatan" subtitle="Plata Mendoza"/> */}
        <CounterApp value={ 45 } />
    </React.StrictMode>
)