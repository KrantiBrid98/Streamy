import React from 'react'
// here we are using Router instead of BrowserRouter bcz BrowserRouter has its own historyObject but here we want to use our own history obj and this is provided by Router
import { Router, Route } from 'react-router-dom'
import streamCreate from './Streams/streamCreate'
import streamDelete from './Streams/streamDelete'
import streamEdit from './Streams/streamEdit'
import streamList from './Streams/streamList'
import streamShow from './Streams/streamShow'
import Header from './Header';
import '../Styles/styles.css';
import history from '../history'

const App = () => {
    return (
        <div className='ui container base' style={{ width: '100%' }}>
            <Router history={history}>
                <div className='background base'>
                    <Header />
                    <Route path='/' exact component={streamList} />
                    <Route path='/streams/new' component={streamCreate} />
                    <Route path='/streams/edit/:id' component={streamEdit} />  
                    {/* id could be named anything. id is something that goes into the props of streamEdit/streamDelete component */}
                    <Route path='/streams/delete' component={streamDelete} />
                    <Route path='/streams/show' component={streamShow} />
                </div>
            </Router>
        </div>
    )
}


export default App;