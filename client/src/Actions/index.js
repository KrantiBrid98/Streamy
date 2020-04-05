import streams from '../api'
import history from '../history'

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

export const CREATESTREAM = formVal => async (dispatch, getState) => {
    const { userId } = getState().auth; // getting the userId of the person who is logged in and who created the stream from state (to provide edit and delete option)
    const response = await streams.post('/streams', { ...formVal, userId })
    dispatch({
        type: 'CREATESTREAM',
        payload: response.data
    })
    history.push('/') // programatically routing user to / page once user has created a stream
}

export const FETCHSTREAMS = () => async dispatch => {
    const response = await streams.get('/streams')
    dispatch({
        type: 'FETCHSTREAMS',
        payload: response.data
    })
}

export const FETCHSTREAM = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`)
    dispatch({
        type: 'FETCHSTREAM',
        payload: response.data
    })
}

// PUT request will update all the properties. 
// PATCH request will update some of the properties of the record only
// here we want to update only title & description. 
// PUT request will update both but will remove userId since PUT updates all and if we are dont changing userId, PUt will remove userId
// So we will use PATCH
export const UPDATESTREAM = (id, formVal) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formVal)
    dispatch({
        type: 'UPDATESTREAM',
        payload: response.data
    })
    history.push('/')
}

export const DELETESTREAM = id => async dispatch => {
    // await streams.delete(`/stream/${id}`)
    streams.delete(`/streams/${id}`)
    return {
        type: 'DELETESTREAM',
        payload: id
    }

}