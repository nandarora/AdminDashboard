
import FETCH_SUPERUSER from '../type/fetch/superUser';
import ADD_DATA from '../type/add';
import DEL_DATA from '../type/del';

const initialstate={
    items: [{_id:1,name:"Sunvera",image:"face8"}],
    item: 1
    
}

const SuperUserReducer = (state= initialstate, action) => {
    console.log('Entered SuperUserReducer..');
    console.log(action.type);

    switch (action.type) {
        case FETCH_SUPERUSER:
            return{
                ...state,
                //items: action.payload

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

export default SuperUserReducer;