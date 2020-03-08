import React from 'react'
import { Field, reduxForm } from 'redux-form'

class streamCreate extends React.Component {
    inputRender = (formProps) => {
        return (
            <div className={formProps.error ? 'feild error' : 'feild'}>
                <label >{formProps.label}</label>
                <input {...formProps.input} autoCorrect='off' />
                {this.renderError(formProps.meta)}
            </div>
        ) // onChange={formProps.input.onChange} value={formProps.input.value}
    }

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return (
                <div className='ui error message'>
                    <div className='header'>
                        {meta.error}
                    </div>
                </div>
            )
        }
    }

    onSubmit = (formValues) => {
        console.log(formValues, 'form')
    }

    render() {
        // this.props.handleSubmit() is a callback function provided by redux-form )
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <div>
                    <label className="ui dividing header">Create a stream</label><br /><br />
                    <div>
                        <Field name='title' component={this.inputRender} label="Enter Title" />
                    </div>
                    <div>
                        <Field name='description' component={this.inputRender} label="Enter Description" />
                    </div>
                    <div>
                        <button className="ui button primary" type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        )
    }

}

const validate = (formValues) => {
    let error = {}
    console.log(formValues.title, formValues.description)
    if (!formValues.title) {
        console.log('here')
        error.title = 'Enter a title' //error.<key>, key should be same as the name of the field for which validation is to be done
    }
    if (!formValues.description) {
        error.description = 'Enter a description'
    }

    console.log(error, 'errorObj')
    return error;
}

export default reduxForm({
    form: 'streamCreate',
    validate // validate function will be called when the form initially renders & each time user interacts with the form
})(streamCreate)
// redux form will start storing data in state with streamCreate as key