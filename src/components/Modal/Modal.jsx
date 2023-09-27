import { Component } from "react";

import './Modal.scss'
// import { render } from "@testing-library/react";

export class Modal extends Component {


    render(){
        const {deleteTodo} = this.props
        return(
            <>
            <div className="modal">
                 <div className="del">✕</div>
                <div className="top">
                    <p>Siz Rostanham bu taskni olib tashlaysizmi ?</p>
                </div>
                <div className="center">
                <div className="ok" onClick={
                    deleteTodo
                }
                >
                    Ok</div>
                <div className="cancel" 
                onClick={()=>{
                    let modal = document.querySelector('.modal')
                    modal.style.display = 'none'
                }}
                >Cancel</div>
                </div>
            </div>

            </>

        )
    }
}