import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

const DateSelectorView = ({ selectedDate, handleDateChange }) => {
  return (
    <div className=" text-white">
      <DatePicker
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
