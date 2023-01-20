import React, {memo} from 'react';

type ButtonPropsType = {
    title: string
    callBack: () => void    
    disabled?: boolean
}

export const Button = memo((props: ButtonPropsType) => {
    const {
        title,
        callBack,        
        disabled
    } = props

    return (
        disabled
            ? <button className={'btn'} onClick={callBack} style={{backgroundColor: '#488297'}} disabled >{title}</button >
            : <button className={'btn'} onClick={callBack}>{title}</button>
    )
})