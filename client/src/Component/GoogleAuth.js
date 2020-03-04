import React, { Component } from "react";
import { SIGN_IN, SIGN_OUT } from '../Actions'
import { connect } from "react-redux";


class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // callback fun which will be called only when loading is done which takes time
            window.gapi.client.init({
                // init gives us a promise saying that the librabry has been successfully initialised
                clientId: '232809248903-qototto8def7lp9konmr056v52c72772.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                // making changes in the state as per the signed status by creating an action accordingly
                this.changeSignedStatus(this.auth.isSignedIn.get())
                // listens if the user signs out and updates the state immediates and not only in refreshing the page
                this.auth.isSignedIn.listen(this.changeSignedStatus)
            })
        })
    }

    changeSignedStatus = (isSignedIn) => {
        if (isSignedIn) {
            this.props.SIGN_IN(this.auth.currentUser.get().getId()) // passing the userId of the signed in user
        } else {
            this.props.SIGN_OUT()
        }
    }

    renderAuth() {
        if (this.props.isSignedIn === null) {
            return <div>Null</div>
        } else if (this.props.isSignedIn === true) {
            return <button onClick={this.onSignOutClick} className='ui google red button'>Sign Out</button>
        } else {
            return <button onClick={this.onSignInClick} className='ui google red button'>Sign In with Google</button>
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }
    render() {
        return (
            <div>
                {this.renderAuth()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { SIGN_IN, SIGN_OUT })(GoogleAuth);