import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const BtnAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveCalendarEvent } = useCalendarStore();
  const openModal = () => {
    openDateModal();
    setActiveCalendarEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Ernesto",
      },
    });
  };

  return (
    <button onClick={openModal} className="btn btn-primary fab">
      <i className="fas fa-plus"></i>
    </button>
  );
};
