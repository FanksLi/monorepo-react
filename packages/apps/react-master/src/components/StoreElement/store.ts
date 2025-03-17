


function createStore(initialState: any) {
    let state = initialState;
    const dps: Function[] = [];

    function subscribe(callback: Function) {
        dps.push(callback);
    }

    function getState() {
        return state;
    }

    function changeData(data: any) {
        state = data;
        dps.forEach((dp) => dp());
    };

    return {
        subscribe,
        getState,
        changeData,
    };
}

export default createStore;