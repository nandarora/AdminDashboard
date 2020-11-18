import { combineReducers } from 'redux';
import SuperUserReducer from './superUserReducer';
import AdminReducer from './adminReducer';
import UserReducer from './userReducer';

export default combineReducers({
    SuperUser: SuperUserReducer,
    Admin: AdminReducer,
    User: UserReducer
})
