import React, {memo, useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../state/store";
import {
    changeMaximumValueAction,
    changeMinimumValueAction,
    increaseCountAction,
    resetCountAction, setErrorModeAction,
    setMinMaxValueAction
} from "../../state/reducer";
import {Input} from "../../components/input/Input";
import {Button} from "../../components/button/Button";

export const Counter = memo(() => {
    const [editMode, setEditMode] = useState<boolean>(false)

    const startValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const endValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const errorMode = useSelector<AppRootStateType, boolean>(state => state.counter.errorMode)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setErrorModeAction())
    }, [endValue, startValue])

    const callBackInc = useCallback(() => {
        dispatch(increaseCountAction())
    }, [dispatch])

    const callBackReset = useCallback(() => {
        dispatch(resetCountAction())
    }, [dispatch])

    const callBackSet = useCallback(() => {
        dispatch(setMinMaxValueAction())
        setEditMode(false)
    }, [dispatch])

    const callBackInputMaxValue = useCallback((endValue: number) => {
        dispatch(changeMaximumValueAction(endValue))
        setEditMode(true)
    }, [dispatch])

    const callBackInputStartValue = useCallback((startValue: number) => {
        dispatch(changeMinimumValueAction(startValue))
        setEditMode(true)
    }, [dispatch])

    const disabledButtonInc = endValue <= count || errorMode || editMode
    const disabledButtonReset = count < endValue || errorMode || editMode
    return (
        <>
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
        </>
    )
})