export default (state = [], action) => {
    switch(action.type) {
        case "SHOW_USERS":
            return {users: action.payload};
            default:
            return state;
    }

}