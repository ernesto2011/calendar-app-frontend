import { useState } from "react";
import Modal from "react-modal"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
}
Modal.setAppElement('#root');

export const CalendarModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(true)
    const closeModal = () => {
      setIsOpenModal(false)
      
    }

  return (
    <Modal
    isOpen={isOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    className="modal"
    overlayClassName='modal-fondo'
    closeTimeoutMS={250}
    >
        <h1>Hola Mundo</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsa quasi quidem laborum incidunt quas saepe praesentium amet nisi illum?</p>
    </Modal>
  )
}
