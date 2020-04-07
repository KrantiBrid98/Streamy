import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { FETCHSTREAM, UPDATESTREAM } from '../../Actions'
import StreamForm from './streamForm'

// Here we are not using streams from state object because streams will undefined when loaded for the first time through edit/:id url.
// so we will be making use of action to fetch stream instead of store

class streamEdit extends Component {
    //this.props are send by Router
    //this.props.match.params.id will the the :id recieved from url 

    componentDidMount() {
        this.props.FETCHSTREAM(this.props.match.params.id);
    }

    onSubmit = formValues => this.props.UPDATESTREAM(this.props.match.params.id, formValues)

    render() {
        if (!this.props.stream) {
            return <div>Loading</div>
        }
        return (
            <Fragment>
                <div>
                    <StreamForm
                        text='Edit a stream'
                        initialValues={{ title: this.props.stream.title, description: this.props.stream.description }}
                        onSubmitCallBack={this.onSubmit}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => { // ownProps will contain props of streamEdit component
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { FETCHSTREAM, UPDATESTREAM })(streamEdit)