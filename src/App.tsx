import React, {useEffect, useState} from 'react';

import './App.css';
import {Button} from './components/button/Button';
import {Input} from './components/input/Input'

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [endValue, setEndValue] = useState<number>(5)
    const [count, setCount] = useState<number>(startValue)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [errorMode, setErrorMode] = useState<boolean>(false)

    useEffect(() => {
        const localStartValue = localStorage.getItem('start-value')
        if (localStartValue) {
            setStartValue(JSON.parse(localStartValue))
            setCount(JSON.parse(localStartValue))
        }
    }, [])

    useEffect(() => {
        const localEndValue = localStorage.getItem('end-value')
        if (localEndValue)
            setEndValue(JSON.parse(localEndValue))
    }, [])

    useEffect(() => {
        endValue <= startValue || startValue < 0
            ? setErrorMode(true)
            : setErrorMode(false)
    }, [editMode, endValue, startValue])

    const callBackInc = () => {
        setCount(count + 1)
    }

    const callBackReset = () => {
        setCount(startValue)
    }
    const callBackSet = () => {
        setCount(startValue)
        localStorage.setItem('start-value', JSON.stringify(startValue))
        localStorage.setItem('end-value', JSON.stringify(endValue))
        setEditMode(false)
    }

    const callBackInputMax = (maxValue: number) => {
        setEndValue(maxValue)
        setEditMode(true)
    }

    const callBackInputStart = (startValue: number) => {
        setStartValue(startValue)
        setEditMode(true)
    }

    const disabledButtonInc = endValue <= count || errorMode || editMode
    const disabledButtonReset = count < endValue || errorMode || editMode

    return (
        <div className="App">
            <div className={'block-counter'}>
                <div className={'block-input'}>
                    <Input title={'max value'} value={endValue} callBack={callBackInputMax}/>
                    <Input title={'start value'} value={startValue}
                           callBack={callBackInputStart}/>
                </div>
                <div className={'block-buttons'}>
                    <Button title={'set'} callBack={callBackSet} disabled={errorMode}/>

                </div>

            </div>

            <div className={'block-counter'}>

                {editMode
                    ? errorMode
                        ? <div className={'block-input textRed'}>Incorrect values</div>
                        : <div className={'block-input textBlue'}>enter values and press 'set'</div>
                    : <div className={`block-input ${endValue <= count ? 'textRed' : ''}`}> {count} </div>
                }

                <div className={'block-buttons'}>
                    <Button title={'inc'} callBack={callBackInc} disabled={disabledButtonInc}/>
                    <Button title={'reset'} callBack={callBackReset} disabled={disabledButtonReset}/>
                </div>

            </div>
        </div>
    );
}

export default App;
