import { default as createStore } from '@fan/redux';
import reducer from './reducer';


const store = createStore(reducer);

export default store;