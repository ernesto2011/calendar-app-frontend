import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const BtnDelEvent = () => {
  const {  } = useCalendarStore();
  const handleClick = () => {
   
  };

  return (
    <button className="btn btn-danger fab-danger">
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
