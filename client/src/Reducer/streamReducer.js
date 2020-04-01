import _ from 'lodash';

const initialState = {}
export default (state = initialState, action) => {
    console.log(action, 'FETCHSTREAMS')
    switch (action.type) {
        case 'FETCHSTREAM': return {
            ...state, [action.payload.id]: action.payload
        }
        case 'UPDATESTREAM': return {
            ...state, [action.payload.id]: action.payload
        }
        case 'CREATESTREAM': return {
            ...state, [action.payload.id]: action.payload
        }
        case 'DELETESTREAM':
            return _.omit(state, action.payload)

        case 'FETCHSTREAMS': return {
            ...state, ..._.mapKeys(action.payload, 'id')
        }
        default: return state;
    }
}