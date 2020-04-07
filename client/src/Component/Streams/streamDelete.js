import React, { Component } from 'react'
import Modal from '../modal'
import history from '../../history'
import { DELETESTREAM } from '../../Actions'
import { connect } from 'react-redux'

class streamDelete extends Component {
    onDeleteClick = () => {
        this.props.DELETESTREAM(this.props.match.params.id)
    }

    render() {
        return (
            <Modal
                dismiss={() => history.push('/')}
                activity={this.onDeleteClick} // passing reference of the function
                text={{ content: 'Are you sure you want to delete the stream?', title: 'Delete Stream', no: 'cancel', yes: 'delete' }}
            />
        )
    }
}

export default connect(null, { DELETESTREAM })(streamDelete)