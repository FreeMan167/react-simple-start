import { combineReducers } from 'redux';

// Impost all reducers
import sampleReducer from './sample_reducer';

const rootReducer = combineReducers({
    // combine all reducers here
    sample : sampleReducer
});

export default rootReducer;
