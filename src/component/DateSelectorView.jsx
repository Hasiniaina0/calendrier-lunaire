import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

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
    <div className="flex items-center justify-center space-x-2 text-white ">
      <div onClick={handleIconClick} className="cursor-pointer">
        <svg
          aria-label="Calendar icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-zinc-500"
        >
          <path d="M19 3h-1V2a1 1 0 10-2 0v1H8V2a1 1 0 10-2 0v1H5a2 2 0 00-2 2v15a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 17H5V9h14v11zM7 11h5v5H7v-5z"></path>
        </svg>
      </div>
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
        popperClassName="custom-popper"
        onFocus={(e) => (e.target.readOnly = true)}
        dropdownMode="select"
        portalId="root"
        popperPlacement="bottom-end"
        style={{ marginLeft: 0 }}
      />
    </div>
  );
};

DateSelectorView.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func,
};

export default DateSelectorView;
