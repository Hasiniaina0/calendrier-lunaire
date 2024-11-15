import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

const DatePickerView = ({ selectDate, handleDateChange }) => {
  return (
    <div className=" text-white">
      <DatePicker
        selected={selectDate}
        onChange={handleDateChange}
        className="bg-transparent  text-stone-400 "
        dateFormat="dd/MM/yyyy"
        calendarClassName="bg-gray-800 rounded-lg shadow-xl"
        monthClassName="text-center text-lg font-semibold text-indigo-400"
        showMonthDropdown
        showYearDropdown
        disabledKeyboardNavigation
        dropdownMode="select"
        popperConfig={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [10, 0],
              },
            },
          ],
        }}
      />
    </div>
  );
};

DatePickerView.propTypes = {
  selectDate: PropTypes.dateFormat,
  handleDateChange: PropTypes.dateFormat,
};

export default DatePickerView;
