import { combineReducers } from '@fan/redux';

function reducer(state = 0, action: any) {
   switch (action.type) {
      case 'ADD':
         state = action.payload;
         return state;
      default:
         return state;
   }
}

function reducerList(state: number[] = [], action: any): number[] {
   switch (action.type) {
      case 'ADD':
         state.push(action.payload);
         return state;
      default:
         return state;
   }
}

export default combineReducers({
   count: reducer,
   list: reducerList
})