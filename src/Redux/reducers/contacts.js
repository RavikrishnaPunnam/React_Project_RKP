export const ADD_CONTACT= 'ADD_CONTACT';
export const DELETE_CONTACTS= 'DELETE_CONTACTS';
const intialState = {
    contacts : [{name:'Rkp',phoneNumber:'12345678',email:'ravi@gmail.com'}],
    contact:{}
}
export const contactsReducer =(state = intialState,action)=>{
switch(action.type)
{
case 'GET_ALL_CONTACTS':
    return {...state};
    case 'ADD_CONTACT':
        {
            let contacts=[...state.contacts];
            contacts.push(action.payload);
            return {...state,contacts};
        }
         case 'GET_SINGLE_CONTACT':
            return {...state,contact:{...state.contacts[action.index], id:action.index}};

    case 'EDIT_CONTACT':
        {
         let contacts=[...state.contacts];
         contacts[action.id]= action.payload ;
         return {...state,contacts};
        }
        case 'DELETE_CONTACT':
            {
                let contacts=[...state.contacts];
                contacts.splice(action.id,1);
                return {...state,contacts};
            }
    default:
        return state;
}
}