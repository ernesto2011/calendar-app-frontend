import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const BtnDelEvent = () => {
  const { deleteEvent } = useCalendarStore();
  const handleClick = () => {
   deleteEvent();
  };

  return (
    <button 
    onClick={handleClick} 
    className="btn btn-danger fab-danger">
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
