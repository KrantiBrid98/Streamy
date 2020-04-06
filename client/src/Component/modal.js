import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'
// react portals are used to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
// in our case, the modal component was ideally a child of streamDelete component. but due to some reasons(z-index and position reltive ie stacking content)
// we wamt to make our modal component a child of direct root div and not of streamDelete
// now instead of making root as parent, we'll create a similar div to root i.r div modal
const Modal = props => {
    let {text} = props
    // createPortal will take 2 arguments, 1st is JSX and 2nd is the refernce to an html element
    return ReactDOM.createPortal(
        <div className="ui dimmer visible modals active" onClick={() => history.push('/')}>
            <div className="ui standard basic visible modal active" onClick={e=>e.stopPropagation()}> 
            {/* to stop event bubbling , for modal not getting onclick event of parent */}
                <div className="ui icon header">
                    <i className="trash icon"></i>
                    {text.title}
                    </div>
                <div className="content" style={{ textAlign: 'center' }}>
                    <p> {text.content}</p>
                </div>
                <div className="actions" style={{ textAlign: 'center' }}>
                    <div className="ui red cancel inverted button">
                        <i className="remove icon"></i>
                        {text.no}
                    </div>
                    <div className="ui green ok inverted button">
                        <i className="checkmark icon"></i>
                        {text.yes}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal