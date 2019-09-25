import {combineReducers} from 'redux';


// you can customize here
import reCounter from './reducer1Example';

const appReducer = combineReducers({
  reCounter,
});

export default appReducer;
