// Action for switching between list, add and edit view.
export const viewChange = (str) => {
    return {
        type: 'VIEW_CHANGED',
        payload: str
    }
};