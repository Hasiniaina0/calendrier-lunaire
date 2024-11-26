import PropTypes from "prop-types";

const IconeView = ({ onIconClick }) => {
  return (
    <div onClick={onIconClick} className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-zinc-500"
      >
        <path d="M19 3h-1V2a1 1 0 10-2 0v1H8V2a1 1 0 10-2 0v1H5a2 2 0 00-2 2v15a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 17H5V9h14v11zM7 11h5v5H7v-5z"></path>
      </svg>
    </div>
  );
};

IconeView.propTypes = {
  onIconClick: PropTypes.func,
};

export default IconeView;
