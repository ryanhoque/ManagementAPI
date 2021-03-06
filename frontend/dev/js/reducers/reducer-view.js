// Reducer for noting a change in view.
export default function (state = null, action) {
    switch (action.type) {
        case 'VIEW_CHANGED':
            return action.payload;
            break;
    }
    return state;
}