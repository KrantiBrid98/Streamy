import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
    inputRender = (formProps) => {
        return (
            <div className={formProps.error ? 'feild error' : 'feild'} style={{ margin: '10px' }}>
                <label >{formProps.label}</label>
                <input {...formProps.input} autoCorrect='off' />
                {this.renderError(formProps.meta)}
                {/* formProps.meta is a valur provided by redux form which contains the error value*/}
            </div>
        ) // onChange={formProps.input.onChange} value={formProps.input.value}
    }

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return (
                <div style={{
                    color: 'red',
                    marginBottom: '30px'
                }}>
                    <div className='header'>
                        {meta.error}
                    </div>
                </div>
            )
        }
    }

    onSubmit = formValues => this.props.onSubmitCallBack(formValues);

    render() {
        // this.props.handleSubmit() is a callback function provided by redux-form which accepts our function as a parameter)
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui formContainer form error">
                <label className="ui dividing header" style={{ color: 'white', fontFamily: 'sans-serif' }}>{this.props.text}</label><br /><br />
                <div>
                    <div className='font' >
                        <Field name='title' component={this.inputRender} label="Enter Title" />
                    </div>
                    <div className='font' >
                        <Field name='description' component={this.inputRender} label="Enter Description" />
                    </div>
                    <div>
                        <button className="ui primary basic button" type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        )
    }

}

const validate = (formValues) => {
    let error = {}
    if (!formValues.title) {
        error.title = 'title should not be blank' //error.<key>, key should be same as the name of the field for which validation is to be done
    }
    if (!formValues.description) {
        error.description = 'description should not be blank'
    }

    return error;
}

export default reduxForm({
    form: 'streamCreate',
    validate // validate function will be called when the form initially renders & each time user interacts with the form
})(StreamForm)
// redux form will start storing data in state with streamCreate as key

