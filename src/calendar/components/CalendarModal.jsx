import { addHours } from "date-fns";
import { useState } from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import { es } from 'date-fns/locale/es';
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', es)
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [formValues, setformValues] = useState({
    title: "Ernesto",
    notes: 'Lopez',
    start: new Date(),
    end: addHours(new Date(), 2),
  })
  const handleInputChange = ({target}) => {
    setformValues({...formValues, [target.name]: target.value });
  };
  const onDateChanged = (event, changing)=>{
    setformValues({...formValues, 
        [changing]: event
     })
  }
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={250}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
          selected={formValues.start}
          className="form-control"
          onChange={(event)=>onDateChanged(event, 'start')}
          dateFormat='Pp'
          showTimeSelect
          locale="es"
          timeCaption="Hora"
          />
        </div>
        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            className="form-control"
            onChange={(event)=>onDateChanged(event, 'end')}
            dateFormat='Pp'
            showTimeSelect
            locale="es"
            timeCaption="Hora"
          />
        </div>
        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>
        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
