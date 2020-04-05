import React, { Fragment } from 'react'
import { CREATESTREAM } from '../../Actions'
import { connect } from 'react-redux'
import StreamForm from './streamForm'

class streamCreate extends React.Component {

    onSubmit = formValues => this.props.CREATESTREAM(formValues);

    render() {
        // this.props.handleSubmit() is a callback function provided by redux-form which accepts our function as a parameter)
        return (
            <Fragment>
                <div><StreamForm 
                text='Create a stream'
                onSubmitCallBack={this.onSubmit} 
                /></div>
            </Fragment>
        )
    }

}

export default connect(null, { CREATESTREAM })(streamCreate)