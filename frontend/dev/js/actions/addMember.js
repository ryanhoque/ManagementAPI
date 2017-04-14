// Action for adding a new member.
export const addMember = (data) => {
    return {
        type: 'NEW_MEMBER',
        payload: data
    }
};