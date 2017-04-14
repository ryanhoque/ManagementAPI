// Action for when a member's info is edited.
export const updateForm = (data) => {
    return {
        type: 'FORM_UPDATED',
        payload: data
    }
};