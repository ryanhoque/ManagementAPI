export const selectUser = (id) => {
    console.log("DELETED user", id);
    return {
        type: 'USER_DELETED',
        payload: id
    }
};