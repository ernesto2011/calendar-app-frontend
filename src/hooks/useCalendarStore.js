import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setActiveEvent } from "../store";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);
    const setActiveCalendarEvent = (calendarEvent) => {
        dispatch(setActiveEvent(calendarEvent));
    }
  return{
    //Propiedades
    events, 
    activeEvent,
    //Métodos
    setActiveCalendarEvent
  }
}
