export const updateState = (oldState, newSetting) => {
    return {...oldState, ...newSetting}
}