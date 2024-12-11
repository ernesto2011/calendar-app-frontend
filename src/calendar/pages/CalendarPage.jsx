import { Calendar} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, CalendarModal, NavBar, BtnAddNew } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useState, useEffect  } from "react";
import { useUiStore, useCalendarStore, useAuthStore } from "../../hooks";
import { BtnDelEvent } from "../components/BtnDelEvent";



export const CalendarPage = () => {
  const {user} = useAuthStore();
  const { openDateModal } = useUiStore();
  const {events, setActiveCalendarEvent, startLoadingEvents} = useCalendarStore();
  const [lastView, setLastView]= useState(localStorage.getItem('lastView') || 'week')
  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid)
    const style={
      backgroundColor: isMyEvent ?'#3476F7': '#465660',
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
  }
  const onViewChanged = (event) =>{
    localStorage.setItem('lastView', event)
    setLastView(event)
  }
  useEffect(() => {
    startLoadingEvents()
  }, [])
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
