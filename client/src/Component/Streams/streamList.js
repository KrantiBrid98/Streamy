import React from 'react'
import { FETCHSTREAMS } from '../../Actions'
import { connect } from 'react-redux'

class streamList extends React.Component {
    componentDidMount() {
        this.props.FETCHSTREAMS()
    }
    render() {
        console.log(this.props.streams, 'props')
        return (
            <div className='font'>
                streamList
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { streams: Object.values(state.streams) }
}

export default connect(mapStateToProps, { FETCHSTREAMS })(streamList)
