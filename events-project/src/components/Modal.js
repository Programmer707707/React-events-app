import React from 'react'
import ReactDOM from 'react-dom';
import "./Modal.css";
export default function Modal(props) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal">
            {props.children}
            {/* <button className='modal-close' onClick={props.handleClose}>close</button> */}
        </div>
    </div>
  ), document.body);
}

