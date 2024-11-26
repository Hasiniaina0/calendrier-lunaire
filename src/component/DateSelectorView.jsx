import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import IconeView from "./IconeView";
import { useRef } from "react";

const DateSelectorView = ({ selectedDate, handleDateChange }) => {
  const datePickerRef = useRef(null); // permet de référencer une valeur qui n'est pas nécessaire pour le rendu

  const handleIconClick = () => {
    if (datePickerRef.current) {
      //clé qui vous donne accès à ce que la référence pointe
      datePickerRef.current.setFocus(); // Active le focus pour afficher le calendrier
    }
  };

  return (
    <div className="flex items-center space-x-2 text-white ">
      <IconeView onIconClick={handleIconClick} />
      <DatePicker
        ref={datePickerRef} // stocke la date choisie
        selected={selectedDate}
        onChange={handleDateChange}
        className="bg-transparent  text-stone-400 focus:outline-none "
        dateFormat="dd/MM/yyyy"
        calendarClassName="bg-gray-800 rounded-lg shadow-xl"
        monthClassName="text-center text-lg font-semibold text-indigo-400"
        showMonthDropdown
        showYearDropdown
        onFocus={(e) => (e.target.readOnly = true)}
        dropdownMode="select"
        portalId="root"
        popperPlacement="bottom-end"
      />
    </div>
  );
};

DateSelectorView.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func,
};

export default DateSelectorView;
