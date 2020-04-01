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

export const CREATESTREAM = formVal => async dispatch => {
    const response = await streams.post('/streams', formVal)
    console.log(response)
    dispatch({
        type: 'CREATESTREAM',
        payload: response
    })
}

export const FETCHSTREAMS = () => async dispatch => {
    const response = await streams.get('/streams')
    dispatch({
        type: 'FETCHSTREAMS',
        payload: response
    })
}

export const FETCHSTREAM = id => async dispatch => {
    const response = await streams.get(`/stream/${id}`)
    dispatch({
        type: 'FETCHSTREAM',
        payload: response
    })
}

export const UPDATESTREAM = (id, formVal) => async dispatch => {
    const response = await streams.put(`/stream/${id}`, formVal)
    dispatch({
        type: 'UPDATESTREAM',
        payload: response
    })
}

export const DELETESTREAM = id => async dispatch => {
    // await streams.delete(`/stream/${id}`)
    streams.delete(`/stream/${id}`)
    return {
        type: 'DELETESTREAM',
        payload: id
    }

}