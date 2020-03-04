import React from 'react'
import { Field, reduxForm } from 'redux-form'

class streamCreate extends React.Component {
    inputRender(formProps) {
        return (
            <div>
                <label >{formProps.label}</label>
                <input {...formProps.input} />
            </div>
        ) // onChange={formProps.input.onChange} value={formProps.input.value}
    }

    required = value => value ? undefined : 'Required'

    onSubmit=(formValues)=>{
        console.log(formValues,'form')
    }

    render() {
        console.log(this.props.handleSubmit(this.onSubmit))
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <div>
                    <label className="ui dividing header">Create a stream</label><br/><br/>
                        <div>
                            <Field name='Title' component={this.inputRender} label="Enter Title" validate={[ this.required ]}/>
                        </div>
                        <div>
                            <Field name='Description' component={this.inputRender} label="Enter Description" />
                        </div>
                        <div>
                            <button className="ui button primary" type='submit'>Submit</button>
                        </div>
                </div>
            </form>
                )
            }
        
        }
        
export default reduxForm({form: 'streamCreate' })(streamCreate)
// redux form will start storing data in state with streamCreate as key