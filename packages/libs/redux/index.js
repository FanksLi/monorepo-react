
function createStore(reducer) {
    let state = reducer(undefined, {});
    const subscribers = [];

    function dispatch(action) {
        const newState = reducer(state, action);
        state = newState;
        subscribers.forEach(function(subscriber) {
            subscriber();
        });
    }

    function subscribe(callback) {
        subscribers.push(callback);
    }

    function getState() {
        return state;
    };

    return {
        dispatch,
        subscribe,
        getState,
    };
};

export function combineReducers(reducers) {
    return function(state = {}, action) {
        const keys = Object.keys(reducers);
        for(const key of keys) {
            const oldState = state ? state[key] : undefined;
            const nextState = reducers[key](oldState, action);
            state[key] = nextState;
        }

        return state;
    }
}
export default createStore;