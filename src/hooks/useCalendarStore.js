import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const {events} = useSelector(state => state.calendar);

  return{
    events
  }
}
