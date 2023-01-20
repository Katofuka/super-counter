import React, {memo, useCallback, useEffect, useState} from 'react';

import './App.css';
import {Button} from './components/button/Button';
import {Input} from './components/input/Input'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    ChangeMaximumValueAction,
    ChangeMinimumValueAction, IncreaseCountAction,
    ResetCountAction,
    SetMinMaxValueAction,
    StateType
} from "./state/reducer";

export const App = memo(() => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [errorMode, setErrorMode] = useState<boolean>(false)

    const startValue = useSelector<AppRootStateType, number>(state => state.editMode.minValue )
    const endValue = useSelector<AppRootStateType, number>(state => state.editMode.maxValue )
    const count = useSelector<AppRootStateType, number>(state => state.editMode.count)
    // const state = useSelector<AppRootStateType, StateType>(state => state.editMode)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const localStartValue = localStorage.getItem('start-value')
    //     if (localStartValue) {
    //         setStartValue(JSON.parse(localStartValue))
    //         setCount(JSON.parse(localStartValue))
    //     }
    // }, [])
    //


    // useEffect(() => {
    //     const localEndValue = localStorage.getItem('end-value')
    //     if (localEndValue)
    //         setEndValue(JSON.parse(localEndValue))
    // }, [])
    //
    // useEffect(() => {
    //     endValue <= startValue || startValue < 0
    //         ? setErrorMode(true)
    //         : setErrorMode(false)
    // }, [editMode, endValue, startValue])

    const callBackInc = useCallback(() => {
        dispatch(IncreaseCountAction())
    }, [dispatch])

    const callBackReset = useCallback(() => {
        dispatch(ResetCountAction())
    }, [dispatch])

    const callBackSet = useCallback(() => {
        dispatch(SetMinMaxValueAction())
        setEditMode(false)
    }, [dispatch])

    const callBackInputMaxValue = useCallback((endValue: number) => {
        dispatch(ChangeMaximumValueAction(endValue))
        setEditMode(true)
    }, [dispatch])

    const callBackInputStartValue = useCallback((startValue: number) => {
        dispatch(ChangeMinimumValueAction(startValue))
        setEditMode(true)
    }, [dispatch])

    const disabledButtonInc = endValue <= count || errorMode || editMode
    const disabledButtonReset = count < endValue || errorMode || editMode

    return (
        <div className="App">
            <div className={'block-counter'}>
                <div className={'block-input'}>
                    <Input title={'max value'} value={endValue} callBack={callBackInputMaxValue}/>
                    <Input title={'start value'} value={startValue}
                           callBack={callBackInputStartValue}/>
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
})
