import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DayView({ imageUrl, title }) {
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 ">
      <LazyLoadImage
        src={imageUrl}
        alt={title}
        placeholderSrc="Phase de la lune"
        className="rounded-full border-spacing-52 border-8 border-emerald-950"
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
