import React, { useState } from 'react';

import './App.css';
import { Button } from './components/button/Button';
import { Input } from './components/input/Input'

function App() {
  const [startValue, setStartValue] = useState<number>(0)
  const [endValue, setEndValue] = useState<number>(5)
  const [count, setCount] = useState<number>(startValue)

  const callBackInc = () => {
    setCount(count + 1)
  }

  const callBackReset = () => {
    setCount(startValue)
  }
  const callBackSet = () => {
    setCount(startValue)
  }

  const callBackInputMax = (maxValue: number) => {
    setEndValue(maxValue)
  }

  const callBackInputStart = (startValue: number) => {
    setStartValue(startValue)
  }

  const disabledButtonInc = endValue > count ? false : true
  const disabledButtonReset = count !== startValue ? false : true

  return (
    <div className="App">
      <div className={'block-counter'}>
        <div className={'block-input'}>
          <Input title={'max value'} value={endValue} callBack={callBackInputMax} />
          <Input title={'start value'} value={startValue} callBack={callBackInputStart} />
        </div>
        <div className={'block-buttons'}>
          <Button title={'set'} callBack={callBackSet} />

        </div>

      </div>

      <div className={'block-counter'}>
        <div className={'block-input'}>
          {count}
        </div>
        <div className={'block-buttons'}>
          <Button title={'inc'} callBack={callBackInc} disabled={disabledButtonInc} />
          <Button title={'reset'} callBack={callBackReset} disabled={disabledButtonReset} />
        </div>

      </div>
    </div>
  );
}

export default App;
