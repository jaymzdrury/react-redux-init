export const TOGGLE = "TOGGLE"
export type ActionTypes = {type: typeof TOGGLE; payload: boolean}
export const setSwitch = (on: boolean): ActionTypes => ({
    type: TOGGLE,
    payload: !on
})