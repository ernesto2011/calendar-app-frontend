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

    const closeModal = () => {
      console.log('cerrando modal');
      
    }

  return (
    <Modal
    isOpen={false}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
    >
        <h1>Hola Mundo</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsa quasi quidem laborum incidunt quas saepe praesentium amet nisi illum?</p>
    </Modal>
  )
}
