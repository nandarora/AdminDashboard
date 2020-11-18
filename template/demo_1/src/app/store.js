
import { createStore, applyMiddleware } from 'redux';
import rootreducer from '../reducers/rootreducer';
import thunk from 'redux-thunk'

const middleware=[thunk];

const store= createStore(rootreducer, applyMiddleware(...middleware));

export default store;