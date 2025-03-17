import React, { useEffect, useState } from "react";
import createStore from './store';
// import { connect } from "../../utils/react-redux";
import { connect } from "@fan/react-redux";
import { Button } from "@fan/components";


const store = createStore(1);

function StoreElement(props: any) {
    const { handleAdd, count } = props;
    return <div>
        <div>{count}</div>
        <Button className="cursor-pointer" onClick={() => handleAdd(count + 1)}>Add</Button>
        <Child1 />
        <Child2 />
    </div>
}

export default connect((state: any) => {
    return {count: state.count}
}, (dispatch: any) => {
    return {handleAdd: (num: number) => dispatch({type: 'ADD', payload: num})}
})(StoreElement);


function Child1() {
    const [, setCount] = useState(0);
    useEffect(() => {
        store.subscribe(() => {
            setCount(c => c+1);
        }); 
    }, []);
    const num = store.getState();
    console.log(num);
    return <div>{num}</div>
}

function Child2() {
    return <div>
        <button className=" cursor-pointer" onClick={() => store.changeData(store.getState() + 1)}>Add</button>
    </div>
}