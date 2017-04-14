// Action for when a user is deleted.
export const deleteUser = (id) => {
    console.log("DELETED user", id);
    return {
        type: 'USER_DELETED',
        payload: id
    }
};