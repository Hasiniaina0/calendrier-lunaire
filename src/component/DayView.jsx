import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DayView({ imageUrl, title }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 " data-testid="day-view">
      <LazyLoadImage
        src={imageUrl}
        alt={title}
        placeholderSrc="Phase de la lune"
        className="rounded-full border-spacing-52 border-8 border-emerald-950 w-96 h-96 xs:h-80 xs:w-80 sm:h-90 sm:w-90 md:h-96 md:w-96   "
      />

      <h1 className=" mt-10 text-4xl font-semibold text-yellow-200 text-center opacity-50">
        {title}
      </h1>
    </div>
  );
}

DayView.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

export default DayView;
