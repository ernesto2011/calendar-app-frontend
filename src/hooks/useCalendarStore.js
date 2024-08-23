import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAddNewEvent, setActiveEvent } from "../store";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);
    
    const setActiveCalendarEvent = (calendarEvent) => {
        dispatch(setActiveEvent(calendarEvent));
    }
    const startSavingEvent = async(calendarEvent)=>{
      if(calendarEvent._id){

      }else{
        dispatch(onAddNewEvent({...calendarEvent,_id: new Date().getTime()}))
      }
    }
  return{
    //Propiedades
    events, 
    activeEvent,
    //Métodos
    setActiveCalendarEvent,
    startSavingEvent,
  }
}
