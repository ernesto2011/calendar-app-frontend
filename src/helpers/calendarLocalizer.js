import { dateFnsLocalizer } from "react-big-calendar";
import { parse, format, startOfWeek, getDay } from "date-fns";
import esEs from "date-fns/locale/es";

const locales = {
    "es": esEs,
  };
  export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });