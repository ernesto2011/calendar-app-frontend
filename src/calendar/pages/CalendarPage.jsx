import { Calendar} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, CalendarModal, NavBar, BtnAddNew } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useUiStore, useCalendarStore } from "../../hooks";
import { BtnDelEvent } from "../components/BtnDelEvent";



export const CalendarPage = () => {
  const { openDateModal } = useUiStore();
  const {events, setActiveCalendarEvent} = useCalendarStore();
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
    openDateModal();
  }
  const onSelect = (event) =>{
    setActiveCalendarEvent(event);
    //openDateModal();
    //console.log('selected', event);
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
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <BtnAddNew />
      <BtnDelEvent />
    </>
  );
};
