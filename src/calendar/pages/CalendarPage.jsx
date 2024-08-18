import { Calendar} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, CalendarModal, NavBar } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { addHours } from "date-fns";
import { useState } from "react";
import { useUiStore } from "../../hooks";



const events = [{
    title: "Meeting",
    start: new Date(),
    end: addHours (new Date(), 2),
    bgColor: '#fafafa',
    user:{
        _id: "123",
        name: "John Doe",
    }
  }, {
}]
export const CalendarPage = () => {
  const { openModal } = useUiStore();
  const [lastView, setLastView]= useState(localStorage.getItem('lastView') || 'week')
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style={
      backgroundColor: '#3476F7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }
    return {
      style,
    }
  }
  const onDoubleClick = (event) =>{
    console.log('double click');
    openModal();
  }
  const onSelect = (event) =>{

  }
  const onViewChanged = (event) =>{
    localStorage.setItem('lastView', event)
    setLastView(event)
  }
  return (
    <>
      <NavBar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClick={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
    </>
  );
};
