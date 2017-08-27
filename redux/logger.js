import { createLogger } from 'redux-logger';
import { toJs } from 'immutable';

const reduxLogger = createLogger({
    diff: true,
    stateTransformer: (state) => {
        let newState = {};

        for (var i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
                newState[i] = state[i].toJS();
            } else {
                newState[i] = state[i];
            }
        };

        return newState;
    }
});

export default reduxLogger;
