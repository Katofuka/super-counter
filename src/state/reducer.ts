export type StateType = {
    count: number,
    minValue: number,
    maxValue: number,
    errorMode: boolean
}

const initialState: StateType = {
    count: 0,
    minValue: 0,
    maxValue: 10,
    errorMode: false
}

export type ActionType =
    | ReturnType<typeof increaseCountAction>
    | ReturnType<typeof resetCountAction>
    | ReturnType<typeof setMinMaxValueAction>
    | ReturnType<typeof changeMaximumValueAction>
    | ReturnType<typeof changeMinimumValueAction>
    | ReturnType<typeof setErrorModeAction>


export const editModeReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASE-COUNT':
            return {...state, count: state.count + 1}
        case 'RESET-COUNT':
            return {...state, count: state.minValue}
        case 'SET-MINMAX-VALUES':
            return {...state, count: state.minValue}
        case 'CHANGE-MAXIMUM-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'CHANGE-MINIMUM-VALUE':
            return {...state, minValue: action.minValue}
        case 'SET-ERROR-MODE':
            return {...state,
                errorMode: state.maxValue <= state.minValue || state.minValue < 0}
        default:
            return state
    }
}

export const increaseCountAction = () =>
    ({type: 'INCREASE-COUNT'} as const)
export const resetCountAction = () =>
    ({type: 'RESET-COUNT'} as const)
export const setMinMaxValueAction = () =>
    ({type: 'SET-MINMAX-VALUES'} as const)
export const changeMaximumValueAction = (maxValue: number) =>
    ({type: 'CHANGE-MAXIMUM-VALUE', maxValue: maxValue} as const)
export const changeMinimumValueAction = (minValue: number) =>
    ({type: 'CHANGE-MINIMUM-VALUE', minValue: minValue} as const)
export const setErrorModeAction = () =>
    ({type: 'SET-ERROR-MODE'} as const)

