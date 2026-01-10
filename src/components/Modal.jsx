

export default function Modal({isOpen, onClose}) {
    if (!isOpen) return null;
    return(
        <div className="modal">
            <h3 className="modal__h3">Sign up</h3>
            <div className="modal__container">
                <div className="modal__container--div">
                    <h4 className="modal__container--div--h4">Username</h4>
                    <input className="modal__container--div--input" type="text" placeholder="Username" />
                </div>
                <div className="modal__container--div">
                       <h4 className="modal__container--div--h4">E-Mail</h4>
                    <input className="modal__container--div--input" type="text" placeholder="E-Mail" />
                </div>
                <div className="modal__container--div">
                       <h4 className="modal__container--div--h4">Password</h4>
                    <input className="modal__container--div--input" type="text" placeholder="Password" />
                </div>
            </div>
            <button className="modal__button" onClick={onClose}>Sign up</button>
            <p className="modal__p">Already have an account? <u>Log In</u></p>
        </div>
    )
};