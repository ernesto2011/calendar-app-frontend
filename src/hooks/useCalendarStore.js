import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAddNewEvent, onDeletEvent, onUpdateEvent, setActiveEvent } from "../store";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);
    
    const setActiveCalendarEvent = (calendarEvent) => {
        dispatch(setActiveEvent(calendarEvent));
    }
    const startSavingEvent = async(calendarEvent)=>{
      if(calendarEvent._id){
        dispatch(onUpdateEvent({...calendarEvent}))
      }else{
        dispatch(onAddNewEvent({...calendarEvent,_id: new Date().getTime()}))
      }
    }
    const startDeletetingEvent =()=>{
      dispatch(onDeletEvent())
    }
  return{
    //Propiedades
    events, 
    activeEvent,
    haSEventSelected: !!activeEvent,
    //Métodos
    setActiveCalendarEvent,
    startSavingEvent,
    startDeletetingEvent,
  }
}
