import { Calendar} from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { NavBar } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { addHours } from "date-fns";



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
  return (
    <>
      <NavBar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px' }}
        messages={getMessagesES()}
      />
    </>
  );
};
