import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css';

ReactModal.setAppElement('#root')

const Modal = (props) => {

    return (
        <ReactModal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            className={props.className}
        >
            <div>
                {props.children}
            </div>
        </ReactModal>

    )
}

export default Modal
