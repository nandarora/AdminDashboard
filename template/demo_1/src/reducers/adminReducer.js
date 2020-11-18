
import FETCH_ADMIN from '../type/fetch/admin';
import ADD_DATA from '../type/add';
import DEL_DATA from '../type/del';

const initialstate={
    items: [{_id:1,name:"Shane",image:"face7"},{_id:2,name:"Adam",image:"face2"},{_id:3,name:"Mark",image:"face3"},{_id:4,name:"Michael",image:"face4"},{_id:5,name:"Jordan",image:"face5"},{_id:6,name:"David",image:"face6"},{_id:7,name:"Roger",image:"face8"}],
    item: 7
    
}

const AdminReducer = (state= initialstate, action) => {
    console.log('Entered AdminReducer..');
    console.log(action.type);

    switch (action.type) {
        case FETCH_ADMIN:
            return{
                ...state,
               // items: action.payload
            }

        case ADD_DATA:
            return{
                ...state,
                item: action.payload
            } 
            case DEL_DATA:
                return{
                    ...state,
                    items: state.items.filter(m => m._id !== action.payload)
                }
            

        default:
            return state;
    }

}

export default AdminReducer;