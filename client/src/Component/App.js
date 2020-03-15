import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import streamCreate from './Streams/streamCreate'
import streamDelete from './Streams/streamDelete'
import streamEdit from './Streams/streamEdit'
import streamList from './Streams/streamList'
import streamShow from './Streams/streamShow'
import Header from './Header';
import '../Styles/styles.css';

const App = () => {
    return (
        <div className='ui container base'>
            <BrowserRouter>
                <div className='background base'>
                    <Header />
                    <Route path='/' exact component={streamList} />
                    <Route path='/streams/new' component={streamCreate} />
                    <Route path='/streams/edit' component={streamEdit} />
                    <Route path='/streams/delete' component={streamDelete} />
                    <Route path='/streams/show' component={streamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App;