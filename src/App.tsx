import React, {memo} from 'react';

import './App.css';
import {Counter} from "./features/Counter/Counter";

export const App = memo(() => {
    return (
        <div className="App">
            <Counter />
        </div>
    );
})


