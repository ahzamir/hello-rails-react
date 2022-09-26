const apiUrl = "http://127.0.0.1:3000/api/v1/greetings";

const GREET_EVERYONE = "greetings/GREET_EVERYONE";

export const greetEveryone = (data) => ({
    type: GREET_EVERYONE,
    payload: data
});

export const fetchGreeting = () => (dispatch) => {
    fetch(`${apiUrl}`)
        .then((response) => response.json())
        .then((data) => dispatch(greetEveryone(data)))
};

const greetingReducer = (state = [], action) => {
    switch (action.type) {
        case GREET_EVERYONE:
            return action.payload;
        default:
            return state;
    }
};

export default greetingReducer;