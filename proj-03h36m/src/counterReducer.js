
// Define the initial state for the counter
export const initialCounterState = {
    count: 0
};
  

const counterReducer = (state, action) => {
    // received the action object, but reference just the type that was set.
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            };
        case "RESET":
            return {
                ...state,
                count: 0
            };
        default:
            throw new Error(`Unhandled action type ${action.type}`);
    }
}

export default counterReducer;