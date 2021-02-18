import {combineReducers} from 'redux';
import panelReducer from './reducers/panelReducer';


const reducer = combineReducers({
    panel: panelReducer
});


export default reducer;
