import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const BtnDelEvent = () => {
  const { startDeletetingEvent, haSEventSelected } = useCalendarStore();
  const handleClick = () => {
   startDeletetingEvent();
  };

  return (
    <button 
    onClick={handleClick} 
    className="btn btn-danger fab-danger"
    style={{
      display: haSEventSelected ? '' : 'none'
    }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
