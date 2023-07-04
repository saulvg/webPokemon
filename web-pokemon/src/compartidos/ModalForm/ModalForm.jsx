import "./modalForm.css";


const ModalForm = ({ children, setOpenModal }) => {

    const closeModal = () => {
        setOpenModal(false)
        const body = document.querySelector('body')
        body.classList.remove('modal-open')
    };



    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default ModalForm;
