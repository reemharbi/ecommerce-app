const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
// Depending on what the type of action is this switch
// statement will then check if the case for this action
// type is equal to SET_CURRENT_USER then i want to return
// this new object out of this reducer function.
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
};

export default userReducer;