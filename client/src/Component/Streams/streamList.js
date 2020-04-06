import React, { Fragment } from 'react'
import { FETCHSTREAMS } from '../../Actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class streamList extends React.Component {
    componentDidMount() {
        this.props.FETCHSTREAMS()
    }

    renderAdmin = (stream) => {
        console.log(stream.userId, this.props.currentUserId)
        if (stream.userId && stream.userId === this.props.currentUserId) {
            return (
                <div>
                    <Link to={`/streams/edit/${stream.id}`}>
                        <button className="ui button "><i className="edit icon" style={{ margin: '0px' }}></i></button>
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`}>
                        <button className="ui button "><i className="trash icon" style={{ margin: '0px' }}></i></button>
                    </Link>
                </div >
            )
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id} style={{ marginLeft: '5%', 'borderTop': '1px solid white' }}>
                    <i className="lare middle aligned icon camera" />
                    <div className="content" >
                        <div className="font header" style={{ color: 'white', fontSize: '20px', padding: '5px' }}>{stream.title}</div>
                        <div className="font description" style={{ color: 'white', fontSize: '15px', padding: '5px' }}>{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            )
        })
    }
   
    render() {
        return (
            <Fragment>
                <div className="ui middle celled aligned animated list">{this.renderList()}</div>
                <Link to='/streams/new'>
                    <button className="ui primary basic button " style={{ marginLeft: '5%' }} >create stream</button>
                </Link>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, { FETCHSTREAMS })(streamList)
