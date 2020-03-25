import streams from '../api'

export const SIGN_IN = (userId) => {
    return {
        type: 'SIGN_IN',
        userId
    }
}

export const SIGN_OUT = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const STREAMCREATE = formVal => async dispatch => {
    streams.post('/streams', formVal)
}