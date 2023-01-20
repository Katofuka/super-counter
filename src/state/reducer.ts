export type IncreaseCountActionType = {
    type: 'INCREASE-COUNT',
}

export type ResetCountActionType = {
    type: 'RESET-COUNT',

}

export type SetMinMaxValueActionType = {
    type: 'SET-MINMAX-VALUES',
}

export type ChangeMaximumValueActionType = {
    type: 'CHANGE-MAXIMUM-VALUE',
    maxValue: number,
}

export type ChangeMinimumValueActionType = {
    type: 'CHANGE-MINIMUM-VALUE',
    minValue: number,
}

export type StateType = {
    count: number,
    minValue: number,
    maxValue: number,
}

const initialState: StateType = {
    count: 0,
    minValue: 0,
    maxValue: 10,
}

export type ActionType = IncreaseCountActionType |
    ResetCountActionType |
    SetMinMaxValueActionType |
    ChangeMaximumValueActionType |
    ChangeMinimumValueActionType


export const editModeReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASE-COUNT': {
            const newState = {...state}
            newState.count = newState.count + 1
            return {...newState}
        }
        case 'RESET-COUNT': {
            const newState = {...state}
            newState.count = newState.minValue
            return {...newState}
        }
        case 'SET-MINMAX-VALUES': {
            return {...state}
        }
        case 'CHANGE-MAXIMUM-VALUE': {
            const newState = {...state}
            newState.maxValue = action.maxValue
            return {...newState}
        }
        case 'CHANGE-MINIMUM-VALUE': {
            const newState = {...state}
            newState.minValue = action.minValue
            return {...newState}
        }
        default:
            return state

    }
}

export const IncreaseCountAction = (): IncreaseCountActionType => {
    return {type: 'INCREASE-COUNT'}
}

export const ResetCountAction = (): ResetCountActionType => {
    return {type: 'RESET-COUNT'}
}

export const SetMinMaxValueAction = (): SetMinMaxValueActionType => {
    return {type: 'SET-MINMAX-VALUES'}
}

export const ChangeMaximumValueAction = (maxValue: number): ChangeMaximumValueActionType => {
    return {type: 'CHANGE-MAXIMUM-VALUE', maxValue: maxValue}
}

export const ChangeMinimumValueAction = (minValue: number): ChangeMinimumValueActionType => {
    return {type: 'CHANGE-MINIMUM-VALUE', minValue: minValue}
}