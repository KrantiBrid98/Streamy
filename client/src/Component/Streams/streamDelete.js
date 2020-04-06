import React from 'react'
import Modal from '../modal'
const streamDelete = () => {
    return (
        <div>
            <Modal text={{ content: 'Are you sure you want to delete the stream?', title: 'Delete Stream', no: 'cancel', yes: 'delete' }} />
            streamDelete
        </div>
    )
}

export default streamDelete