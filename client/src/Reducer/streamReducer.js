import _ from 'lodash';

export default (state = {}, action) => {
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
            ...state, ..._.mapKeys(action.payload, 'id') // to convert array into object formal with key as id and value as action.payload
        }
        default: return state;
    }
}