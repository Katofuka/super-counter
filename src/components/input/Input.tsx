import React, { ChangeEvent } from 'react';

type InputPropsType = {
    title: string
    value: number
    callBack: (value: number)=>void
}

export const Input = (props: InputPropsType) => {
    const {
        title,        
        value, 
        callBack,               
    } = props

    return(
        <div className='string-input'>
            {title}:
            <input className={'inpt'} onChange={(e:ChangeEvent<HTMLInputElement>)=>callBack(+e.currentTarget.value)} type='number' value={value} />
        </div>
    )
}