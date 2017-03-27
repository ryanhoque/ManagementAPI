// Reducer for showing the list of members.
export default function (state = null, action) {
    switch (action.type) {
        case 'FORM_UPDATED':
            for (var i = 0; i < state.length; i++) {
                if (state[i].id == action.payload.id) {
                    state[i] = action.payload;
                }
            }
            return state;
            break;
        case 'USER_DELETED':
            for (var i = 0; i < state.length; i++) {
                if (state[i].id == action.payload) {
                    state.splice(i,1);
                }
            }
            return state;
            break;
        case 'NEW_MEMBER':
            // increment last unique id to get new unique id
            action.payload.id = state[state.length - 1].id + 1;
            state.push(action.payload);
            return state;
            break;
    }
    if (!state) {
    return [
        {
            id: 1,
            first: "Adrien",
            last: "Olczak",
            email: "adrien@instawork.com",
            phone: "415-310-1619",
            role: "admin",
        },
        {
            id: 2,
            first: "Charlene",
            last: "Pham",
            email: "charlene@instawork.com",
            phone: "415-310-1619",
            role: "regular",
        },
        {
            id: 3,
            first: "Benson",
            last: "Mach",
            email: "benson@instawork.com",
            phone: "415-310-1619",
            role: "regular",
        },
        {
            id: 4,
            first: "Dan",
            last: "Petrie",
            email: "dan@instawork.com",
            phone: "415-310-1619",
            role: "regular",
        }
    ];
    } else {
        return state;
    }
}
